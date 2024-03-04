"use client";

import { isUserAdmin } from "@/util";
import { Box, Paper, Typography, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import ProductSummary from "./ProductSummary";

export default function Specification({
  productId,
  productStatus,
  sizes,
  location,
  color,
  type,
}) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    setIsAdmin(isUserAdmin());
  }, []);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Paper style={{ padding: "30px", marginTop: "40px" }}>
      {isAdmin && (
        <Box style={{ marginBottom: "40px" }}>
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
        </Box>
      )}

      <Box
      // sx={{
      //   borderBottom: 1,
      //   borderColor: "divider",
      // }}
      >
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Product summary" />
          <Tab label="Return and refund policy" />
          <Tab label="shipping and delivery" />
        </Tabs>
        <CustomTabPanel value={currentTab} index={0}>
          <ProductSummary
            sizes={sizes}
            type={type}
            color={color}
            location={location}
          />
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={currentTab} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Paper>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
