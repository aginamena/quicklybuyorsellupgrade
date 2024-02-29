import { Container, Grid, Toolbar } from "@mui/material";

import { getFromFirestore } from "@/util";
import AdminPanel from "./AdminPanel";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";
import SimilarProducts from "./SimilarProducts";

export async function generateMetadata({ params }) {
  const details = await getFromFirestore(`products/${params.productId}`);
  const parsedTitle =
    details.title.replaceAll("-", " ") +
    " | " +
    "Quickly buy or sell your Nike products today!";

  return {
    title: parsedTitle,
    openGraph: {
      title: parsedTitle,
      images: details.files,
    },
  };
}

export default async function NikeSneakerDetails({ params }) {
  const details = await getFromFirestore(`products/${params.productId}`);
  const productDetails = { ...details };

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
            productId={productDetails.productId}
          />
        </Grid>
      </Grid>
      <Specification
        productId={productDetails.productId}
        productStatus={productDetails.productStatus}
        sizes={productDetails.sizes}
        location={productDetails.location}
        type={productDetails.type}
        color={productDetails.color}
      />
      <AdminPanel productId={params.productId} />
      <SimilarProducts amount={productDetails.amount} />
    </Container>
  );
}
