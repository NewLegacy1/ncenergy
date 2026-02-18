import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Dashboard",
  description: `Dashboard for ${SITE.name}.`,
};

export default function DashboardPage() {
  return (
    <section className="pt-32 pb-16 bg-electric-grid bg-[var(--bg-dark)] min-h-screen">
      <div className="container-narrow">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Dashboard
        </h1>
        <p className="text-[var(--charcoal-muted)] mb-8">
          Welcome. This area can be used for a customer or admin dashboard.
        </p>
        <Link
          href="/"
          className="text-[var(--brand-primary)] font-semibold hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
