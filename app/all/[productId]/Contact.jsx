"use client";
import { getUser } from "@/util";
import {
  Box,
  Button,
  Paper,
  Typography,
  Rating,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";

import currencyFormatter from "currency-formatter";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CardCmp from "@/components/CardCmp";

export default function Contact({
  title,
  amount,
  productId,
  creatorOfProduct,
}) {
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
        {/* <Typography>
          To place your order, contact <b>Mena Agina</b> on facebook .
        </Typography> */}
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={creatorOfProduct.photoURL}
            width={100}
            height={100}
            alt={`${creatorOfProduct.displayName}/profile picture`}
            style={{ borderRadius: "50px", marginRight: "10px" }}
          />
          <Box>
            <Typography>{creatorOfProduct.displayName}</Typography>
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
            <Button
              style={{
                color: "	#25d366",
                display: "flex",
                borderColor: "#25d366",
              }}
              size="large"
              variant="outlined"
            >
              <Typography style={{ marginRight: "10px" }}>
                Message me
              </Typography>
              <WhatsAppIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
      <Paper style={{ marginTop: "30px", padding: "30px", color: "#dedede" }}>
        <CardCmp>
          <CardHeader
            avatar={
              <Image
                src={creatorOfProduct.photoURL}
                width={50}
                height={50}
                alt={`${creatorOfProduct.displayName}/profile picture`}
                style={{ borderRadius: "50px" }}
              />
            }
            title="Mercy Adams"
          />
          <CardContent>
            <Rating defaultValue={5} readOnly />
            <Typography variant="body2" color="text.secondary">
              I sell products here and sometimes i buy from other providers.
              With the vast amount of products on the site, I can easily find
              the specific product(s) i am looking for and contact the seller.
              This was how many of my clients contacted me because they could
              easily find my products on the site.
            </Typography>
          </CardContent>
        </CardCmp>
      </Paper>
    </>
  );
}
