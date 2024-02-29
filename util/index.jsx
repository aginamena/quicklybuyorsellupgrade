import {
  auth,
  collection,
  deleteDoc,
  doc,
  firestore,
  getDoc,
  getDocs,
  provider,
  setDoc,
  query,
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
  return currentUser && currentUser.email === process.env.NEXT_PUBLIC_ADMIN;
}

export async function executeQueryOnProductsCollection(query) {
  const querySnapshot = await getDocs(query);
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export async function deleteAllData() {
  const q = query(collection(firestore, "products"));
  const querySnapshot = await getDocs(q);
  const result = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (
      data.creatorOfProduct == "ezefaithblaze@gmail.com" ||
      data.creatorOfProduct == "maryannudoji@gmail.com"
    ) {
      data.amount = Math.round(data.amount);
      result.push(updateDataInFirestore(`products/${data.productId}`, data));
    }
  });
  await Promise.all(result);
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
