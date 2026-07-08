import { ArrowRight } from 'lucide-react';

interface CtaConsultationProps {
  heading?: string;
  subheading?: string;
  field1Label?: string;
  field1Placeholder?: string;
  field2Label?: string;
  field2Placeholder?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Lead-gen CTA card with a two-field intake preview above a single action link (plain HTML
// inputs — a static visual, not a wired form; deployed sites can swap in their own form handler).
// Adapted from the "heritage/woodcare" Stitch mockup's "Project Consultation" section
// (stitch-mockup, designer-mockup license) — distinct from `cta-newsletter` (single email field)
// and `cta-split` (no fields at all). Tokens + plan-113 foundation classes only (emit-safe).
export function CtaConsultation({
  heading, subheading, field1Label, field1Placeholder, field2Label, field2Placeholder, primaryLabel, primaryHref, _editable,
}: CtaConsultationProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="reveal mx-auto max-w-4xl px-6">
        <div className="surface-glow rounded-3xl border border-border bg-muted p-10 lg:p-14">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          {subheading && <p className="text-lead mt-4 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              {field1Label && <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/60" {...editable('props.field1Label')}>{field1Label}</span>}
              <input type="text" placeholder={field1Placeholder} className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </label>
            <label className="block">
              {field2Label && <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-foreground/60" {...editable('props.field2Label')}>{field2Label}</span>}
              <input type="text" placeholder={field2Placeholder} className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </label>
          </div>
          {primaryLabel && (
            <div className="mt-8">
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
