import { Button, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";
import Image from "next/image";
import ReveiwsAndRatings from "./ReviewAndRatings";
import TodaysProducts from "./TodaysProducts";

//refetching the data every 5minutes (60 * 5 = 300)
export const revalidate = 300;

export default function Home() {
  const cards = [
    {
      title: "Explore a wide selection of verified products carefully curated.",
      imagePath: "root/view_wide_selection_of_products.jpg",
    },
    {
      title: "Select the product that suits you best and place your order.",
      imagePath: "root/place_your_order.jpg",
    },
    {
      title:
        "Once your order has been placed, We will send you your Order ID for you to track your delivery.",
      imagePath: "root/track_order.jpg",
    },
    {
      title:
        "After you have received your order, give us feedback on our service to help us improve.",
      imagePath: "root/received_order_package.jpg",
    },
  ];
  return (
    <>
      <Container>
        <Toolbar />
        <ValueProposition
          proposition={
            <>
              Find and buy <br />
              your desired Nike products today!
            </>
          }
          callToAction={
            <Link href="nike-sneakers">
              <Button variant="outlined" size="large">
                Explore all products
              </Button>
            </Link>
          }
        />
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            marginBottom: "30px",
            marginTop: "100px",
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
          <NikeTypes
            imageSrc="/root/sporting_shoes.jpg"
            type="Sporting shoes"
          />
          <NikeTypes imageSrc="/root/fashion_shoes.jpg" type="Fashion shoes" />
          <NikeTypes
            imageSrc="/root/sandals_and_slides.jpg"
            type="Sandals and slides"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Typography>Choose your location:</Typography>
          <Box>
            <Button>Rivers</Button>
            <Button>Lagos</Button>
            <Button>Abuja</Button>
            <Button>Jos</Button>
          </Box>
        </Box>

        <TodaysProducts />
        <HowItWorks cards={cards} />
        <ReveiwsAndRatings />
      </Container>
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}

function NikeTypes({ imageSrc, type }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: { xs: "40px", sm: "0" },
      }}
    >
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt={type}
        style={{ borderRadius: "70px" }}
      />
      <Typography style={{ fontSize: "20px", marginTop: "18px" }}>
        {type}
      </Typography>
    </Box>
  );
}
