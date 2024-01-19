"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import currencyFormatter from "currency-formatter";

import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

import { getUser } from "@/util";

export default function Contact({ title, amount, productId, productStatus }) {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryAddressIsSaved, setDeliveryAddressIsSaved] = useState(false);
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });

  const config = {
    reference: new Date().getTime().toString(),
    email: "aginamena5@gmail.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_ae8b2782baa39db6d7f2f248504cc933e334dabc",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const startPaymentTransacton = usePaystackPayment(config);

  function saveDeliveryAddress() {
    if (deliveryAddress.length == 0) {
      alert("Enter your delivery address");
      return;
    }
    setDeliveryAddressIsSaved(true);
  }

  function placeOrder() {
    const currentUser = getUser();
    if (!deliveryAddressIsSaved) {
      alert("Save your delivery address");
      return;
    }
    if (!currentUser) {
      alert("You have to sign in to place your order");
      return;
    }
    startPaymentTransacton(onSuccess, onClose);
  }

  function shareOnFacebook() {
    // Open a new window to share the link on Facebook
    const host = "https://quicklybuyorsellupgrade.vercel.app";
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${host}/nike-sneakers/${productId}?title=${title}`,
      "_blank"
    );
  }

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
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          placeholder="Enter your delivery address..."
        />
        <Box
          style={{
            display: "flex",
            marginTop: "10px",
            marginBottom: "10px",
            justifyContent: "center",
          }}
        >
          {deliveryAddressIsSaved ? (
            <CheckCircleIcon fontSize="large" color="green" />
          ) : (
            <Button onClick={saveDeliveryAddress} variant="outlined">
              Save
            </Button>
          )}
        </Box>
        <Divider sx={{ borderBottomWidth: "5px", marginBottom: "20px" }} />
        <Button
          onClick={placeOrder}
          variant="contained"
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
