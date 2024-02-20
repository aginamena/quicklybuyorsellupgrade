"use client";
import { Container, Toolbar, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useTheme } from "@mui/material/styles";

import { useState, useEffect } from "react";

import CreateProducts from "./create-products";
import TabPanel from "./TabPanel";
import ViewProducts from "./view-products";
import { TabCmp } from "./style";
import { MyAccountContextWrapper } from "@/context/myAccount";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function MyAccount() {
  const theme = useTheme();
  const ismediumScreenSizeAndBelow = useMediaQuery(
    theme.breakpoints.down("md")
  );
  const searchParams = useSearchParams();

  const [tabPosition, setTabPosition] = useState(0);

  useEffect(() => {
    const tab = searchParams.get("tab");
    setTabPosition(parseInt(tab));
  }, [searchParams]);

  return (
    <MyAccountContextWrapper parentState={{ tabPosition, setTabPosition }}>
      <Toolbar />
      <Container sx={{ display: { xs: "block", md: "flex" } }}>
        <Tabs
          orientation={ismediumScreenSizeAndBelow ? "horizontal" : "vertical"}
          variant={ismediumScreenSizeAndBelow ? "scrollable" : "fullWidth"}
          value={tabPosition}
          allowScrollButtonsMobile
        >
          <Link href="my-account?tab=0" style={{ color: "white" }}>
            <TabCmp label="Create Products" data-testid="Create Products" />
          </Link>
          <Link href="my-account?tab=1" style={{ color: "white" }}>
            <TabCmp label="View Products" data-testid="View Products" />
          </Link>
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
