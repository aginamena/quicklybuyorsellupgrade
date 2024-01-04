import { Container, Grid, Toolbar } from "@mui/material";

import { getFromFirestore } from "@/util";
import AdminPanel from "./AdminPanel";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";

export default async function NikeSneakerDetails({ params }) {
  const details = await getFromFirestore(`products/${params.productId}`);
  const creatorOfProduct = await getFromFirestore(
    `profiles/${details.creatorOfProduct}`
  );
  const productDetails = { ...details, creatorOfProduct };

  const isAdmin =
    productDetails.creatorOfProduct.email == process.env.ADMIN ||
    productDetails.creatorOfProduct.email == process.env.ADMIN2;

  return (
    <Container style={{ marginBottom: "50px" }}>
      <Toolbar />
      <Grid container spacing={3}>
        {productDetails.files && (
          <Grid item md={8} xs={12}>
            <ImageGalleryCmp images={productDetails.files} />
          </Grid>
        )}
        <Grid item md={4} xs={12}>
          <Contact
            title={productDetails.title}
            amount={productDetails.amount}
            creatorOfProduct={productDetails.creatorOfProduct}
          />
        </Grid>
      </Grid>
      <Specification
        isAdmin={isAdmin}
        productId={productDetails.productId}
        productStatus={productDetails.productStatus}
        type={productDetails.type}
        description={productDetails.description}
      />
      <AdminPanel isAdmin={isAdmin} productId={params.productId} />
    </Container>
  );
}
