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
  let details = null;
  let creatorOfProduct = null;
  let storeDetails = null;

  try {
    details = await getFromFirestore(`products/${params.productId}`);
    creatorOfProduct = await getFromFirestore(
      `profiles/${details.creatorOfProduct}`
    );
    storeDetails = await getFromFirestore(
      `store-details/${details.creatorOfProduct}`
    );
  } catch (error) {
    console.log(error);
  }

  return (
    <Container style={{ marginBottom: "50px" }}>
      <Toolbar />
      <Grid container spacing={3}>
        {details.files && (
          <Grid item md={8} xs={12}>
            <ImageGalleryCmp images={details.files} />
          </Grid>
        )}
        <Grid item md={4} xs={12}>
          <Contact
            title={details.title}
            amount={details.amount}
            productId={details.productId}
            creatorOfProduct={creatorOfProduct}
            description={storeDetails?.description}
          />
        </Grid>
      </Grid>
      <Specification
        productId={details.productId}
        productStatus={details.productStatus}
        sizes={details.sizes}
        location={details.location}
        type={details.type}
        color={details.color}
        storeDetails={storeDetails}
        productDescription={details.description}
      />
      <AdminPanel productId={params.productId} />
      <SimilarProducts amount={details.amount} />
    </Container>
  );
}
