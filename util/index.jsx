import { setDoc, doc, firestore, getDocs } from "@/config/firebase";

export function getUser() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
}

export async function executeQueryOnProductsCollection(query) {
  const querySnapshot = await getDocs(query);
  const result = [];
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
}

export async function storeDataInFirestore(path, data) {
  await setDoc(doc(firestore, path), data);
}
