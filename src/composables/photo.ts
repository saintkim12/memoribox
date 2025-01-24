import { computed, ref, unref } from 'vue'
import webpfy from 'webpfy'
import EXIF from 'exif-js'
import useFirebase from './firebase'
import { v4 } from 'uuid'
import useUser from './user'

export type Photo = {
  id: any
  storeType: 'local' | 'server'
  name: string
  // url?: string;
  // data?: string
  urlNearOriginal?: string
  urlThumbnail?: string
  pathNearOriginal?: string
  pathThumbnail?: string
  dataNearOriginal?: any
  dataThumbnail?: any

  createdAt: number
  updatedAt?: number
  metadata: PhotoMetadata
}
type NewPhoto = Omit<Photo, 'id'>
export type PhotoMetadata = {
  width: number
  height: number
  size: number
  takenAt?: number | null
}

export function usePhotoTransformer() {
  async function convert(image: File | Blob) {
    const convertedData = await webpfy({ image: image, quality: 75 })
    return convertedData
  }
  async function resize(imageFile: File | Blob, w: number, h: number) {
    const src = await new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(imageFile)
      reader.onloadend = function () {
        const base64data = reader.result
        resolve(base64data as string)
      }
    })
    // 이미지 크기를 맞춰서 크롭 또는 리사이징
    const canvas = await new Promise<HTMLCanvasElement>((resolve) => {
      const canvas = document.createElement('canvas')!
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = src
      img.onload = () => {
        // const scale = Math.min(w / img.width, h / img.height)
        // const newWidth = img.width * scale
        // const newHeight = img.height * scale
        // canvas.width = w
        // canvas.height = h
        // ctx!.drawImage(img, (w - newWidth) / 2, (h - newHeight) / 2, newWidth, newHeight)

        const scale = Math.max(w / img.width, h / img.height) // 긴 쪽 기준으로 스케일 설정
        const newWidth = img.width * scale
        const newHeight = img.height * scale

        // 캔버스 크기 설정
        canvas.width = w
        canvas.height = h

        // 이미지 중심에서 자르기
        const offsetX = (newWidth - w) / 2
        const offsetY = (newHeight - h) / 2

        ctx!.drawImage(
          img,
          -offsetX, // 잘라내는 위치
          -offsetY,
          newWidth,
          newHeight
        )
        resolve(canvas)
      }
    })
    return new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => resolve(blob!))
    })
  }
  async function getPhotoMetadata(imageFile: File | Blob) {
    return new Promise<PhotoMetadata>((resolve, reject) => {
      const fileReader = new FileReader()

      fileReader.onload = () => {
        // const arrayBuffer = fileReader.result

        // 이미지 크기 및 파일 크기 읽기
        const img = new Image()
        img.onload = () => {
          // EXIF 데이터 읽기 (TakenAt 등)
          let takenAt: number | null = null
          // if (typeof EXIF !== 'undefined') {
          EXIF.getData(img.src, function (this: any) {
            // takenAt = EXIF.getTag(this, 'DateTimeOriginal') || null
            const dt: string = EXIF.getTag(this, 'DateTimeOriginal') || null
            if (dt) {
              // new Date(...`2003:08:11 16:45:32`.split(/\D/).map((s, i) => i === 1 ? s - 1 : Number(s)))
              takenAt = Date.UTC.apply(null, dt.split(/\D/).map((s, i) => (i === 1 ? Number(s) - 1 : Number(s))) as [number, number, number, number, number, number]) || null
            }
          })
          // }

          const metadata: PhotoMetadata = {
            width: img.width,
            height: img.height,
            size: imageFile.size, // 파일 크기
            takenAt: takenAt ?? null, // EXIF 데이터로 얻은 촬영 시간
          }
          resolve(metadata)
        }
        img.onerror = reject

        // 이미지 소스로 설정
        img.src = URL.createObjectURL(imageFile)
      }

      fileReader.onerror = reject

      // 읽기 시작
      fileReader.readAsArrayBuffer(imageFile)
    })
  }
  return {
    convert,
    resize,
    getPhotoMetadata,
  }
}

const photos = ref<Array<Photo>>([])

export function usePhoto() {
  const DB_NAME = 'Photo'
  const PHOTO_STORE_NAME = 'photo'

  const { user } = useUser()
  const dbName = computed(() => `${DB_NAME}_${unref(user)?.uid ?? 'guest'}`)

  async function initDB() {
    try {
      const result = await new Promise<IDBOpenDBRequest['result']>((resolve, reject) => {
        const request = indexedDB.open(dbName.value, 1)

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
            const store = db.createObjectStore(PHOTO_STORE_NAME, {
              keyPath: 'id',
              autoIncrement: false,
            })
            store.createIndex('id', 'id', { unique: true })
            store.createIndex('name', 'name', { unique: false })
            store.createIndex('dataNearOriginal', 'dataNearOriginal', {
              unique: false,
            })
            store.createIndex('dataThumbnail', 'dataThumbnail', {
              unique: false,
            })
            store.createIndex('createdAt', 'createdAt', { unique: false })
            store.createIndex('updatedAt', 'updatedAt', { unique: false })
          }
        }

        request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest)?.result)
        request.onerror = (event) => reject((event.target as IDBOpenDBRequest)?.error)
      })
      return result
    } catch (e) {
      console.error(e)
      const error = e as IDBOpenDBRequest['error']
      throw error
    }
  }
  async function loadFiles(arg?: { index?: 'createdAt' | 'name'; sortBy?: 'asc' | 'desc' }) {
    const db = await initDB()
    const transaction = db.transaction(PHOTO_STORE_NAME, 'readonly')
    const store = transaction.objectStore(PHOTO_STORE_NAME)
    const indexName: 'createdAt' | 'name' = arg?.index === 'name' ? 'name' : 'createdAt'
    const index = store.index(indexName)
    const direction = arg?.sortBy === 'asc' ? 'next' : 'prev'
    const request = index.openCursor(null, direction)

    photos.value = await new Promise<Photo[]>((resolve, reject) => {
      const results: Array<Photo> = []
      request.onsuccess = (event) => {
        const target = event.target as IDBRequest<IDBCursorWithValue | null>
        let cursor: IDBCursorWithValue | null
        if ((cursor = target.result)) {
          results.push(cursor.value)
          cursor.continue()
        } else {
          resolve(results)
        }
      }
      request.onerror = () => reject(request.error)
    })
    // console.log('loadFiles', 'photos', photos.value)
    // photos.value = await new Promise<Photo[]>((resolve, reject) => {
    //   const request = store.getAll() as IDBRequest<Photo[]>
    //   request.onsuccess = () => resolve(request.result)
    //   request.onerror = () => reject(request.error)
    // })
    return photos
  }
  // async function saveFile(newPhoto: NewPhoto) {
  //   const db = await initDB()
  //   const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite')
  //   const store = transaction.objectStore(PHOTO_STORE_NAME)

  //   store.add(newPhoto)

  //   const photo = newPhoto as Photo
  //   photos.value.push(photo)
  //   photos.value = photos.value.sort((p1, p2) => (p1.createdAt < p2.createdAt ? 1 : -1))
  // }

  async function pickAndSaveFile(type: 'file' | 'folder' = 'file') {
    const email = unref(useUser().user)?.email
    if (!email) throw new Error('User is Not Logined')

    const photoFileHandler = usePhotoTransformer()
    const { upsertToDatabase, uploadToStorage } = useFirebase()
    const handleLoop = async (handle: FileSystemDirectoryHandle | FileSystemFileHandle) => {
      const { name, kind } = handle
      if (kind === 'file' && /\.(png|jpe?g|webp|gif)$/i.test(name)) {
        const file = await handle.getFile()

        const photoId = v4()
        //
        const { webpBlob: nearOriginal } = await photoFileHandler.convert(file)
        const { webpBlob: thumbnail } = await photoFileHandler.resize(nearOriginal, 200, 200).then(photoFileHandler.convert)
        const newPhoto: NewPhoto = {
          // id: `${Date.now()}`,
          storeType: 'local',
          createdAt: Date.now(),
          name: file.name,
          dataNearOriginal: nearOriginal,
          dataThumbnail: thumbnail,
          metadata: await photoFileHandler.getPhotoMetadata(file),
        }
        // await saveFile(newPhoto as Photo)
        await upsertToDatabase(`users/${email}/photos`, `${photoId}`, {
          filename: newPhoto.name,
          createdAt: newPhoto.createdAt,
          updatedAt: newPhoto.createdAt,
          metadata: newPhoto.metadata,
        })
        {
          const path = `${email}/${photoId}/norg`
          uploadToStorage(path, nearOriginal).complete.then(({ url }) => {
            console.log('norg', 'uploaded', url)
            return upsertToDatabase(`users/${email}/photos`, `${photoId}`, { urlOriginal: url })
          })
        }
        {
          const path = `${email}/${photoId}/thumbnail`
          uploadToStorage(path, thumbnail).complete.then(async ({ url }) => {
            console.log('thumbnail', 'uploaded', url)
            return upsertToDatabase(`users/${email}/photos`, `${photoId}`, { urlThumbnail: url })
          })
        }
      }
    }
    try {
      if (type === 'folder') {
        const res = await window.showDirectoryPicker()
        for await (const handle of res.values()) {
          await handleLoop(handle)
        }
      } else {
        const res = await window.showOpenFilePicker({
          multiple: true,
          types: [
            {
              description: 'Images',
              accept: {
                'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp'],
              },
            },
          ],
        })
        for await (const handle of res.values()) {
          await handleLoop(handle)
        }
      }
    } catch (e: any) {
      if (e.name === 'AbortError') return
      else throw e
    }
  }

  async function clearFiles() {
    const db = await initDB()
    const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite')
    const store = transaction.objectStore(PHOTO_STORE_NAME)
    store.clear()
    photos.value.splice(0, photos.value.length)
  }

  async function removeFile(photoId: Photo['id']) {
    const db = await initDB()
    let target: Photo
    {
      const transaction = db.transaction(PHOTO_STORE_NAME, 'readonly')
      const store = transaction.objectStore(PHOTO_STORE_NAME)
      target = await new Promise<Photo>((resolve, reject) => {
        const req = store.get(photoId)
        req.onsuccess = () => resolve(req.result ?? null)
        req.onerror = () => reject(req.error)
      })
    }
    if (target == null) return false
    if (target.storeType === 'server') {
      const email = unref(useUser().user)?.email
      if (!email) throw new Error('User is Not Logined')
      const { removeFromDatabase, removeFromStorage } = useFirebase()
      // db 데이터 삭제
      await removeFromDatabase(`users/${email}/photos`, `${photoId}`)
      // 사진 파일 삭제
      {
        const path = `${email}/${photoId}/norg`
        await removeFromStorage(path)
      }
      {
        const path = `${email}/${photoId}/thumbnail`
        await removeFromStorage(path)
      }
    }
    {
      const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite')
      const store = transaction.objectStore(PHOTO_STORE_NAME)
      store.delete(photoId)
    }
    photos.value = photos.value.filter((o) => o.id !== photoId)
  }

  async function syncToServerFiles() {
    const db = await initDB()
    // const indexName: 'createdAt' | 'name' = arg?.index === 'name' ? 'name' : 'createdAt'
    // const index = store.index(indexName)
    // const direction = arg?.sortBy === 'asc' ? 'next' : 'prev'
    // const request = index.openCursor(null, direction)
    const { getListFromDatabase } = useFirebase()
    const email = unref(user)?.email
    if (!email) throw new Error('User is Not Logined')
    type DatabasePhotoList = Array<Partial<Pick<Photo, 'id' | 'createdAt' | 'updatedAt' | 'urlThumbnail' | 'metadata'> & { filename: Photo['name']; urlOriginal: Photo['urlNearOriginal'] }>>
    const results: DatabasePhotoList = await getListFromDatabase(`users/${email}/photos`, {
      orderBy: 'createdAt',
      direction: 'desc',
    })
    for (const data of results) {
      let oldPhoto: Photo
      const id = data.id
      {
        const transaction = db.transaction(PHOTO_STORE_NAME, 'readonly')
        const store = transaction.objectStore(PHOTO_STORE_NAME)
        oldPhoto = await new Promise<Photo>((resolve, reject) => {
          const req = store.get(id)
          req.onsuccess = () => resolve(req.result ?? null)
          req.onerror = () => reject(req.error)
        })
      }
      {
        const transaction = db.transaction(PHOTO_STORE_NAME, 'readwrite')
        const store = transaction.objectStore(PHOTO_STORE_NAME)
        if (oldPhoto != null) {
          if (oldPhoto.updatedAt === data.updatedAt) continue
          if (oldPhoto.updatedAt! > data.updatedAt!) {
            /** @TODO upload to server */
            //
            continue
          }
        }
        /** @TODO set to local */
        const newPhoto: Partial<Photo> = {
          id: id,
          storeType: 'server',
          createdAt: data.createdAt!,
          updatedAt: data.updatedAt!,
          name: data.filename!,
          urlNearOriginal: data.urlOriginal,
          urlThumbnail: data.urlThumbnail,
          metadata: data.metadata!,
        }
        store.put(newPhoto)
      }
    }

    await loadFiles()
    // photos.value = results.map(
    //   (o) =>
    //     ({
    //       id: o.id,
    //       storeType: 'server',
    //       name: o.filename,
    //       createdAt: o.createdAt,
    //       updatedAt: o.updatedAt,
    //       metadata: o.metadata,
    //       urlNearOriginal: o.urlOriginal,
    //       urlThumbnail: o.urlThumbnail,
    //     } as Photo)
    // )
  }
  const instance = { photos, loadFiles, pickAndSaveFile, clearFiles, removeFile, syncToServerFiles }
  return instance
}
