"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    window.fbq("track", "PageView");
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/pixel.jsx"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}
      />
    </div>
  );
};

export default FacebookPixel;
