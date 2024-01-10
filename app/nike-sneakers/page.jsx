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

export default async function NikeSneakers() {
  const q = query(
    collection(firestore, "products"),
    where("category", "==", "nike-sneakers"),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc"),
    limit(13)
  );

  const top12Products = await executeQueryOnProductsCollection(q);
  return (
    <Paginage
      top12Products={top12Products.slice(0, 12)}
      hasMoreProducts={top12Products.length > 12}
    />
  );
}
