"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { GradientButton } from "@/components/ui/cta-buttons";

export function RebateCallout() {
  return (
    <section className="section-padding bg-[var(--bg-dark)]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--brand-primary)]/20 via-[var(--bg-dark-card)] to-[var(--brand-primary)]/10 p-8 md:p-10"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/30 flex items-center justify-center shrink-0">
                <Zap className="h-7 w-7 text-[var(--brand-primary)]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Save with Ontario Heat Pump Rebates
                </h2>
                <p className="text-[var(--charcoal-muted)] text-sm md:text-base">
                  Government rebates and incentives can significantly reduce the cost of a new heat pump. Get a free quote to see how much you could save.
                </p>
              </div>
            </div>
            <GradientButton href="/services#heat-pumps" size="md" className="shrink-0">
              Get a Free Quote
            </GradientButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
