"use client";

import { type ReactNode, useEffect } from "react";
import "./style.css";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
  closeOnBackdropClick?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnBackdropClick = true,
}: ModalProps) {
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
    ? `home-modal-panel ${className}`
    : "home-modal-panel";

  return (
    <div
      className="home-modal-backdrop"
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
        <header className="home-modal-header">
          {title ? <h2 className="home-modal-title">{title}</h2> : <div />}
          <button
            type="button"
            className="home-modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            x
          </button>
        </header>
        <div className="home-modal-content">{children}</div>
      </section>
    </div>
  );
}
