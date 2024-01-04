"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Paper, Typography } from "@mui/material";

import currencyFormatter from "currency-formatter";

import Link from "next/link";

import { getUser } from "@/util";

export default function Contact({ title, amount, creatorOfProduct }) {
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

  function handleClick() {
    const currentUser = getUser();
    if (!currentUser) {
      alert("To contact the seller, please sign in to your account.");
      return;
    }
    const message = "Hello, I'm interested in your products!";
    window.open(
      `https://wa.me/${creatorOfProduct.phoneNumber}?text=${encodeURIComponent(
        message
      )}`,
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
        Contact {creatorOfProduct.displayName}
      </Typography>
      <Box
        onClick={handleClick}
        style={{
          display: "flex",
          alignItems: "center",
          color: "#25d366",
          border: "1px solid #25d366",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "50px",
          justifyContent: "center",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <Typography variant="h6" style={{ marginRight: "10px" }}>
          WhatsApp
        </Typography>
        <WhatsAppIcon />
      </Box>
      <small>
        Do not have whatsapp? download it{" "}
        <Link
          href="https://www.whatsapp.com/download"
          style={{ color: "white" }}
        >
          here
        </Link>
      </small>
    </Paper>
  );
}
