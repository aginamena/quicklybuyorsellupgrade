import { Button, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import ReveiwsAndRatings from "./ReviewAndRatings";
import TodaysProducts from "./TodaysProducts";
import NikeTypes from "@/components/NikeTypes";

//refetching the data every 5minutes (60 * 5 = 300)
export const revalidate = 300;

export default function Home() {
  const cards = [
    {
      title: "Explore a wide selection of verified products carefully curated.",
      imagePath: "root/view_wide_selection_of_products.jpg",
    },
    {
      title: "Select the product you want.",
      imagePath: "root/select_the_product.jpg",
    },
    {
      title:
        "Send a message to the QBOS regarding the product you're interested in and await our response.",
      imagePath: "root/send_message.jpg",
    },
  ];

  return (
    <>
      <Container style={{ marginBottom: "100px" }}>
        <Toolbar />
        <ValueProposition
          proposition={
            <>
              Find and buy <br />
              Nike products from trusted <br />
              sellers in Rivers state
            </>
          }
          callToAction={
            <Link href="all">
              <Button variant="outlined" size="large">
                Explore all products
              </Button>
            </Link>
          }
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: { xs: "50px", md: "100px" },
          }}
        >
          We provide
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: { xs: "center", sm: "space-evenly" },
          }}
        >
          <NikeTypes imageSrc="/root/sandals.jpg" type="Sandals" />
          <NikeTypes imageSrc="/root/shoes.jpg" type="Shoes" />
          <NikeTypes imageSrc="/root/slides.jpg" type="Slides" />
        </Box>
        <TodaysProducts />
        <HowItWorks cards={cards} />
        <ReveiwsAndRatings />
      </Container>
    </>
  );
}
