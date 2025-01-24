<script setup lang="ts">
import { computed, ref } from 'vue'
import { Photo } from '../composables/photo'

// const props = defineProps<{
// photos?: Array<any>
// focus?: Photo
// }>()

type PhotoViewItem = {
  id: Photo['id']
  type: Photo['storeType']
  name: Photo['name']
  size: Photo['metadata']['size']
  thumbnailSrc?: Photo['urlThumbnail']
  nearOriginalSrc?: Photo['urlNearOriginal']
  dataNearOriginal?: Photo['dataNearOriginal']
  // metadata: { ...photo.metadata, createdAt: photo.createdAt },
}
const optPhotos = computed<Array<any>>(() => {
  // const photos = props.photos
  const passedPhotos = photoList.value
  return [...(Array.isArray(passedPhotos) ? passedPhotos : [])]
})

const currentIndex = ref<number>(0)
const currentPhoto = computed<PhotoViewItem | null>(() => {
  const currentPhoto = photoList.value?.[currentIndex.value]
  if (currentPhoto == null) return null
  else {
    let nearOriginalSrc = currentPhoto?.nearOriginalSrc
    isCurrentPhotoLoading.value = true
    if (currentPhoto.type === 'local') nearOriginalSrc = nearOriginalSrc ?? (currentPhoto?.dataNearOriginal ? URL.createObjectURL(currentPhoto?.dataNearOriginal) : undefined)
    // console.log('nearOriginalSrc', nearOriginalSrc, 'currentPhoto', currentPhoto)
    return { ...currentPhoto, nearOriginalSrc }
  }
})
const isCurrentPhotoLoading = ref<boolean>(false)
const photoList = ref<Array<PhotoViewItem>>([])
const isShowing = ref<boolean>(false)
const setPhotos = (photos: Array<Photo>, id?: Photo['id']) => {
  const arr: Array<PhotoViewItem> = []
  for (const photo of photos) {
    arr.push({
      id: photo.id,
      type: photo.storeType,
      name: photo.name,
      size: photo.metadata.size,
      ...(photo.storeType === 'local' && { thumbnailSrc: URL.createObjectURL(photo.dataThumbnail), dataNearOriginal: photo.dataNearOriginal }),
      ...(photo.storeType === 'server' && { thumbnailSrc: photo.urlThumbnail, nearOriginalSrc: photo.urlNearOriginal }),
      // metadata: { ...photo.metadata, createdAt: photo.createdAt },
    })
  }
  photoList.value = arr
  // currentIndex.value = 0
  if (id != null) {
    currentIndex.value = photoList.value.findIndex((photo) => photo.id === id)
  }
}
const show = () => (isShowing.value = true)
const hide = () => (isShowing.value = false)

defineExpose({
  setPhotos,
  show,
  hide,
})
</script>
<template>
  <div v-show="isShowing" class="modal-wrap">
    <div class="modal-overlay"></div>
    <div class="photo-view-modal">
      <div class="modal-header">
        <span class="close-btn" @click="hide()">X</span>
      </div>
      <div class="modal-body">
        <div class="photo-view">
          <div>
            <img
              :src="currentPhoto?.nearOriginalSrc"
              :alt="currentPhoto?.name"
              :title="currentPhoto != null ? [`name: ${currentPhoto.name}`, `size: ${currentPhoto.size}`].join('\n') : ''"
              :style="{ visibility: isCurrentPhotoLoading ? 'hidden' : 'visible' }"
              @load="isCurrentPhotoLoading = false"
              @error=";[(isCurrentPhotoLoading = false), (($event.target as HTMLImageElement).src = 'https://placehold.co/10') /** @FIXME */]"
            />
          </div>
        </div>
        <div class="photo-preview-list">
          <div>
            <div v-for="(photo, idx) in optPhotos" :key="photo.id" :class="currentIndex === idx && 'selected'" @click="currentIndex = idx">
              <img :src="photo.thumbnailSrc" @error=";($event.target as HTMLImageElement).src = 'https://placehold.co/10' /** @FIXME */" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.modal-wrap {
  position: fixed;
  inset: 0;
}
.modal-overlay {
  z-index: -1;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.photo-view-modal {
  z-index: 0;
  height: 100vh;
  // min-height: 667px;
  display: flex;
  flex-direction: column;
  > .modal-header {
    display: flex;
    align-items: center;
    position: relative;
    height: 60px;
    .close-btn {
      position: absolute;
      right: 12px;
      width: 24px;
      height: 24px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: pointer;
    }
  }
  > .modal-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
    // background-color: white;
    height: 100%;
    .photo-view {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: tranparent;
      > div {
        width: 100%;
        height: 100%;
        // max-width: min(100vw, 100%);
        // max-height: min(100vw, 100%);
        // max-width: unquote('min(100vw, calc(100vh - 60px - 100px - 6px))');
        max-width: min(100vw, calc(100vh - 60px - 100px - 6px - 6px));
        // max-height: unquote('min(100vw, calc(100vh - 60px - 100px - 6px))');
        max-height: min(100vw, calc(100vh - 60px - 100px - 6px - 6px));
        background-color: white;
        img {
          width: 100%;
          height: 100%;
          // object-fit: cover;
          object-fit: contain;
        }
      }
    }
    .photo-preview-list {
      height: 100px;
      margin-bottom: 6px;
      // background-color: tranparent;
      > div {
        display: flex;
        gap: 4px;
        justify-content: safe center;
        overflow: scroll hidden;
        scrollbar-width: thin;
        > div {
          width: 100px;
          height: 100px;
          cursor: pointer;
          &.selected {
            outline: 3px solid rgb(0, 183, 255);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background-color: white;
          }
        }
      }
    }
  }
}
</style>
