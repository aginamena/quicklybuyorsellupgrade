import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "@/config/firebase";
import { executeQueryOnProductsCollection } from "@/util";
import Body from "./Body";

//refetching the data every 5minutes (60 * 5 = 300)
export const revalidate = 300;

export default async function NikeSneakers(props) {
  let q = null;

  if (Object.keys(props.searchParams).length > 0) {
    const { size, color } = props.searchParams;
    if (size && color) {
      q = query(
        collection(firestore, "products"),
        where("productStatus", "==", "Published"),
        where("sizes", "array-contains", parseInt(size)),
        where("color", "==", color),
        orderBy("productId", "desc"),
        limit(13)
      );
    } else if (size) {
      q = query(
        collection(firestore, "products"),
        where("productStatus", "==", "Published"),
        where("sizes", "array-contains", parseInt(size)),
        orderBy("productId", "desc"),
        limit(13)
      );
    } else {
      q = query(
        collection(firestore, "products"),
        where("productStatus", "==", "Published"),
        where("color", "==", color),
        orderBy("productId", "desc"),
        limit(13)
      );
    }
  } else {
    q = query(
      collection(firestore, "products"),
      where("productStatus", "==", "Published"),
      orderBy("productId", "desc"),
      limit(13)
    );
  }

  const top12Products = await executeQueryOnProductsCollection(q);

  return (
    <>
      <Body top12Products={top12Products} />
    </>
  );
}
