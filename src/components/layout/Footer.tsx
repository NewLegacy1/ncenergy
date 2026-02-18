import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Northern lights background */}
      <div className="absolute inset-0">
        <Image
          src="/northern-lights-footer.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[var(--bg-dark-elevated)]/60" />
      </div>

      <div className="relative z-10 border-t border-[var(--border-subtle)] py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">{SITE.name}</h3>
              <p className="text-[var(--charcoal-muted)] max-w-md">
                {SITE.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]">
                  Home
                </Link>
                <Link href="/about" className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]">
                  About
                </Link>
                <Link href="/services" className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]">
                  Services
                </Link>
                <Link href="/testimonials" className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]">
                  Testimonials
                </Link>
                <Link href="/contact" className="text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-[var(--charcoal-muted)] hover:text-[var(--brand-primary)]"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
                <div className="flex items-center gap-2 text-[var(--charcoal-muted)]">
                  <MapPin className="h-4 w-4" />
                  {SITE.address}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center text-[var(--charcoal-muted)] text-sm">
            © {new Date().getFullYear()} <span className="uppercase">{SITE.name}</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
