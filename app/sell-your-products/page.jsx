import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import red from "@mui/material/colors/red";

import CardCmp from "@/components/CardCmp";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ValueProposition from "@/components/ValueProposition";

export default function SellYourProducts() {
  const cards = [
    {
      title: "Inventory Management",
      imagePath: "sellYourProducts/inventory_management.jpg",
      description:
        "Organize and manage all your products in one centralized platform.",
    },
    {
      title: "Access to wider audience",
      imagePath: "sellYourProducts/reach_wider_audience.png",
      description:
        "Tap into our extensive customer base as well as other audiences on social media platforms.",
    },
    {
      title: "Secure payment transaction flow",
      imagePath: "sellYourProducts/secure_payment.jpg",
      description:
        "Experience a secure and reliable payment transaction flow, that ensures the safety of every transaction.",
    },
  ];

  const reviews = [
    {
      src: "sellYourProducts/catharina_mabel.jpg",
      name: "Catharina Mabel",
      description:
        "As a busy craftwoman, i find it easy listing my products on QBOS. The site is EASY to use. With few steps my products gets ready. I connect with my buyers swiftly.",
    },
    {
      src: "sellYourProducts/sarah_jude.jpg",
      name: "Sarah Jude",
      description:
        "I can do video calls, send recordings, pictures, videos, etc on Whatsapp. This is a very good communication tool that this platform integrates for sellers to communicate with buyers.",
    },
    {
      src: "sellYourProducts/blessing_moses.jpg",
      name: "Blessing Moses",
      description:
        "I sell my products faster in this platform because they only show my products to people that are really interested in it. Compared to other platforms i've been, it takes longer to sell products there than here.",
    },
  ];

  const howItWorks = [
    {
      title: "Sign into QBOS with your email and phone number.",
      imagePath: "sellYourProducts/sign_in.jpg",
    },
    {
      title: "Select 'My Account' in your profile.",
      imagePath: "sellYourProducts/my_account.jpg",
    },

    {
      title:
        "Fill out the form with essential details such as image, price, description and so on.",
      imagePath: "sellYourProducts/nike_for_sale.jpg",
    },
    {
      title:
        "Click the 'Create Product' button. We'll review and approve your post or contact you for additional product details.",
      imagePath: "sellYourProducts/confirmation_message.jpg",
    },
  ];

  return (
    <>
      <Container>
        <Toolbar />
        <ValueProposition
          proposition="Sell your Nike products today!"
          callToAction={
            <Button variant="outlined" size="large">
              Sign in today
            </Button>
          }
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            // marginTop: "100px",
            marginTop: { sm: "100px", xs: "50px" },
          }}
        >
          We Offer
        </Typography>
        <Grid container spacing={2} style={{ justifyContent: "space-evenly" }}>
          {cards.map(({ title, description, imagePath }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <CardCmp>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={imagePath}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </CardCmp>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h5">Sell you Nike products today!</Typography>
        </Box>
        <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
        <HowItWorks cards={howItWorks} />
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          What our providers say
        </Typography>
        <Grid container spacing={2}>
          {reviews.map(({ src, name, description }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardCmp>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                      src={src}
                    />
                  }
                  title={name}
                />
                <CardContent>
                  <Rating defaultValue={5} readOnly />
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardCmp>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
      <Footer />
    </>
  );
}
