"use client";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { SearchBox } from "react-instantsearch";

export const ParentCmp = styled(Box)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    zIndex: theme.zIndex.drawer + 0,
    position: "static",
  },
}));

export const StyledSearchBox = styled(SearchBox)(({ theme }) => ({
  "& .ais-SearchBox-input": {
    width: "600px",
    height: "40PX",
    paddingLeft: "20px",
    paddingRight: "10px",
    fontSize: "16px",
    letterSpacing: "1.5px",
  },
  "& .ais-SearchBox-form": {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    "& .ais-SearchBox-input": {
      width: "90%",
    },
  },
}));
