"use client";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ValuePosition({ proposition }) {
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
        flexDirection: { xs: "column-reverse", md: "row" },
        marginBottom: { xs: "30px", md: "0" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">{proposition}</Typography>
      </Box>
      <Img alt="Nike sneaker shoe" src="/sellYourProducts/nike_shoe.png" />
    </Box>
  );
}
