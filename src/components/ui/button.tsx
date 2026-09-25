import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer font-sans font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-[1.15em] [&_svg]:shrink-0 overflow-hidden isolation-auto",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-all duration-300",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-all duration-300",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        gold:
          "rounded-2xl text-[0.7rem] tracking-[0.22em] uppercase text-ink-deep shadow-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-gold-intense hover:-translate-y-0.5 active:translate-y-0" +
          " bg-[image:var(--gradient-gold)] bg-[length:160%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%] bg-no-repeat" +
          " before:absolute before:inset-0 before:rounded-[inherit] before:bg-[image:var(--gradient-gold-shine)] before:bg-[length:250%_100%] before:bg-[position:200%_0] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-[1200ms] hover:before:bg-[position:-100%_0]",
        goldOutline:
          "rounded-2xl text-[0.7rem] tracking-[0.22em] uppercase text-gold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:text-ink-deep active:translate-y-0" +
          " bg-transparent border border-gold/50 hover:border-transparent" +
          " before:absolute before:inset-0 before:rounded-[inherit] before:bg-[image:var(--gradient-gold)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10",
        goldGhost:
          "rounded-xl text-[0.7rem] tracking-[0.22em] uppercase text-gold hover:text-gold-light transition-colors duration-300",
        whatsapp:
          "rounded-2xl text-[0.7rem] tracking-[0.22em] uppercase text-white shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_20px_50px_-15px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 active:translate-y-0" +
          " bg-[linear-gradient(135deg,#128C7E_0%,#25D366_50%,#34e27a_100%)] bg-[length:160%_100%] bg-[position:0%_50%] hover:bg-[position:100%_50%]",
        luxInk:
          "rounded-2xl text-[0.7rem] tracking-[0.22em] uppercase text-graphite-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0" +
          " border border-white/10 bg-white/[0.04] backdrop-blur hover:bg-white/[0.08] hover:border-gold/40",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-xl px-4 text-[0.65rem]",
        lg: "h-13 rounded-2xl px-9 py-3.5",
        xl: "h-15 rounded-2xl px-11 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
