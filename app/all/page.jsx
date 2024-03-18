"use client";
import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import Filter from "./Filter";
import Paginate from "./Paginate";

export default function Body() {
  const [drawerCmp, setDrawerCmp] = useState(false);
  const [filterCondition, setFilterCondition] = useState({});

  return (
    <React.Fragment>
      <Filter
        drawerCmp={drawerCmp}
        setDrawerCmp={setDrawerCmp}
        setFilterCondition={setFilterCondition}
      />
      <Container style={{ textAlign: "right", marginTop: "50px" }}>
        <Button
          onClick={() => setDrawerCmp(true)}
          variant="outlined"
          size="large"
        >
          filter
        </Button>
      </Container>
      <Paginate filterCondition={filterCondition} />
    </React.Fragment>
  );
}
