import { ref } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import * as fbStorage from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import * as fbFirestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_7Cs_n1UbUsRFVXG-AmRcZUt-6lak6TA',
  authDomain: 'saintkim12-s-project-01.firebaseapp.com',
  projectId: 'saintkim12-s-project-01',
  storageBucket: 'saintkim12-s-project-01.firebasestorage.app',
  messagingSenderId: '908454966789',
  appId: '1:908454966789:web:947197bf8706c088d5ce6c',
  measurementId: 'G-6W4YEC57Q2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app)

export default function useFirebase() {
  return {
    withDatabase() {
      return { firestore: fbFirestore, db: db }
    },
    async getFromDatabase(path: string) {
      const dbRef = fbFirestore.doc(db, path)
      return (await fbFirestore.getDoc(dbRef)).data()
    },
    // async getListFromDatabase(path: string, orderBy?: string[] | string) {
    // const q = fbFirestore.query.apply(null, [fbFirestore.collection(db, path), ...(orderBy ? [fbFirestore.orderBy.apply(null, Array.isArray(orderBy) ? (orderBy as any) : [orderBy])] : [])])
    async getListFromDatabase(path: string, constraints?: { orderBy?: string; direction?: 'asc' | 'desc' }) {
      const q = fbFirestore.query(fbFirestore.collection(db, path), ...(constraints?.orderBy ? [fbFirestore.orderBy(constraints.orderBy!, constraints.direction)] : []))
      const snap = await fbFirestore.getDocs<any, any>(q)
      // const dbRef = fbFirestore.doc(db, path)
      // const snap = await fbFirestore.getDoc(dbRef)
      if (snap.size > 0) return snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      else return []
    },
    async upsertToDatabase<T extends fbFirestore.DocumentData>(path: string, id: string, value: T) {
      const dbRef = fbFirestore.doc(db, path, id)
      // console.log('dbRef', dbRef)
      // if (dbRef.id === null) await fbFirestore.setDoc(dbRef, value)
      // else
      // await fbFirestore.updateDoc(dbRef, value)
      await fbFirestore.setDoc(dbRef, value, { merge: true })
    },
    async removeFromDatabase(path: string, id: string) {
      const dbRef = fbFirestore.doc(db, path, id)
      await fbFirestore.deleteDoc(dbRef)
    },
    uploadToStorage(path: string, fileOrBlob: Blob) {
      const blob = fileOrBlob as Blob
      // const task = ref<fbStorage.UploadTask>()
      const snapshot = ref<fbStorage.UploadTaskSnapshot>()

      const complete = new Promise<{ result: fbStorage.UploadTaskSnapshot; url: string }>((resolve, reject) => {
        const fileRef = fbStorage.ref(storage, path)
        const task = fbStorage.uploadBytesResumable(fileRef, blob)
        snapshot.value = { ...task.snapshot }
        task.on(
          'state_changed',
          (ss) => (snapshot.value = ss),
          reject,
          async () => {
            snapshot.value = task.snapshot
            const url = await fbStorage.getDownloadURL(task.snapshot.ref)
            resolve({ result: task.snapshot, url })
          }
        )
        // console.log('uploadToStorage', 'res', res);
      })
      return { snapshot, complete }
      // return await complete
    },
    async removeFromStorage(path: string) {
      try {
        const fileRef = fbStorage.ref(storage, path)
        await fbStorage.deleteObject(fileRef)
      } catch (e: any) {
        console.error(e)
      }
    },
  }
}
