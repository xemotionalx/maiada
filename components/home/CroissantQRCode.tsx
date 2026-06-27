"use client";

import { QRCodeSVG } from "qrcode.react";
import { useIsMobileUserAgent } from "@/hooks/use-is-mobile-user-agent";

export default function CroissantQRCode() {
  const isMobile = useIsMobileUserAgent();
  const valueToEncode = "https://apps.apple.com/us/app/croissant/id1662287582";

  if (isMobile !== false) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <QRCodeSVG
        value={valueToEncode}
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"}
      />
    </div>
  );
}
