import type { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { SERVICES } from "@/constants/site";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "HVAC Services",
  description: `HVAC repair and installation in Hamilton. ${SERVICES.map((s) => s.title).join(", ")}. Serving ${SITE.serviceAreas.slice(0, 5).join(", ")}.`,
};

export default function ServicesPage() {
  return <ServicesContent />;
}
