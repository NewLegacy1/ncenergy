import type { Metadata } from "next";
import { TestimonialsContent } from "@/components/pages/TestimonialsContent";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `What our clients say about ${SITE.name}. Real feedback from homeowners and businesses in Hamilton, Burlington, Oakville and the surrounding area.`,
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
