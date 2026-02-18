"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/constants/testimonials";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TestimonialGrid({ limit = 3 }: { limit?: number }) {
  const items = TESTIMONIALS.slice(0, limit);

  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Trusted by homeowners and businesses across the Hamilton region.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {items.map((t) => (
            <motion.div key={t.author} variants={item}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="h-10 w-10 text-[var(--brand-primary)]/40 shrink-0" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: (t as { rating?: number }).rating ?? 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--charcoal-muted)] italic mb-6 line-clamp-5">
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
        </motion.div>
      </div>
    </section>
  );
}
