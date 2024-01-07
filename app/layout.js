import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ThemeRegistry from "@/config/ThemeRegistry";

import Header from "@/components/Header";

import { AppContextWrapper } from "@/context/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: "mui" }}>
          <AppContextWrapper>
            <Header />
            {children}
          </AppContextWrapper>
        </ThemeRegistry>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
