"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { WHAT_WE_DONT_DO } from "@/constants/whatWeDontDo";

export function WhatWeDontDo() {
  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[var(--brand-primary)] font-semibold text-sm uppercase tracking-wider mb-2">
            We&apos;re different
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Don&apos;t Do
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Here&apos;s what you won&apos;t get from us — honest, transparent service you can trust.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {WHAT_WE_DONT_DO.map((item, i) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group flex gap-4 items-center p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] hover:border-red-500/30 hover:bg-red-900/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/30 transition-colors">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <span className="text-[var(--charcoal)] group-hover:text-white/90 transition-colors">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
