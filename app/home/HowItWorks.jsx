import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CardCmp from "@/components/CardCmp";

export default function HowItWorks() {
  const cards = [
    {
      title:
        "Explore a wide selection of verified products that meet your needs.",
      imagePath: "root/view_wide_selection_of_products.jpg",
    },
    {
      title: "Contact the seller through direct messaging.",
      imagePath: "root/send_a_message_to_the_seller.jpg",
    },
    {
      title:
        "Arrange a meeting with the seller to inspect the product in person.",
      imagePath: "root/inspect_the_product_in_person.jpg",
    },
    {
      title:
        "Pay the seller through the site once you've confirmed that the product meets your expectations.",
      imagePath: "root/pay_for_the_product.jpg",
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
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
