<script setup lang="ts">
import { onMounted, ref, unref } from 'vue'
import { usePhoto } from '../composables/photo'
import ContentPage from './ContentPage.vue'
import useUser from '../composables/user'

// const user = ref<{ email: string } | null>(null)
const { user, sendVerifyEmail, handleVerifyLink, continueSignIn, signOut } = useUser()

const photoHandler = usePhoto()
const syncStatus = ref<'idle' | 'pending' | 'success' | 'error'>('idle')

const sortIndex = ref<'createdAt' | 'name'>('createdAt')
const sortBy = ref<'asc' | 'desc'>('desc')
const sortFiles = async () => {
  try {
    const newSortIndex = sortBy.value === 'desc' ? sortIndex.value : sortIndex.value === 'createdAt' ? 'name' : 'createdAt'
    const newSortBy = sortBy.value === 'asc' ? 'desc' : 'asc'
    await photoHandler.loadFiles({ index: newSortIndex, sortBy: newSortBy })
    sortIndex.value = newSortIndex
    sortBy.value = newSortBy
  } catch (e: any) {
    console.error(e)
    window.alert(`error on loadFiles(): ${e.message}`)
  }
}
const pickAndSaveFile = async () => {
  try {
    await photoHandler.pickAndSaveFile()
  } catch (e: any) {
    console.error(e)
    window.alert(`error on pickAndSaveFile(): ${e.message}`)
  }
}
const clearAllFiles = () => photoHandler.clearFiles()
const syncToServerFiles = async () => {
  if (syncStatus.value !== 'idle') return
  try {
    syncStatus.value = 'pending'
    await photoHandler.syncToServerFiles()
    syncStatus.value = 'success'
  } catch (e) {
    console.error(e)
    syncStatus.value = 'error'
  } finally {
    if (syncStatus.value != 'idle') {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      syncStatus.value = 'idle'
    }
  }
}
const login = async () => {
  const email = window.prompt('이메일을 입력하세요')
  if (!email) return
  try {
    await sendVerifyEmail(email)
    window.alert('메일이 발송되었습니다. 메일 인증 후 새로고침하세요')
  } catch (error: any) {
    const errorCode = error.code
    const errorMessage = error.message
    window.alert(`errorCode: ${errorCode}\nerrorMessage: ${errorMessage}`)
  }
}
const logout = async () => {
  signOut()
  await photoHandler.loadFiles({ index: sortIndex.value, sortBy: sortBy.value })
}
onMounted(async () => {
  // console.log('auth', auth)
  const urlParams = new URLSearchParams(window.location.search)
  const isVerifyingStep1 = !!urlParams.get('oobCode')
  if (isVerifyingStep1) {
    // STEP 2: 요청 인증 처리
    console.log('urlParams', urlParams)

    try {
      await handleVerifyLink(urlParams.get('oobCode')!, urlParams.get('verifyId')!)
      window.alert('인증되었습니다.')
    } catch (e: any) {
      window.alert(`인증에 실패했습니다.\n${e.message}`)
    }
    window.location.href = window.location.host
    return
  } else {
    await continueSignIn()
  }
  console.log('user', unref(user))

  // console.log('auth.currentUser', auth.currentUser)

  // if (auth.currentUser == null) {
  // }
})
</script>
<template>
  <div id="main">
    <header>
      <button v-if="user == null" @click="login()">login</button>
      <button v-else @click="logout()">logout</button>
      <button @click="sortFiles()">
        Sort: {{ { createdAt: '생성', name: '파일명' }[sortIndex] }}
        {{ { asc: '^', desc: 'v' }[sortBy] }}
      </button>
      <button @click="pickAndSaveFile()">Add File</button>
      <button @click="clearAllFiles()">Clear All Files</button>
      <button @click="syncToServerFiles()">Sync</button>
    </header>
    <ContentPage />
    <footer v-show="false">Footer</footer>
    <div class="sync-status-notify" :class="[syncStatus]">
      <div class="sync-icon" :class="[syncStatus === 'pending' && 'spinner']"></div>
      <span v-if="syncStatus === 'pending'">{{ 'Syncing data...' }}</span>
      <span v-else-if="syncStatus === 'success'">{{ 'Sync complete.' }}</span>
      <span v-else-if="syncStatus === 'error'">{{ 'Sync failed. Please try again.' }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#main {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: flex-end;
    gap: 6px;
  }
  main {
    width: 100%;
    flex: 1;
    overflow: auto;
    scrollbar-width: thin;
  }
  header,
  main .select-file {
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      // background-color: #eaeaea;
      cursor: pointer;
      transition: border-color 0.25s;
      &:hover {
        border-color: #646cff;
      }
      &:focus,
      &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    }
  }

  .sync-status-notify {
    display: flex;
    align-items: center;
    padding: 10px;
    // margin: 20px auto;
    max-width: 300px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

    &.idle {
      display: none;
    }
    &.pending {
      background-color: #f9f9f9;
      color: #333;
      border: 1px solid #ccc;
    }

    &.success {
      background-color: #e8f5e9;
      color: #2e7d32;
      border: 1px solid #a5d6a7;
    }

    &.error {
      background-color: #ffebee;
      color: #c62828;
      border: 1px solid #ef9a9a;
    }

    .sync-icon {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      &.spinner {
        border: 2px solid #ccc;
        border-top: 2px solid #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
