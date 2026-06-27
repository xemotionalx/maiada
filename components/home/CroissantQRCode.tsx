"use client";

import React from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';

export default function CroissantQRCode() {
  const valueToEncode = "https://apps.apple.com/us/app/croissant/id1662287582";

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
      <QRCodeSVG 
        value={valueToEncode} 
        size={200}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"H"} // Error correction level: L, M, Q, H
      />

    </div>
  );
}