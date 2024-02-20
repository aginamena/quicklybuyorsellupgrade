"use client";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ValueProposition({ proposition, callToAction }) {
  const Img = styled("img")(({ theme }) => ({
    height: 392,
    width: 500,
    [theme.breakpoints.down("md")]: {
      height: "100%",
      width: "100%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", sm: "row" },
        marginBottom: { xs: "30px", md: "0" },
      }}
    >
      <Box sx={{ marginBottom: { xs: "20px", sm: "0" }, textAlign: "center" }}>
        <Typography variant="h5">{proposition}</Typography>
      </Box>
      {callToAction}
      {/* <Button variant="outlined" size="large">
        Explore all products
      </Button> */}
      {/* <Img alt="Nike sneaker shoe" src="/sellYourProducts/nike_shoe.png" /> */}
    </Box>
  );
}
