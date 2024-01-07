"use client";
import { Button, Typography, Box } from "@mui/material";
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
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">{proposition}</Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px", marginBottom: { xs: "30px", md: "0" } }}
          size="large"
        >
          Sign in
        </Button>
      </Box>
      <Img alt="Nike sneaker shoe" src="/sellYourProducts/nike_shoe.png" />
    </Box>
  );
}
