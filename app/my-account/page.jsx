"use client";
import { Container, Toolbar, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

import { useState } from "react";

import CreateProducts from "./CreateProducts";
import TabPanel from "./TabPanel";
import ViewProducts from "./ViewProducts";
import { TabCmp } from "./style";
import { MyAccountContextWrapper } from "@/context/myAccount";

export default function MyAccount() {
  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [tabPosition, setTabPosition] = useState(0);

  const handleChange = (_, newValue) => {
    setTabPosition(newValue);
  };

  return (
    <MyAccountContextWrapper parentState={{ tabPosition, setTabPosition }}>
      <Toolbar />
      <Container sx={{ display: { xs: "block", md: "flex" } }}>
        <Tabs
          orientation={ismediumScreenSizeAndBelow ? "horizontal" : "vertical"}
          variant={ismediumScreenSizeAndBelow ? "scrollable" : "fullWidth"}
          value={tabPosition}
          onChange={handleChange}
          allowScrollButtonsMobile
        >
          <TabCmp label="Create Products" data-testid="Create Products" />
          <TabCmp label="View Products" data-testid="View Products" />
        </Tabs>
        <TabPanel value={tabPosition} index={0}>
          <CreateProducts />
        </TabPanel>
        <TabPanel value={tabPosition} index={1}>
          <ViewProducts />
        </TabPanel>
      </Container>
    </MyAccountContextWrapper>
  );
}
