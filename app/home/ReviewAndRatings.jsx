import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import red from "@mui/material/colors/red";

import CardCmp from "@/components/CardCmp";

export default function ReveiwsAndRatings() {
  const reviews = [
    {
      src: "root/ngozi_samuels.jpeg",
      name: "Ngozi Samuels",
      description:
        "It's very easy to advertise my products for sale here. One of the reasons i like QBOS products is that you will only find high quality products for sale here.",
    },
    {
      src: "root/celeb_johnson.jpeg",
      name: "Celeb Johnson",
      description:
        "Connecting with sellers your local sellers is the fastest way to view and receive products, instead of waiting for days for the products to be shipped to you for review. One of the reasons i keep coming back to QBOS is that their site is easy to use.",
    },
    {
      src: "root/mercy_adams.jpeg",
      name: "Mercy Adams",
      description:
        "I sell products here and sometimes i buy from other providers. With the vast amount of products on the site, I can easily find the specific product(s) i'm looking for and contact the seller. This was how many of my clients contacted me because they could easily find my products on the site.",
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        What our customers say
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
    </>
  );
}
