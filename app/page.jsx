import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ValuePosition from "@/components/ValueProposition";
import ReveiwsAndRatings from "./ReviewAndRatings";
import TodaysProducts from "./TodaysProducts";
import Image from "next/image";
import { Paper } from "@mui/material";
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
        <ValuePosition
          proposition={
            <>
              Find and buy <br />
              your desired Nike shoes today!
            </>
          }
        />
        {/* <Box style={{ textAlign: "center", color: "#dedede" }}>
          <Box style={{ fontSize: "19px" }}>
            &quot;Since day one, our mission has been to provide you with fast
            and secure access to the Nike shoes you desire. <br /> Every product
            showcased on our site undergoes verification by our administrators
            before being published, ensuring a marketplace that is not only
            speedy but also the safest destination for your Nike shoe
            needs&quot;
          </Box>
          <Typography style={{ marginTop: "20px" }}>
            Mena Agina - Founder & CEO
          </Typography>
        </Box> */}
        <NikeTypes imageSrc="/root/sporting_shoe.png" type="Sporting shoes" />
        <NikeTypes imageSrc="/root/tets.jpg" type="Lifestyle shoes" />
        <Image
          src="/root/sporting_shoe.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <Image
          src="/root/sporting_shoe.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
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
    <div
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt={type}
        style={{ borderRadius: "50px" }}
      />
      <Typography style={{ fontSize: "20px" }}>{type}</Typography>
    </div>
  );
}
