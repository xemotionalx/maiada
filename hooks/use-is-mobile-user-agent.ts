"use client";

import { useEffect, useState } from "react";
import { isMobileUserAgent } from "@/lib/is-mobile-user-agent";

export function useIsMobileUserAgent() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(isMobileUserAgent(navigator.userAgent));
  }, []);

  return isMobile;
}
