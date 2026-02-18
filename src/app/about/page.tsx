import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { ABOUT } from "@/constants/about";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about Northern Clean Energy - ${ABOUT.headline} Experience, Quality and Safety since ${SITE.founded}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
