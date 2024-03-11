"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Filter from "./Filter";
import Paginate from "./Paginate";
import Link from "next/link";

export default function Body({ top12Products }) {
  const [drawerCmp, setDrawerCmp] = useState(false);

  return (
    <React.Fragment>
      <Filter drawerCmp={drawerCmp} setDrawerCmp={setDrawerCmp} />
      <Container style={{ textAlign: "right", marginTop: "50px" }}>
        <Button
          onClick={() => setDrawerCmp(true)}
          variant="outlined"
          size="large"
        >
          filter
        </Button>
      </Container>
      {top12Products.length == 0 ? (
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h6">No products available.</Typography>
          <Link href="../all" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="large"
              style={{ marginTop: "30px" }}
            >
              Go back
            </Button>
          </Link>
        </Box>
      ) : (
        <Paginate
          top12Products={top12Products.slice(0, 12)}
          hasMoreProducts={top12Products.length > 12}
        />
      )}
    </React.Fragment>
  );
}
