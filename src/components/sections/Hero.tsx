"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GradientButton, CallNowButton } from "@/components/ui/cta-buttons";
import { SITE } from "@/constants/site";
import { HERO_IMAGES, getSeasonalMessage } from "@/lib/hero";

const FALLBACK_GRADIENT =
  "linear-gradient(135deg, #0a0e12 0%, #0f172a 40%, #0a0e12 100%)";

type HeroProps = {
  /** Picked on server so server/client HTML match (avoids hydration mismatch). */
  heroImage?: string;
  /** Set on server so server/client match. */
  seasonalMessage?: string;
};

export function Hero({ heroImage = HERO_IMAGES[0], seasonalMessage = getSeasonalMessage() }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero background image or gradient fallback when images are missing (avoids 404 on mobile) */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src={heroImage}
            alt="Northern Clean Energy - Clean energy HVAC services in Hamilton"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: FALLBACK_GRADIENT }}
          />
        )}
        {/* Overlay: mobile a touch more visible + subtle blur; desktop unchanged */}
        <div className="absolute inset-0 bg-[#0a0e12]/80 backdrop-blur-[2px] md:bg-[#0a0e12]/85 md:backdrop-blur-none" />
      </div>

      {/* Electric theme overlays — desktop only */}
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_var(--brand-primary)_0%,_transparent_50%)] opacity-30" />
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(ellipse_at_bottom_right,_var(--brand-primary)_0%,_transparent_40%)] opacity-15" />
      {/* Very faint grid — all viewports */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--brand-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-60" />

      <div className="container-narrow relative z-10 pt-28 pb-32 text-center">
        {/* ——— MOBILE: Premium authority hero (structure per spec) ——— */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden max-w-lg mx-auto flex flex-col items-center"
        >
          <p
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-5 bg-gradient-to-r from-[var(--brand-primary)] via-emerald-400 to-emerald-300 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            Southern Ontario&apos;s Trusted HVAC & Energy Experts
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6 drop-shadow-md text-center">
            Heating & Cooling
            <br />
            <span
              className="inline-block bg-gradient-to-r from-[var(--brand-primary)] via-emerald-400 to-emerald-300 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Done to a Higher Standard.
            </span>
          </h1>
          <p className="text-sm text-white/85 leading-relaxed mb-10 text-center px-1">
            Led by certified TSSA & HRAI professionals, Northern Clean Energy has delivered 500+ successful projects across Hamilton, Burlington, Oakville, and Niagara.
          </p>
          <Link
            href="/contact"
            className="w-full max-w-[320px] mx-auto flex items-center justify-center gap-2 rounded-xl font-semibold text-sm uppercase tracking-wider py-4 px-6 bg-gradient-to-r from-[var(--brand-primary)] via-emerald-500 to-emerald-400 text-white hover:opacity-95 transition-opacity"
          >
            Schedule Your Service
            <span aria-hidden>→</span>
          </Link>
          <div className="mt-8 text-xs text-white/70 text-center flex flex-col gap-1">
            <span>✔ {SITE.yearsExperience} Years Experience • {SITE.projectsCompleted} Projects Completed • {SITE.emergencyService} Emergency Service</span>
            <span>{SITE.googleRating}★ Rating ({SITE.googleReviewCount} reviews)</span>
          </div>
        </motion.div>

        {/* ——— DESKTOP: Original hero ——— */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Get Back to the{" "}
            <span
              className="inline-block bg-gradient-to-r from-[var(--brand-primary)] via-emerald-400 to-emerald-300 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 20px rgba(26, 127, 55, 0.8), 0 0 40px rgba(52, 211, 153, 0.4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Important Things in Life
            </span>
          </h1>
          <p className="text-xs text-[var(--brand-primary)] font-semibold uppercase tracking-wider mb-4">
            {seasonalMessage}
          </p>
          <p className="text-sm text-white/90 mb-10 max-w-2xl mx-auto">
            We can take care of everything you need for your home&apos;s heating
            and cooling systems. We&apos;ll make your home the perfect oasis so
            you can spend your time on what truly matters.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GradientButton href="/contact">Request a Quote</GradientButton>
            <CallNowButton />
          </motion.div>
        </motion.div>

        {/* Trust bar — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:flex mt-16 flex-wrap justify-center gap-6 md:gap-10 text-white/80 text-sm md:text-base"
        >
          <span>
            <strong className="text-[var(--brand-primary)]">{SITE.yearsExperience}</strong> Years
            Experience
          </span>
          <span>
            <strong className="text-[var(--brand-primary)]">{SITE.emergencyService}</strong>{" "}
            Emergency Service
          </span>
          <span>
            <strong className="text-[var(--brand-primary)]">{SITE.googleRating}</strong>★{" "}
            <span className="text-white/70">({SITE.googleReviewCount} reviews)</span>
          </span>
          <span>
            <strong className="text-[var(--brand-primary)]">{SITE.projectsCompleted}</strong>{" "}
            Projects Completed
          </span>
          <span>
            Serving <strong className="text-white">{SITE.serviceAreas.slice(0, 4).join(", ")}</strong> & more
          </span>
          {SITE.certifications.length > 0 && (
            <span className="text-[var(--charcoal-muted)]">
              {SITE.certifications.join(" • ")} Certified
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
