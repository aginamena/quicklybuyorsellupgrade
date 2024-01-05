import Footer from "@/components/Footer";
import ThemeRegistry from "@/config/ThemeRegistry";
import Divider from "@mui/material/Divider";
import Header from "@/components/Header";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppContextWrapper } from "@/context/app";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: "mui" }}>
          <AppContextWrapper>
            <Header />
            {children}
            <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
            <Footer />
          </AppContextWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
