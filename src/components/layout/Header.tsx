"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/cta-buttons";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-9 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--bg-dark-elevated)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        )}
      >
        <div className="container-narrow flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white uppercase">
            {SITE.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)] font-medium"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <GradientButton href="/contact?ref=quote" size="sm">
              Request a Quote
            </GradientButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--bg-dark-elevated)] border-t border-[var(--border-subtle)]"
            >
              <nav className="container-narrow py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[var(--charcoal)] font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-[var(--brand-primary)] font-semibold py-2"
                >
                  <Phone className="h-4 w-4" />
                  Call {SITE.phone}
                </a>
                <GradientButton
                  href="/contact"
                  size="md"
                  className="w-full min-w-0 justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Quote
                </GradientButton>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
