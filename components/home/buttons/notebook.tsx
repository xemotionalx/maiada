"use client";

import { useState } from "react";
import FadeInImage from "@/components/ui/FadeInImage";
import { ResumeModal } from "@/components/home/info/resume";
import "./style.css";

export default function NotebookButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="notebook notebook-button"
        onClick={() => setIsOpen(true)}
      >
        <div className="button-inner">
          <span className="notebook-label">resume</span>
          <FadeInImage
            src="/images/notebook.png"
            alt="cute notebook on the chair"
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </button>
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
