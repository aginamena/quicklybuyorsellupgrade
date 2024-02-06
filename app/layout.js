import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GoogleAnalytics } from "@next/third-parties/google";

import ThemeRegistry from "@/config/ThemeRegistry";

import Header from "@/components/Header";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FacebookPixel from "@/components/FacebookPixel";

export const metadata = {
  title: "Quickly buy or sell your Nike shoes today!",
  description:
    "We are on a mission to make sure buyers can quickly find the nike sneaker products they need, and sellers can be easily and quickly contacted by buyers for their products on our platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Header />
          {children}
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-PDRSJTYRSL" />
        <FacebookPixel />
      </body>
    </html>
  );
}
