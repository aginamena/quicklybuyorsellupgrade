"use client";

import { isUserAdmin } from "@/util";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductSummary from "./ProductSummary";

export default function Specification({
  description,
  productId,
  productStatus,
  shoeSizes,
  gender,
  color,
  condition,
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

      <Typography variant="h6" style={{ marginBottom: "10px" }}>
        Summary
      </Typography>
      <ProductSummary
        shoeSizes={shoeSizes}
        gender={gender}
        color={color}
        condition={condition}
      />
      <Typography
        variant="h6"
        style={{ marginBottom: "10px", marginTop: "30px" }}
      >
        Description
      </Typography>
      <Typography
        style={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          color: "#dedede",
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
}
