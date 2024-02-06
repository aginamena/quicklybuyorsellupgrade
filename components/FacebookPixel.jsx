"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();
  const facebook_pixel_id = "910411337414685";

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
        data-pixel-id={facebook_pixel_id}
      />
    </div>
  );
};

export default FacebookPixel;
