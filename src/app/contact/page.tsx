import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name} for HVAC services in Hamilton. Call ${SITE.phone} or email ${SITE.email}. Get a free quote today.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-sm text-[var(--charcoal-muted)] mb-10">
                Submit the contact form and an expert from Northern Clean Energy
                will be in touch!
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin className="h-6 w-6 text-[var(--brand-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-[var(--charcoal-muted)]">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Phone className="h-6 w-6 text-[var(--brand-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a
                      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                      className="text-[var(--brand-primary)] font-semibold hover:underline"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="h-6 w-6 text-[var(--brand-primary)] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[var(--brand-primary)] font-semibold hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden bg-[var(--bg-dark-card)] border border-[var(--border-subtle)] h-64 flex items-center justify-center">
            <p className="text-[var(--charcoal-muted)] text-sm">
              Map: {SITE.address} • Hamilton, {SITE.province}
            </p>
          </div>
        </div>
      </section>

      <CTASection variant="compact" />
    </>
  );
}
