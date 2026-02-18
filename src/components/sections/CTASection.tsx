"use client";

import { motion } from "framer-motion";
import { GradientButton, CallButton } from "@/components/ui/cta-buttons";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
}

export function CTASection({
  title = "Ready for Quality Heating & Cooling?",
  subtitle = "Get a free quote or schedule service today. We're available 24/7 for emergencies.",
  variant = "default",
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Electric gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--bg-dark-elevated)] to-[var(--bg-dark)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,_var(--brand-primary)_0%,_transparent_60%)] opacity-20" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--brand-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-50" />

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-[var(--charcoal-muted)] text-sm mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GradientButton href="/contact" size={variant === "compact" ? "md" : "lg"}>
              Request a Quote
            </GradientButton>
            <CallButton size={variant === "compact" ? "md" : "lg"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
