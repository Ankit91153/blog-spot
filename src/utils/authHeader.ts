const AUTH_WHITELIST = [
  "/auth/login/request-otp",
  "/auth/verify-email",
  "/auth/login/verify-otp",
  "/auth/signup",
];

export function isAuthWhitelisted(url: string): boolean {
  return AUTH_WHITELIST.some((route) => url.includes(route));
}