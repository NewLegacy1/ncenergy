"use client";

import { motion } from "framer-motion";
import { Phone, FileCheck, Wrench } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "Call or fill out our form. We'll get back to you quickly to discuss your needs and schedule a visit.",
  },
  {
    icon: FileCheck,
    title: "Get a Quote",
    description:
      "Our team will assess your home or business and provide an estimate with a detailed breakdown from our flat rate pricing guide.",
  },
  {
    icon: Wrench,
    title: "We Take Care of It",
    description:
      "Our certified technicians arrive on time, do the job right, and leave your space clean. No surprises, no hidden fees.",
  },
];

export function HowItWorks() {
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
            How It Works
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Simple, transparent, and hassle-free. From first contact to finished
            job.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] mb-6 border border-[var(--border-subtle)]">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {i + 1}. {step.title}
              </div>
              <p className="text-[var(--charcoal-muted)]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
