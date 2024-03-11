"use client";

import { IconButton, Toolbar, Typography, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCmp from "../DrawerCmp";
import { useState } from "react";
import Link from "next/link";

export default function Hambuger() {
  const [drawerCmp, setDrawerCmp] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setDrawerCmp(true)}
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <DrawerCmp open={drawerCmp} setDrawerCmp={setDrawerCmp}>
        <Toolbar />
        <Typography style={{ width: "250px" }}>
          Quickly Buy or Sell (QBOS)
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: "5px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        />
        <Link href="../sell-your-products">
          <Typography
            sx={{
              marginTop: "40px",
              color: "white",
              textDecoration: "underline",
            }}
          >
            Sell your Nike products today!
          </Typography>
        </Link>
      </DrawerCmp>
    </>
  );
}
