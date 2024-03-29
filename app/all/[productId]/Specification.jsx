"use client";

import { isUserAdmin } from "@/util";
import { Box, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Specification({
  productId,
  productStatus,
  sizes,
  location,
  color,
  type,
  productDescription,
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(isUserAdmin());
  }, []);
  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      {isAdmin && (
        <Box style={{ marginBottom: "40px" }}>
          <Typography
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>ProductId </b>
            <span style={{ margin: "0 5px" }}>:</span>
            <span style={{ color: "#dedede" }}>{productId}</span>
          </Typography>
          <Typography
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>Product status </b>
            <span style={{ margin: "0 5px" }}>:</span>
            <span style={{ color: "#dedede" }}>{productStatus}</span>
          </Typography>
        </Box>
      )}

      <Typography>Sizes: {sizes.toString()}</Typography>
      <Typography>Type: {type}</Typography>
      <Typography>Color: {color}</Typography>
      <Typography>Location: {location}</Typography>
      <Typography style={{ marginTop: "20px" }}>
        {productDescription}
      </Typography>
    </Paper>
  );
}
