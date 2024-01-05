import {
  Avatar,
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Rating,
  Toolbar,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import CardCmp from "@/components/CardCmp";
import Footer from "@/components/Footer";

export default function SellYourProducts() {
  const cards = [
    {
      title: "Free product listing",
      imagePath: "sellYourProducts/free.png",
      description:
        "List an unlimited number of products for sale in our marketplace without any cost.",
    },
    {
      title: "Manage all your products for sale all in one place",
      imagePath: "sellYourProducts/target_icon.jpg",
      description:
        "We ensure your products are visible to buyers genuinely interested in what you're selling.",
    },
    // {
    //   title: "Targeted exposure",
    //   imagePath: "sellYourProducts/target_icon.jpg",
    //   description:
    //     "We ensure your products are visible to buyers genuinely interested in what you're selling.",
    // },
    {
      title: "Communication hub",
      imagePath: "sellYourProducts/communication_hub.jpg",
      description:
        "Connect effortlessly with buyers through diverse communication channels, including chat, voice recordings, video, and more",
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

  return (
    <>
      <Container>
        <Toolbar />
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
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
          <Typography variant="h4">Sign in today!</Typography>
          {/* <Button>Sign in today!</Button> */}
        </Box>
        <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
        <Typography
          variant="h5"
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
