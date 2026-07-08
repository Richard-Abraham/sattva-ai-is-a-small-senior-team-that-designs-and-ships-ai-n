// emitted-source: compiled into generated sites as src/components/ui/button.tsx — not used by sattva-web.
// shadcn/ui-compatible API (variant/size/asChild) without Radix: a minimal local Slot keeps
// the toolbox dependency-light (react + cn only) so every emitted project stays lean.
import * as React from 'react';
import { cn } from '@/lib/utils';

const VARIANT_CLASSES: Record<string, string> = {
  default: 'bg-primary text-white shadow-sm hover:bg-primary-dark',
  secondary: 'bg-muted text-foreground hover:bg-accent',
  outline: 'border border-border bg-background text-foreground hover:bg-muted',
  ghost: 'text-foreground hover:bg-muted',
  link: 'text-primary underline-offset-4 hover:underline',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
};

const SIZE_CLASSES: Record<string, string> = {
  default: 'h-10 px-5 py-2 text-sm',
  sm: 'h-8 px-3 text-xs',
  lg: 'h-12 px-7 text-base',
  icon: 'h-10 w-10',
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
  /** Render the classes onto the child element instead (e.g. <Button asChild><a …/></Button>). */
  asChild?: boolean;
}

export function buttonVariants({ variant = 'default', size = 'default', className }: {
  variant?: keyof typeof VARIANT_CLASSES;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
} = {}): string {
  return cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.default,
    SIZE_CLASSES[size] ?? SIZE_CLASSES.default,
    className,
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className });
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        ...props,
        className: cn(classes, child.props.className),
      } as Partial<{ className: string }>);
    }
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
