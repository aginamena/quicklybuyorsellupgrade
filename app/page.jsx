import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Footer from "@/components/Footer";
import HowItWorks from "./HowItWorks";
import ReveiwsAndRatings from "./ReviewAndRatings";
import TodaysProducts from "./TodaysProducts";
import ValuePosition from "@/components/ValueProposition";

export default function Home() {
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
