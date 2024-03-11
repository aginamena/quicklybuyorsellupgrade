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
      src: "root/obediah_fragrant.jpg",
      name: "Obediah Fragrant",
      description:
        "It's nice doing business with QBOS. I ordered a NIKE shoe from them and they give me exactly what I order they're very honest and trusted",
    },
    {
      src: "root/helen_okolie.jpg",
      name: "Helen Okolie",
      description:
        "It was easy getting my products on the site and connecting with people who need my products. Kudos Qbos",
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
        variant="h6"
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
