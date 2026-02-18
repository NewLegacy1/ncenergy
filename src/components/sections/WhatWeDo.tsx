"use client";

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
import { GradientOutlineButton } from "@/components/ui/cta-buttons";
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

export function WhatWeDo() {
  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/50 to-transparent" />

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Full-service heating and cooling for homes and businesses across the Hamilton region.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {SERVICES.map((service, i) => {
            const Icon = icons[service.id] ?? Wrench;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex gap-4 items-center p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] hover:border-[var(--brand-primary)]/40 hover:shadow-[0_0_24px_var(--brand-primary-glow)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-primary)]/30 transition-colors">
                  <Icon className="h-5 w-5 text-[var(--brand-primary)]" />
                </div>
                <span className="text-[var(--charcoal)] font-medium group-hover:text-white transition-colors">
                  {service.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GradientOutlineButton
            href="/services"
            showPhoneIcon={false}
            size="md"
            solidBg="var(--bg-dark-card)"
          >
            See More
          </GradientOutlineButton>
        </motion.div>
      </div>
    </section>
  );
}
