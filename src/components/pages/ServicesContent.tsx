"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  Wrench,
  Flame,
  Thermometer,
  Wind,
  Zap,
  Layers,
  Building2,
} from "lucide-react";
import { GradientButton } from "@/components/ui/cta-buttons";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/constants/site";

const icons: Record<string, React.ElementType> = {
  "air-conditioner-installation": Snowflake,
  "air-conditioner-repair": Wrench,
  "furnace-installation": Flame,
  "furnace-repair": Thermometer,
  "heat-pumps": Wind,
  boilers: Zap,
  "radiant-floor-heating": Layers,
  commercial: Building2,
};

export function ServicesContent() {
  return (
    <>
      <section className="pt-32 pb-16 bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              HVAC Services in Hamilton
            </h1>
            <p className="text-sm text-[var(--charcoal-muted)] max-w-2xl mx-auto">
              Turn to us for quality HVAC services. Northern Clean Energy has a
              full team of dedicated technicians, installers, and comfort
              advisors ready to help make your home as comfortable as it can be.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow">
          <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const Icon = icons[service.id] ?? Wrench;
              return (
                <motion.section
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-24"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--brand-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--border-subtle)]">
                      <Icon className="h-8 w-8 text-[var(--brand-primary)]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-[var(--charcoal-muted)] text-lg mb-6">
                        {service.shortDesc}
                      </p>
                      <GradientButton href="/contact" size="md">
                        Get a Quote
                      </GradientButton>
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need HVAC Service?"
        subtitle="Contact us for a free estimate. We service all makes and brands of furnaces, boilers, air conditioners, heat pumps, and more."
      />
    </>
  );
}
