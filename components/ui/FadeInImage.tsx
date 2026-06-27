"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import "./fade-in-image.css";

export default function FadeInImage({
  className,
  onLoadingComplete,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const imageClassName = [className, "fade-in-image", loaded && "fade-in-image--loaded"]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      {...props}
      className={imageClassName}
      onLoadingComplete={(image) => {
        setLoaded(true);
        onLoadingComplete?.(image);
      }}
    />
  );
}
