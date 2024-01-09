import { Container, Grid, Toolbar } from "@mui/material";

import Head from "next/head";

import { getFromFirestore } from "@/util";
import AdminPanel from "./AdminPanel";
import Contact from "./Contact";
import ImageGalleryCmp from "./ImageGalleryCmp";
import Specification from "./Specification";

export function generateMetadata({ searchParams }) {
  const { title, description } = searchParams;
  return {
    title:
      title.replaceAll("-", " ") +
      " | " +
      "Quickly buy or sell your Nike shoes",
    description: description.replaceAll("-", " "),
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
      <Head>
        <meta
          property="og:title"
          content={
            productDetails.title +
            " | " +
            "Quickly buy or sell your Nike shoes today!"
          }
        />
        <meta property="og:description" content={productDetails.description} />
        <meta property="og:image" content={productDetails.files[0]} />
      </Head>
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
        productId={productDetails.productId}
        productStatus={productDetails.productStatus}
        type={productDetails.type}
        description={productDetails.description}
      />
      <AdminPanel productId={params.productId} />
    </Container>
  );
}
