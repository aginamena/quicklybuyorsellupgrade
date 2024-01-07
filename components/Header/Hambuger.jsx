"use client";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerCmp from "../DrawerCmp";
import { useState } from "react";

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
      <DrawerCmp open={drawerCmp} setDrawerCmp={setDrawerCmp} />
    </>
  );
}
