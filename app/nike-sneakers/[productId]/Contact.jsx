"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Paper, Typography, Divider } from "@mui/material";

import currencyFormatter from "currency-formatter";

import Link from "next/link";

import { getUser } from "@/util";
import { ArticleJsonLd } from "next-seo";

export default function Contact({
  title,
  amount,
  creatorOfProduct,
  productId,
  productStatus,
}) {
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
  async function shareOnFacebook() {
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
        <Typography
          style={{
            color: "#dedede",
            marginBottom: "15px",
            textAlign: "center",
          }}
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
        {productStatus === "Published" ? (
          <>
            <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
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
      <ArticleJsonLd
        useAppDir={false}
        url="https://example.com/article"
        title="Article headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName={[
          {
            name: "Jane Blogs",
            url: "https://example.com",
          },
          {
            name: "Mary Stone",
            url: "https://example.com",
          },
        ]}
        publisherName="Gary Meehan"
        publisherLogo="https://www.example.com/photos/logo.jpg"
        description="This is a mighty good description of this article."
        isAccessibleForFree={true}
      />
    </>
  );
}
