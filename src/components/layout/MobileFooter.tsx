"use client";

import { FileText } from "lucide-react";
import { CallNowButton, GradientButton } from "@/components/ui/cta-buttons";

export function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--bg-dark-elevated)] border-t border-[var(--border-subtle)] shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex">
        <CallNowButton
          size="md"
          containerClassName="flex-1 flex items-center justify-center py-4"
          className="min-w-[140px]"
          solidBg="var(--bg-dark-elevated)"
        />
        <GradientButton
          href="/contact"
          size="md"
          containerClassName="flex-1 flex items-center justify-center py-4"
          className="min-w-[140px]"
        >
          <FileText className="h-5 w-5 shrink-0" />
          Get Quote
        </GradientButton>
      </div>
    </div>
  );
}
