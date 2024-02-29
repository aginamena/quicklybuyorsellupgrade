import Typography from "@mui/material/Typography";

import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "@/config/firebase";

import DisplayProducts from "@/components/DisplayProducts";
import { executeQueryOnProductsCollection } from "@/util";

//will later return similar products by amount,size, colour, condition, etc
export default async function SimilarProducts({ amount }) {
  const q = query(
    collection(firestore, "products"),
    where("amount", "==", amount),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc"),
    limit(12)
  );
  const similarByPrice = await executeQueryOnProductsCollection(q);
  if (similarByPrice.length == 0) return null;
  return (
    <>
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Similar products for you
      </Typography>
      <DisplayProducts products={similarByPrice} isPrivate={false} />
    </>
  );
}
