/** Hero image paths (add files to public). Picked on server so server/client HTML match. */
export const HERO_IMAGES = ["/hero-clean-energy.jpg", "/northern-lights-footer.jpg"] as const;

const SEASONAL_MESSAGES: Record<string, string> = {
  winter: "Furnace season — stay warm all winter",
  spring: "AC tune-up season — get ready for summer",
  summer: "Beat the heat — AC installs & repairs",
  fall: "Furnace tune-up season — prepare for winter",
};

/** Safe to call on server or client. Use from server so initial HTML matches client (avoids hydration mismatch). */
export function getSeasonalMessage(): string {
  const month = new Date().getMonth();
  if (month >= 11 || month <= 1) return SEASONAL_MESSAGES.winter;
  if (month >= 2 && month <= 4) return SEASONAL_MESSAGES.spring;
  if (month >= 5 && month <= 7) return SEASONAL_MESSAGES.summer;
  return SEASONAL_MESSAGES.fall;
}
