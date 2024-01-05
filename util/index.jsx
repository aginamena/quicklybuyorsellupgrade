import {
  auth,
  collection,
  deleteDoc,
  doc,
  firestore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  provider,
  query,
  setDoc,
  signInWithPopup,
  startAfter,
  updateDoc,
  where,
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
    (currentUser.email === process.env.NEXT_PUBLIC_ADMIN ||
      currentUser.email === process.env.NEXT_PUBLIC_ADMIN2)
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

export async function getNext12Products(products, setProducts, setHasMore) {
  const selectedCategory = "nike-sneakers";
  const q = query(
    collection(firestore, "products"),
    where("category", "==", selectedCategory),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc"),
    //   ...filterCondition,
    startAfter(products[products.length - 1].productId),
    limit(13)
  );
  const next12Products = await executeQueryOnProductsCollection(q);
  if (next12Products.length < 13) {
    setHasMore(false);
  }
  setProducts([...products, ...next12Products.splice(0, 12)]);
}
