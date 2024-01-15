import { Divider, Drawer, Toolbar, Typography } from "@mui/material";

import Link from "next/link";

export default function DrawerCmp({ open, setDrawerCmp }) {
  return (
    <Drawer
      open={open}
      sx={{ textAlign: "center" }}
      onClose={() => setDrawerCmp(false)}
    >
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
          Sell your Nike shoes today!
        </Typography>
      </Link>
    </Drawer>
  );
}
