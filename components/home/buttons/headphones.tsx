"use client";

import { useState } from "react";
import FadeInImage from "@/components/ui/FadeInImage";
import "./style.css";
import { MediaModal } from "../info/media";

export default function HeadphonesButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="headphones picture-button"
        onClick={() => setIsOpen(true)}
        aria-label="open media modal"
      >
        <div className="button-inner">
          <span className="label headphones-label">media</span>
          <FadeInImage
            src="/images/headphones.png"
            alt="headphones"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <MediaModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
