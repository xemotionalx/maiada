const MOBILE_UA_RE =
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function isMobileUserAgent(userAgent: string) {
  return MOBILE_UA_RE.test(userAgent);
}
