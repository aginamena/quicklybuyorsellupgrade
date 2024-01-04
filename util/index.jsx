import {
  auth,
  deleteDoc,
  doc,
  firestore,
  getDoc,
  getDocs,
  provider,
  setDoc,
  signInWithPopup,
  updateDoc,
} from "@/config/firebase";

export async function getFromFirestore(path) {
  const docRef = doc(firestore, path);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("No Document found");
  }
}

export function isUserAdmin() {
  const currentUser = getUser();
  return (
    currentUser &&
    (currentUser.email === process.env.REACT_APP_ADMIN ||
      currentUser.email === process.env.REACT_APP_ADMIN2)
  );
}

export async function executeQueryOnProductsCollection(query) {
  const querySnapshot = await getDocs(query);
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export async function deleteDataInFirestore(path) {
  await deleteDoc(doc(firestore, path));
}
export async function updateDataInFirestore(path, data) {
  await updateDoc(doc(firestore, path), data);
}
export async function storeDataInFirestore(path, data) {
  await setDoc(doc(firestore, path), data);
}

export async function signInWithGoogle() {
  const user = await signInWithPopup(auth, provider);
  return user;
}
