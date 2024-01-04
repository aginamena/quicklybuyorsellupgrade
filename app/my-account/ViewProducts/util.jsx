import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "@/config/firebase";
import { executeQueryOnProductsCollection } from "@/util";

export async function getAllProducts(email, productId, setHasMore) {
  const q = productId
    ? query(
        collection(firestore, "products"),
        where("creatorOfProduct", "==", email),
        orderBy("productId", "desc"),
        startAfter(productId),
        limit(13)
      )
    : query(
        collection(firestore, "products"),
        where("creatorOfProduct", "==", email),
        orderBy("productId", "desc"),
        limit(13)
      );

  const products = await executeQueryOnProductsCollection(q);
  if (products.length < 13) {
    setHasMore(false);
    return products;
  }
  return products.splice(0, 12);
}
