import { Hero } from "@/components/sections/Hero";
import { HERO_IMAGES, getSeasonalMessage } from "@/lib/hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { RebateCallout } from "@/components/sections/RebateCallout";
import { WhatWeDontDo } from "@/components/sections/WhatWeDontDo";
import { ServiceAreaBadge } from "@/components/sections/ServiceAreaBadge";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NCEDifference } from "@/components/sections/NCEDifference";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  const heroImage = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)];
  const seasonalMessage = getSeasonalMessage();
  return (
    <>
      <Hero heroImage={heroImage} seasonalMessage={seasonalMessage} />
      <WhatWeDo />
      <RebateCallout />
      <WhatWeDontDo />
      <ServiceAreaBadge />
      <ProjectGallery />
      <TestimonialGrid limit={3} />
      <HowItWorks />
      <NCEDifference />
      <FAQAccordion />
      <CTASection
        title="Get Quality Heating & Cooling Services in Hamilton Today!"
        subtitle="Looking for the best HVAC company? Contact us for a free quote or call now for 24/7 emergency service."
      />
    </>
  );
}
