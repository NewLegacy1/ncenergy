"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/constants/projects";

export function ProjectGallery() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % PROJECTS.length);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

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
            Our Projects
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            Explore our recent HVAC installations across Hamilton and the
            surrounding area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main image + project name */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-dark-card)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-sm text-white/80 mb-1">
                    {project.location} • {project.serviceType}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--brand-primary)]">
                    {project.outcome}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] text-white hover:bg-[var(--brand-primary)]/20 hover:border-[var(--brand-primary)]/40 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-[var(--brand-primary)]"
                      : "w-2 bg-[var(--charcoal-muted)]/50 hover:bg-[var(--charcoal-muted)]"
                  }`}
                  aria-label={`Go to ${p.name}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] text-white hover:bg-[var(--brand-primary)]/20 hover:border-[var(--brand-primary)]/40 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Project counter */}
          <p className="text-center text-[var(--charcoal-muted)] text-sm mt-4">
            {index + 1} of {PROJECTS.length}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
