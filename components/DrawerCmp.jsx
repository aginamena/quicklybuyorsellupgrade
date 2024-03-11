import { Divider, Drawer, Toolbar, Typography } from "@mui/material";

import Link from "next/link";

export default function DrawerCmp({ open, setDrawerCmp, children }) {
  return (
    <Drawer
      open={open}
      sx={{ textAlign: "center" }}
      onClose={() => setDrawerCmp(false)}
    >
      {children}
    </Drawer>
  );
}
