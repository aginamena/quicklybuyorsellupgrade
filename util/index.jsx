import { setDoc, doc, firestore } from "@/config/firebase";

export function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export async function storeDataInFirestore(path, data) {
  await setDoc(doc(firestore, path), data);
}
