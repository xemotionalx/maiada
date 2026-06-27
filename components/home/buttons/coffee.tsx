"use client";

import { useState } from "react";
import FadeInImage from "@/components/ui/FadeInImage";
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
          <FadeInImage
            src="/images/coffee.png"
            alt="cute coffee on the table"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <AboutMeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
