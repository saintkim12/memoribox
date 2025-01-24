<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { Photo, usePhoto, PhotoMetadata } from '../composables/photo'
import PhotoViewModal from './PhotoViewModal.vue'

const photoViewModal = ref<InstanceType<typeof PhotoViewModal> | null>(null)
const photoHandler = usePhoto()
// const photoFileHandler = usePhotoTransformer()

type GallaryItems = Array<{
  id: number
  type: 'local' | 'server'
  name: Photo['name']
  src?: string
  metadata: PhotoMetadata & { createdAt: Photo['createdAt'] }
}>

const itemStateMap = ref<Record<string, boolean>>({})

// const photoList = ref<
//   Array<{
//     type: 'local' | 'server'
//     name: Photo['name']
//     src?: string
//   }>
// >([])
const photoList = computed<GallaryItems>(() => {
  // console.log('photoHandler.photos', 'changed', photoHandler.photos.value)
  const arr: GallaryItems = []
  for (const photo of photoHandler.photos.value) {
    arr.push({
      id: photo.id,
      type: photo.storeType,
      name: photo.name,
      src: photo.storeType === 'local' ? URL.createObjectURL(photo.dataThumbnail) : photo.urlThumbnail,
      metadata: { ...photo.metadata, createdAt: photo.createdAt },
    })
  }
  return arr
})
const pickAndSaveFile = async () => {
  try {
    await photoHandler.pickAndSaveFile()
  } catch (e: any) {
    console.error(e)
    window.alert(`error on pickAndSaveFile(): ${e.message}`)
  }
}
const openPhotoViewModal = (id: Photo['id']) => {
  photoViewModal.value?.show?.()
  photoViewModal.value?.setPhotos?.(photoHandler.photos.value, id)
}
const removeFile = async (id: number) => {
  try {
    await photoHandler.removeFile(id)
  } catch (e: any) {
    console.error(e)
    window.alert(`error on removeFile(): ${e.message}`)
  }
}

onMounted(async () => {
  try {
    await photoHandler.loadFiles()
  } catch (e: any) {
    console.error(e)
    window.alert(`error on loadFiles(): ${e.message}`)
  }
  // const files = await photoHandler.loadFiles()
  // for (const photo of files) {
  //   photoList.value.push({
  //     type: 'local',
  //     name: photo.name,
  //     src: URL.createObjectURL(photo.dataThumbnail),
  //   })
  // }
})
</script>
<template>
  <main>
    <div v-if="photoList.length === 0" class="select-file">
      <button @click="pickAndSaveFile()">Select File</button>
    </div>
    <!-- <ImageFileListView v-else /> -->
    <div v-else class="image-file-list-view">
      <div
        v-for="photo in photoList"
        :key="photo.id"
        class="image-container"
        @mouseenter="itemStateMap[`${photo.id}`] = true"
        @mouseleave="itemStateMap[`${photo.id}`] = false"
        :title="
          [
            `filename: ${photo.name}`,
            `createdAt: ${Intl.DateTimeFormat('ko', {
              dateStyle: 'long',
              timeStyle: 'medium',
            }).format(photo.metadata.createdAt)}`,
          ].join('\n')
        "
      >
        <img :src="photo.src" :alt="photo.name" @error=";($event.target as HTMLImageElement).src = 'https://placehold.co/10' /** @FIXME */" />
        <div v-show="itemStateMap[`${photo.id}`]" class="info-overlay">
          <button class="view-btn" @click="openPhotoViewModal(photo.id)">👀</button>
          <button class="delete-btn" @click="removeFile(photo.id)">🗑️</button>
        </div>
        <!-- <div v-show="false">filename: {{ photo.name }}<br>metadata: {{ photo.metadata }}</div> -->
      </div>
    </div>
  </main>
  <PhotoViewModal ref="photoViewModal" />
</template>
<style lang="scss" scoped>
main {
  .select-file {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-file-list-view {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: flex-start;
    padding: 12px;
  }
  .image-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > .info-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(128, 128, 128, 0.2);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      .view-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 48px;
        cursor: pointer;
        // align-items: flex-start;
        // justify-content: flex-end;
      }
      .delete-btn {
        position: absolute;
        top: 4px;
        right: 4px;
        // align-items: flex-start;
        // justify-content: flex-end;
      }
    }
  }
}
</style>
