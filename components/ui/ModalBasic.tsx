"use client";

import { type ReactNode, useEffect } from "react";
import "./modal-basic.css";

export type ModalBasicProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
};

export default function ModalBasic({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnBackdropClick = true,
}: ModalBasicProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClassName = className
    ? `basic-modal-panel ${className}`
    : "basic-modal-panel";

  return (
    <div
      className="basic-modal-backdrop"
      role="presentation"
      onClick={() => {
        if (closeOnBackdropClick) {
          onClose();
        }
      }}
    >
      <section
        className={modalClassName}
        role="dialog"
        aria-modal="true"
        aria-label={title ?? "Dialog"}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="basic-modal-header">
          {title ? <h2 className="basic-modal-title">{title}</h2> : <div />}
          <button
            type="button"
            className="basic-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            x
          </button>
        </header>
        <div className="basic-modal-content">{children}</div>
      </section>
    </div>
  );
}
