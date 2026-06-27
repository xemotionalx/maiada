"use client";

import { useState } from "react";
import Image from "next/image";
import { PortfolioModal } from "@/components/home/info/portfolio";
import "./style.css";

type CroissantButtonProps = {
  imageSrc?: string;
};

export default function CroissantButton({
  imageSrc = "/images/croissant.png",
}: CroissantButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="croissant picture-button"
        onClick={() => setIsOpen(true)}
      >
        <div className="button-inner">
          <span className="label">portfolio</span>
          <Image
            src={imageSrc}
            alt="cute croissant on the table"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <PortfolioModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
