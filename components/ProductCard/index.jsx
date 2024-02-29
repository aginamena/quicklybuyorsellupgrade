"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import currencyFormatter from "currency-formatter";

import { useState } from "react";

import Link from "next/link";

import CardCmp from "../CardCmp";
import PopoverCmp from "./PopoverCmp";

export default function Displaycard({
  image,
  title,
  amount,
  productId,
  isPrivate,
  productStatus,
  location,
}) {
  const maximumLengthOfAmount = 15;
  const formattedAmount = currencyFormatter.format(amount, { code: "NGN" });
  const [popup, setPopup] = useState(null);

  return (
    <Link
      style={{ textDecoration: "none" }}
      href={
        isPrivate
          ? ""
          : `../all/${productId}?title=${title.trim().replaceAll(" ", "-")}`
      }
    >
      <CardCmp>
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
                  title={title}
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
          <Typography variant="h6" component="div">
            {formattedAmount.length > maximumLengthOfAmount
              ? formattedAmount.substring(0, maximumLengthOfAmount) + "..."
              : formattedAmount}
          </Typography>
          <Box style={{ display: "flex" }}>
            <LocationOnIcon style={{ color: "#dedede" }} />
            <Typography style={{ color: "#dedede" }}>{location}</Typography>
          </Box>
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
      </CardCmp>
    </Link>
  );
}
