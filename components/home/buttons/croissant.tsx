"use client";

import Image from "next/image";
import "./style.css";

type CroissantButtonProps = {
  onOpenModal: () => void;
};

export default function CroissantButton({ onOpenModal }: CroissantButtonProps) {
  return (
    <button
      type="button"
      className="croissant picture-button"
      onClick={onOpenModal}
    >
      <div className="button-inner">
        <span className="label">portfolio</span>
        <Image
          src="/images/croissant.png"
          alt="cute croissant on the table"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
