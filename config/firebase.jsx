import { getAnalytics, isSupported } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
async function isWebEnvironment() {
  if (await isSupported()) getAnalytics(app);
}
isWebEnvironment();

export {
  auth,
  browserLocalPersistence,
  collection,
  deleteDoc,
  deleteObject,
  doc,
  firestore,
  getAdditionalUserInfo,
  getDoc,
  getDocs,
  getDownloadURL,
  limit,
  onAuthStateChanged,
  orderBy,
  provider,
  query,
  ref,
  setDoc,
  setPersistence,
  signInWithPopup,
  signOut,
  startAfter,
  storage,
  updateDoc,
  uploadBytes,
  where,
};
