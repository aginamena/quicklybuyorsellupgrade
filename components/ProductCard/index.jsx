"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import currencyFormatter from "currency-formatter";
import PropTypes from "prop-types";
import { useState } from "react";
import Link from "next/link";
import PopoverCmp from "./PopoverCmp";

export default function Displaycard({
  image,
  title,
  description,
  amount,
  productId,
  isPrivate,
  productStatus,
}) {
  const maximumLengthOfTitle = 17;
  const maximumLengthOfAmount = 15;
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });
  const [popup, setPopup] = useState(null);

  return (
    <Link
      style={{ textDecoration: "none" }}
      href={
        isPrivate
          ? ""
          : `../nike-sneakers/${productId}?title=${title
              .trim()
              .replaceAll(" ", "-")}&description=${description
              .trim()
              .replaceAll(" ", "-")}`
      }
    >
      <Card>
        <CardHeader
          action={
            isPrivate && (
              <>
                <IconButton
                  aria-label="settings"
                  onClick={(e) => setPopup(e.currentTarget)}
                >
                  <MoreVertIcon />
                </IconButton>
                <PopoverCmp
                  productId={productId}
                  popup={popup}
                  setPopup={() => setPopup(null)}
                />
              </>
            )
          }
        />
        <CardMedia
          component="img"
          image={image}
          alt="Display card"
          style={{ height: 150 }}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "16px", wordWrap: "break-word" }}
          >
            {title.length > maximumLengthOfTitle
              ? title.substring(0, maximumLengthOfTitle) + "..."
              : title}
          </Typography>
          <Typography variant="h6" component="div">
            {formattedAmount.length > maximumLengthOfAmount
              ? formattedAmount.substring(0, maximumLengthOfAmount) + "..."
              : formattedAmount}
          </Typography>

          {isPrivate && (
            <>
              <Divider
                sx={{
                  borderBottomWidth: "5px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              />
              <Typography color="text.secondary" style={{ fontSize: "13px" }}>
                Status : {productStatus}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
