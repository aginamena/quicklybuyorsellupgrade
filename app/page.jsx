import Image from "next/image";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Footer from "@/components/Footer";
import HowItWorks from "./HowItWorks";
import ReveiwsAndRatings from "./ReviewAndRatings";
import TodaysProducts from "./TodaysProducts";

export default function Home() {
  return (
    <>
      <Container>
        <Toolbar />
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            fontSize: "22px",
            justifyContent: "space-evenly",
            marginBottom: "100px",
            textAlign: { xs: "center" },
          }}
        >
          Getting your desired Nike <br /> shoe can be faster and safer
          <Image
            alt="Man looking at his phone and smiling"
            src="/root/introduction_image.jpg"
            width={500}
            height={392}
            priority={true}
          />
        </Box>
        <Box style={{ textAlign: "center", color: "#dedede" }}>
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
        </Box>
        <TodaysProducts />
        <HowItWorks />
        <ReveiwsAndRatings />
      </Container>
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
  z;
}
