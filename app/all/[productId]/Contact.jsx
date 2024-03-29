"use client";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import currencyFormatter from "currency-formatter";
import Image from "next/image";
import Link from "next/link";
import { getUser } from "@/util";
export default function Contact({
  title,
  amount,
  productId,
  creatorOfProduct,
  description,
}) {
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

  const phoneNumber = "+16472232032";
  return (
    <>
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
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={creatorOfProduct?.photoURL}
            width={100}
            height={100}
            alt={`${creatorOfProduct?.displayName}/profile picture`}
            style={{ borderRadius: "50px", marginRight: "10px" }}
          />
          <Box>
            <Typography>{creatorOfProduct?.displayName}</Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <CheckCircleIcon
                style={{
                  color: "#8bc34a",
                  fontSize: "13px",
                  marginRight: "10px",
                }}
              />
              <Typography style={{ color: "#8bc34a", fontSize: "13px" }}>
                Verified seller
              </Typography>
            </Box>
            <Rating name="read-only" value={5} readOnly />
            <Link
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=I'm interested in your nike product. I will send an image of the product with the size and color. Thank you.`}
              style={{ textDecoration: "none" }}
            >
              <Button
                size="large"
                variant="outlined"
                style={{
                  borderColor: "#25d366",
                  color: "	#25d366",
                  display: "flex",
                }}
              >
                <Typography style={{ marginRight: "10px" }}>
                  Contact QBOS
                </Typography>
                <WhatsAppIcon />
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
      <Paper style={{ marginTop: "30px", padding: "30px", color: "#dedede" }}>
        <FormatQuoteIcon />
        <Typography>{description}</Typography>
        <FormatQuoteIcon />
        <Typography>{creatorOfProduct?.displayName}</Typography>
      </Paper>
    </>
  );
}
