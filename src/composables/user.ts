import { ref, watch } from 'vue'
import useFirebase from './firebase'
import { checkActionCode, getAuth, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth'

const auth = getAuth()

const state = ref<'init' | 'ready'>('init')
const user = ref<{ email: string; uid: string } | null>(null)
export default function useUser() {
  return {
    state,
    user,
    ready() {
      return new Promise<boolean>((resolve) => {
        // if (state.value === 'ready') return true;
        let unwatch: Function
        unwatch = watch(
          state,
          () => {
            if (state.value === 'ready') [unwatch?.(), resolve(true)]
          },
          { immediate: true }
        )
      })
    },
    async sendVerifyEmail(email: string) {
      try {
        // STEP 1: 인증 요청
        const { firestore, db } = useFirebase().withDatabase()
        const colRef = firestore.collection(db, 'verify')
        const ref = firestore.doc(colRef)
        console.log('id', ref.id)
        const href = new URL(window.location.href)
        href.searchParams.set('verifyId', ref.id)
        const url = href.toString()
        await firestore.setDoc(ref, { isVerified: false, email: email })
        await sendSignInLinkToEmail(auth, email, { url: url, handleCodeInApp: true })

        window.localStorage.setItem('verifyId', ref.id)
      } catch (error: any) {
        console.error(error)
        throw error
      }
    },
    async handleVerifyLink(oobCode: string, verifyId: string) {
      try {
        const resp = await checkActionCode(auth, oobCode)
        console.log('resp', resp)
        // if (resp.operation === 'VERIFY_EMAIL') {
        if (resp.operation === 'EMAIL_SIGNIN') {
          // const email = resp.data.email!
          // if (email?.trim?.()) {
          // await useFirebase().upsertToDatabase('users', email, { id: email, isVerified: true, emailLink: window.location.href })
          const { firestore, db } = useFirebase().withDatabase()
          const ref = firestore.doc(db, 'verify', verifyId)
          const doc = await firestore.getDoc(ref)
          if (doc.exists()) {
            try {
              const verifyData = doc.data()
              console.log('verifyData', verifyData)
              const { email } = verifyData ?? {}
              const emailLink = window.location.href
              const result = await signInWithEmailLink(auth, email, emailLink)
              console.log('result.user', result?.user, 'auth.currentUser', auth.currentUser)
              const user = auth.currentUser!
              await firestore.updateDoc(ref, {
                isVerified: true,
                email: user.email, // 사용자 이메일
                uid: user.uid, // 사용자 UID
                // refreshToken: user.refreshToken, // 리프레시 토큰
              })
              // window.alert('인증되었습니다.')
            } catch (e) {
              console.error(e)
              throw e
            }
          }
          // }
          // window.location.href = window.location.host
        }
      } catch (e) {
        console.error(e)
        throw e;
      }
    },
    async continueSignIn() {
      const verifyId = window.localStorage.getItem('verifyId')
      const isVerifyingStep2 = !!verifyId
      const { firestore, db } = useFirebase().withDatabase()
      if (isVerifyingStep2) {
        // STEP 3: 처리된 인증으로 회원가입 처리
        const ref = firestore.doc(db, 'verify', verifyId)
        const doc = await firestore.getDoc(ref)
        const verifyData = doc.data()
        console.log('verifyData', verifyData)
        const { email, uid } = verifyData ?? {}
        if (!email || !uid) console.error(verifyId, 'invalid data: ', verifyData)
        else {
          try {
            window.localStorage.setItem('loginInfo', JSON.stringify({ email, uid }))
            window.localStorage.removeItem('verifyId')
            // window.localStorage.setItem('loginInfo', JSON.stringify({ email, emailLink }))
            // console.log(auth, email, emailLink)
            // const result = await signInWithEmailLink(auth, email, emailLink)
            // console.log('signInWithEmailLink', 'result', result)
            // await useFirebase().upsertToDatabase('users', email, { id: email })
            // // await firestore.updateDoc(ref, { isVerified: true })
          } catch (e) {
            console.error(e)
          }
        }
      }
      const loginInfo = await Promise.resolve(window.localStorage.getItem('loginInfo')).then((v) => {
        try {
          const loginInfo = JSON.parse(v ?? '')
          if (loginInfo.uid && loginInfo.email) return loginInfo
        } catch {}
        return null
      })
      const email = loginInfo?.email
      const uid = loginInfo?.uid
      if (email && uid) user.value = { email, uid }
      // if (auth.currentUser == null && loginInfo != null) {
      //   const { email, emailLink } = loginInfo
      //   console.log(auth, email, emailLink)
      //   const result = await signInWithEmailLink(auth, email, emailLink)
      //   console.log('signInWithEmailLink', 'result', result)
      // }
      // const email = window.localStorage.getItem('emailForSignIn')
      // const isLogining = !!email
      // if (isLogining) {
      //   // https://saintkim12-s-project-01.firebaseapp.com/__/auth/action?apiKey=apiKey&mode=signIn&oobCode=oobCode&continueUrl=http://localhost:5173/&lang=en
      //   if (!email) return
      //   const userInfo = (await useFirebase().getFromDatabase(`users/${email}`)) as any
      //   console.log('userInfo', userInfo)
      //   await signInWithEmailLink(auth, email, userInfo.emailLink).then((result) => {
      //     // Clear email from storage.
      //     window.localStorage.removeItem('emailForSignIn')
      //     // You can access the new user by importing getAdditionalUserInfo
      //     // and calling it with result:

      //     console.log('result', getAdditionalUserInfo(result)) // {"isNewUser":false,"providerId":"password","profile":{}}
      //     // You can access the user's profile via:
      //     // getAdditionalUserInfo(result)?.profile
      //     // You can check if the user is new or existing:
      //     // getAdditionalUserInfo(result)?.isNewUser
      //   })
      //   // .catch((error) => {
      //   //   console.error(error.code)
      //   //   // Some error occurred, you can inspect the code: error.code
      //   //   // Common errors could be invalid email and invalid or expired OTPs.
      //   // })
      // }
      state.value = 'ready'
      return user
    },
    signOut() {
      window.localStorage.removeItem('loginInfo')
      user.value = null
    },
  }
}
