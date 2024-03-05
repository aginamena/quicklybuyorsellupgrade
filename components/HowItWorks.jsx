import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CardCmp from "@/components/CardCmp";

export default function HowItWorks({ cards }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", marginBottom: "30px", marginTop: "30px" }}
      >
        How it works
      </Typography>
      <Grid container spacing={2} justifyContent="space-evenly">
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
