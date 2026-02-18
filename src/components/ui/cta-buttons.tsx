"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const gradientPrimaryBase =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold bg-gradient-to-r from-[var(--brand-primary)] via-emerald-500 to-emerald-400 text-white shadow-[0_0_24px_rgba(26,127,55,0.5)] hover:shadow-[0_0_32px_rgba(26,127,55,0.6)] transition-shadow cursor-pointer";

const sizeClasses = {
  sm: "h-9 min-w-[140px] px-4 text-sm",
  md: "h-11 min-w-[180px] px-6 text-base",
  lg: "h-12 min-w-[200px] px-8 text-lg",
};

const gradientTextStyle = {
  background: "linear-gradient(to right, var(--brand-primary), #34d399, #6ee7b7)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
};

/* Rounded rect ring mask - smooth corners (defined in layout.tsx) */
const gradientRingStyle = {
  background: "linear-gradient(to right, #1a7f37, #34d399, #6ee7b7)",
  WebkitMaskImage: "url(#gradient-ring-mask)",
  WebkitMaskSize: "100% 100%",
  WebkitMaskPosition: "center",
  WebkitMaskRepeat: "no-repeat",
  maskImage: "url(#gradient-ring-mask)",
  maskSize: "100% 100%",
  maskPosition: "center",
  maskRepeat: "no-repeat",
};

/** Primary gradient button (Request a Quote style) - use with href or as form submit */
export function GradientButton({
  href,
  children,
  size = "lg",
  className,
  containerClassName,
  type,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  containerClassName?: string;
} & (
  | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
)) {
  const classes = cn(gradientPrimaryBase, sizeClasses[size], className);
  if (href) {
    return (
      <Link
        href={href}
        className={containerClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span className={classes}>{children}</span>
      </Link>
    );
  }
  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={(type ?? "button") as "button" | "submit" | "reset"}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

/** Gradient outline button (Call Now style) - transparent center, gradient border + text */
export function GradientOutlineButton({
  href,
  children,
  size = "lg",
  showPhoneIcon = true,
  className,
  containerClassName,
  /** Use solid inner bg for perfect corners (e.g. mobile footer on dark bg) */
  solidBg,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  showPhoneIcon?: boolean;
  className?: string;
  containerClassName?: string;
  solidBg?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const sizeClass = sizeClasses[size];
  const innerContent = (
    <>
      {showPhoneIcon && (
        <Phone className={cn("shrink-0 text-[var(--brand-primary)]", size === "sm" ? "h-4 w-4" : "h-5 w-5")} />
      )}
      <span
        className="whitespace-nowrap bg-gradient-to-r from-[var(--brand-primary)] via-emerald-500 to-emerald-400 bg-clip-text"
        style={gradientTextStyle}
      >
        {children}
      </span>
    </>
  );

  const content = solidBg ? (
    /* Solid-bg variant: gradient wrapper + inner fill = even border, perfect corners */
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl cursor-pointer",
        sizeClass,
        className
      )}
      style={{ background: "linear-gradient(to right, #1a7f37, #34d399, #6ee7b7)", padding: 3 }}
    >
      <span
        className="absolute inset-[3px] flex items-center justify-center gap-2 rounded-[9px] px-6 font-semibold"
        style={{ backgroundColor: solidBg }}
      >
        {innerContent}
      </span>
    </span>
  ) : (
    <span
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl cursor-pointer",
        sizeClass,
        className
      )}
    >
      <span
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={gradientRingStyle}
        aria-hidden
      />
      <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 font-semibold rounded-xl">
        {innerContent}
      </span>
    </span>
  );
  if (href) {
    return (
      <a href={href} className={containerClassName} {...props}>
        {content}
      </a>
    );
  }
  return content;
}

/** Convenience: Call Now button linking to phone */
export function CallNowButton({
  size = "lg",
  className,
  containerClassName,
  solidBg,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  containerClassName?: string;
  solidBg?: string;
}) {
  return (
    <GradientOutlineButton
      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
      size={size}
      className={className}
      containerClassName={containerClassName}
      solidBg={solidBg}
    >
      Call Now
    </GradientOutlineButton>
  );
}

/** Convenience: Call button with phone number text (for sections that show the number) */
export function CallButton({
  size = "lg",
  className,
  containerClassName,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  containerClassName?: string;
}) {
  return (
    <GradientOutlineButton
      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
      size={size}
      className={className}
      containerClassName={containerClassName}
    >
      Call {SITE.phone}
    </GradientOutlineButton>
  );
}
