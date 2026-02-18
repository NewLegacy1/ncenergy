"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/site";

export function FAQAccordion() {
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
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Quick answers to common questions about our HVAC services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion defaultValue="faq-0">
            {FAQ_ITEMS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                trigger={faq.question}
              >
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
