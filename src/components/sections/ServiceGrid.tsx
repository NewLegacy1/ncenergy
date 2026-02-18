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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServiceGrid() {
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
            Our Services
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Northern Clean Energy is the premier home comfort team in Hamilton.
            Count on us for fast, friendly heating and air conditioning service.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = icons[service.id] ?? Wrench;
            return (
              <motion.div key={service.id} variants={item}>
                <Link href={service.href}>
                  <Card className="h-full group hover:shadow-[0_0_30px_var(--brand-primary-glow)] hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)]/20 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-primary)]/30 transition-colors">
                        <Icon className="h-6 w-6 text-[var(--brand-primary)]" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[var(--brand-primary)] transition-colors">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--charcoal-muted)] text-sm line-clamp-3">
                        {service.shortDesc}
                      </p>
                      <span className="inline-block mt-4 text-[var(--brand-primary)] font-semibold text-sm">
                        Learn more →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
