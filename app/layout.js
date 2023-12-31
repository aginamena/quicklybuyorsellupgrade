import Footer from "@/components/Footer";
import ThemeRegistry from "@/config/ThemeRegistry";
import Divider from "@mui/material/Divider";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Header />
          {children}
          <Divider sx={{ borderBottomWidth: "5px", marginTop: "50px" }} />
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
