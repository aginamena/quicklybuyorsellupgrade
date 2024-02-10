"use client";

import { isUserAdmin } from "@/util";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Specification({
  description,
  productId,
  productStatus,
}) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(isUserAdmin());
  }, []);

  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      <Box style={{ marginBottom: "40px" }}>
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
