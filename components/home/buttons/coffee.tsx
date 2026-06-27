"use client";

import { useState } from "react";
import Image from "next/image";
import { AboutMeModal } from "@/components/home/info/about-me";
import "./style.css";

export default function CoffeeButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="coffee picture-button"
        onClick={() => setIsOpen(true)}
      >
        <div className="button-inner">
          <span className="label">about me</span>
          <Image
            src="/images/coffee.png"
            alt="cute coffee on the table"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <AboutMeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
