import { ArrowRight } from 'lucide-react';

interface CtaSplitProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Two-column CTA: copy on the left, a glowing gradient action panel on the right. Bold, Lovable-style
// — gradient heading + glow CTA, scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function CtaSplit({ heading, description, primaryLabel, primaryHref, _editable }: CtaSplitProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="reveal mx-auto grid max-w-6xl items-center gap-8 rounded-3xl border border-border bg-muted px-8 py-12 shadow-glow md:grid-cols-2 lg:px-14 lg:py-16">
        <div>
          <h2 className="text-h2 text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Ready to get started?'}</span>
          </h2>
          {description && <p className="text-lead mt-4 text-foreground/70" {...editable('props.description')}>{description}</p>}
        </div>
        {primaryLabel && (
          <div className="flex md:justify-end">
            <a
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              className="hover-lift inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-base font-semibold text-white shadow-glow"
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              <ArrowRight aria-hidden="true" className="size-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
