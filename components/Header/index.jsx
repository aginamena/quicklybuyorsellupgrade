import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Link from "next/link";

import { ParentCmp } from "./style";

import Auth from "./Auth";
import SearchBarCmp from "./SearchBarCmp";

export default function Header() {
  return (
    <ParentCmp>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box style={{ display: "flex" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box style={{ display: "flex", alignItems: "center" }}>
              <Link style={{ textDecoration: "none", color: "white" }} href="/">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    marginRight: "30px",
                  }}
                >
                  QBOS
                </Typography>
              </Link>
              <Link href="sell-your-products">
                <Typography
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Sell your products
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchBarCmp />
          </Box>
          <Box>
            <Auth />
          </Box>
        </Toolbar>
      </AppBar>
    </ParentCmp>
  );
}
