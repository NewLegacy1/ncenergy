"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
} | null>(null);

function Accordion({
  children,
  className,
  defaultValue,
}: {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue ?? null);
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  trigger,
  children,
}: AccordionItemProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be inside Accordion");
  const { openItem, setOpenItem } = ctx;
  const open = openItem === value;
  const setOpen = () => setOpenItem(open ? null : value);

  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] overflow-hidden">
      <button
        type="button"
        onClick={setOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-white hover:bg-[var(--bg-dark-card-hover)] transition-colors"
      >
        {trigger}
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 text-[var(--charcoal-muted)] transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-[var(--charcoal-muted)]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Accordion, AccordionItem };
