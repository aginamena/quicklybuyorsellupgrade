import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CardCmp from "@/components/CardCmp";

export default function HowItWorks() {
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
        "Once your order has been placed, We will contact you with your Order ID for you to track your delivery.",
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
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
      >
        How it works
      </Typography>
      <Grid container spacing={2}>
        {cards.map(({ title, imagePath }, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CardCmp>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imagePath}
                  alt={title}
                  role="image"
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CardCmp>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
