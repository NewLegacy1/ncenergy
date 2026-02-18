"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/constants/site";

export function EmergencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-950/95 backdrop-blur-sm border-b border-red-500/30">
      <Link
        href={`tel:${SITE.phone.replace(/\D/g, "")}`}
        className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white hover:text-red-200 transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span>
          24/7 Emergency Service — Call {SITE.phone}
        </span>
      </Link>
    </div>
  );
}
