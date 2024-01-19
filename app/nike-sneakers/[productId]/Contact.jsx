"use client";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Paper, Typography } from "@mui/material";

import currencyFormatter from "currency-formatter";

import Link from "next/link";

export default function Contact({ title, amount }) {
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

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
        <Typography>
          Contact <b>Mena Agina</b> or <b>Josephine Obani</b> on our facebook
          group to place your order for this product
        </Typography>
        <Box
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <Typography style={{ marginRight: "10px" }}>
            Visit our page{" "}
          </Typography>
          <Link
            href="https://www.facebook.com/groups/1057599295547802"
            style={{ color: "white" }}
          >
            <FacebookIcon />
          </Link>
        </Box>
      </Paper>
      <Paper style={{ marginTop: "30px", padding: "30px", color: "#dedede" }}>
        <Typography>Once your order has been placed,</Typography>
        <Typography style={{ marginTop: "10px" }}>
          We will send a payment confirmation to your email
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          We will contact you with your order Id so you can track the movement
          of your order
        </Typography>
        <Typography style={{ marginTop: "10px" }}>
          Do not forget to give us review!
        </Typography>
      </Paper>
    </>
  );
}
