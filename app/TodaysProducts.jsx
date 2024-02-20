import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import {
  collection,
  firestore,
  limit,
  orderBy,
  query,
  where,
} from "@/config/firebase";

import Link from "next/link";

import DisplayProducts from "@/components/DisplayProducts";
import { executeQueryOnProductsCollection } from "@/util";

//refetching the data every 5minutes (60 * 5 = 300)
export const revalidate = 300;

export default async function TodaysProducts() {
  const q = query(
    collection(firestore, "products"),
    where("productStatus", "==", "Published"),
    orderBy("productId", "desc"),
    limit(12)
  );
  const last8Products = await executeQueryOnProductsCollection(q);

  return (
    <Container>
      <Toolbar />
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Todays top products
      </Typography>
      <DisplayProducts products={last8Products} isPrivate={false} />
      <Box style={{ textAlign: "center", marginTop: "30px" }}>
        <Link href="nike-sneakers">
          <Button variant="outlined" size="large">
            Explore all products
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
