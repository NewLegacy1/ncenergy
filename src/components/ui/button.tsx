import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-dark)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/25 hover:bg-[var(--brand-primary-hover)] hover:shadow-xl hover:shadow-[var(--brand-primary)]/30 active:scale-[0.98]",
        secondary:
          "border-2 border-[var(--brand-primary)] bg-transparent text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10",
        outline:
          "border-2 border-[var(--border-subtle)] bg-transparent text-[var(--charcoal)] hover:bg-[var(--brand-primary)]/10 hover:border-[var(--brand-primary)]/30",
        ghost: "hover:bg-charcoal/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
