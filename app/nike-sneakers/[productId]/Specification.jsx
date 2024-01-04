"use client";

import { Box, Paper, Typography } from "@mui/material";

export default function Specification({
  isAdmin,
  type,
  description,
  productId,
  productStatus,
}) {
  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      <Box style={{ marginBottom: "40px" }}>
        <Typography
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <b>Type </b>
          <span style={{ margin: "0 5px" }}>:</span>
          <span style={{ color: "#dedede" }}>{type}</span>
        </Typography>
        {isAdmin && (
          <>
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
          </>
        )}
      </Box>
      <Typography variant="h6" style={{ marginBottom: "10px" }}>
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
