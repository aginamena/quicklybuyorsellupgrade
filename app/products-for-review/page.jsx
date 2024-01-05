import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "@/config/firebase";
import { executeQueryOnProductsCollection } from "@/util";
import Paginage from "./Paginate";

export default async function ProductsForReview() {
  const q = query(
    collection(firestore, "products"),
    where("category", "==", "nike-sneakers"),
    where("productStatus", "==", "On review"),
    orderBy("productId", "desc"),
    limit(12)
  );

  const top12ProductsOnReview = await executeQueryOnProductsCollection(q);
  return <Paginage top12ProductsOnReview={top12ProductsOnReview} />;
}
