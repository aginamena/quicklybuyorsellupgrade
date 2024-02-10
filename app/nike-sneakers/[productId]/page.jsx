import { Container, Grid, Toolbar } from "@mui/material";

import { getFromFirestore } from "@/util";
import AdminPanel from "./AdminPanel";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";
import SimilarProducts from "./SimilarProducts";

export async function generateMetadata({ params }) {
  const details = await getFromFirestore(`products/${params.productId}`);
  const creatorOfProduct = await getFromFirestore(
    `profiles/${details.creatorOfProduct}`
  );
  const productDetails = { ...details, creatorOfProduct };

  const parsedTitle =
    productDetails.title.replaceAll("-", " ") +
    " | " +
    "Quickly buy or sell your Nike shoes today!";
  const parsedDescription = productDetails.description.replaceAll("-", " ");

  return {
    title: parsedTitle,
    description: parsedDescription,
    openGraph: {
      title: parsedTitle,
      description: parsedDescription,
      images: productDetails.files,
    },
  };
}

export default async function NikeSneakerDetails({ params }) {
  const details = await getFromFirestore(`products/${params.productId}`);
  const creatorOfProduct = await getFromFirestore(
    `profiles/${details.creatorOfProduct}`
  );
  const productDetails = { ...details, creatorOfProduct };

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
          />
        </Grid>
      </Grid>
      <Specification
        productId={productDetails.productId}
        productStatus={productDetails.productStatus}
        description={productDetails.description}
      />
      <AdminPanel productId={params.productId} />
      <SimilarProducts amount={productDetails.amount} />
    </Container>
  );
}
