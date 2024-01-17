"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import { Button, Paper, Typography } from "@mui/material";

import currencyFormatter from "currency-formatter";

import { getUser } from "@/util";
import { useState } from "react";
import DeliveryAddress from "./DeliveryAddress";

export default function Contact({
  title,
  amount,
  creatorOfProduct,
  productId,
  productStatus,
}) {
  const [open, setOpen] = useState(false);
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

  function handleClick() {
    const currentUser = getUser();
    if (!currentUser) {
      alert("You have to sign in to place your order");
      return;
    }
    setOpen(true);
  }
  async function shareOnFacebook() {
    // Open a new window to share the link on Facebook
    const host = "https://quicklybuyorsellupgrade.vercel.app";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${host}/nike-sneakers/${productId}?title=${title}`,
      "_blank"
    );
  }

  return (
    <Paper style={{ padding: "30px" }}>
      <Typography
        variant="h4"
        style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}
      >
        {title}{" "}
      </Typography>
      <Typography
        variant="h5"
        style={{
          wordBreak: "break-word",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        {formattedAmount}
      </Typography>
      <Typography
        style={{ color: "#dedede", marginBottom: "15px", textAlign: "center" }}
      >
        Currently in stock
      </Typography>
      <Button
        onClick={handleClick}
        variant="outlined"
        size="large"
        style={{
          width: "100%",
          height: "50px",
        }}
      >
        Place your order
      </Button>
      {productStatus === "Published" ? (
        <>
          <Typography
            onClick={shareOnFacebook}
            sx={{
              cursor: "pointer",
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            Share on: <FacebookIcon sx={{ marginLeft: "10px" }} />
          </Typography>
        </>
      ) : (
        <Typography style={{ marginTop: "20px" }}>
          Only approved products can be shared.
        </Typography>
      )}
      <DeliveryAddress open={open} setOpen={setOpen} />
    </Paper>
  );
}
