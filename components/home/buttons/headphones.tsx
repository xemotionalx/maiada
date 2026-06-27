"use client";

import { useState } from "react";
import Image from "next/image";
import { QuietTimeModal } from "@/components/home/info/quiet-time";
import "./style.css";

export default function HeadphonesButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="headphones picture-button"
        onClick={() => setIsOpen(true)}
      >
        <div className="button-inner">
          <span className="label headphones-label">my band</span>
          <Image
            src="/images/headphones.png"
            alt="cute headphones on the table"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <QuietTimeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
