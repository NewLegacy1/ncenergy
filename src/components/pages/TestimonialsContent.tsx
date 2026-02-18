"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { TESTIMONIALS } from "@/constants/testimonials";

export function TestimonialsContent() {
  return (
    <>
      <section className="pt-32 pb-16 bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h1>
            <p className="text-sm text-[var(--charcoal-muted)] max-w-2xl mx-auto">
              Trusted by homeowners and businesses across the Hamilton region.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-10 w-10 text-[var(--brand-primary)]/40 mb-4" />
                    <p className="text-[var(--charcoal-muted)] italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <p className="font-semibold text-white">{t.author}</p>
                      <p className="text-sm text-[var(--charcoal-muted)]">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
