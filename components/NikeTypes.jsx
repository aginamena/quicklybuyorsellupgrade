"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

export default function NikeTypes({ imageSrc, type }) {
  useEffect(() => {
    const siteId = 3891828;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion);
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: { xs: "40px", sm: "0" },
      }}
    >
      <Image
        src={imageSrc}
        width={200}
        height={200}
        alt={type}
        style={{ borderRadius: "70px" }}
      />
      <Typography style={{ fontSize: "20px", marginTop: "18px" }}>
        {type}
      </Typography>
    </Box>
  );
}
