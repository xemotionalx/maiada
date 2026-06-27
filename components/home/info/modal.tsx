"use client";

import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import Image from "next/image";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  image?: string;
  children: ReactNode;
  closeOnBackdropClick?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  image,
  children,
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

  return createPortal(
    <div
      className="home-modal-backdrop"
      role="presentation"
      onClick={() => {
        if (closeOnBackdropClick) {
          onClose();
        }
      }}
    >
      <div className="home-modal-frame gingham-red">
        <section
          className="home-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Dialog"}
          onClick={(event) => event.stopPropagation()}
        >
          {image && (
            <div className="home-modal-image-frame gingham-red">
              <Image
                className="home-modal-image"
                src={image}
                alt={title ?? "Dialog"}
                width={100}
                height={100}
              />
            </div>
          )}
          <div className="home-modal-content">
            <header className="home-modal-header">
              <h2 className="home-modal-title">{title}</h2>
            </header>
            {children}
          </div>
        </section>
      </div>
    </div>,
    document.body,
  );
}
