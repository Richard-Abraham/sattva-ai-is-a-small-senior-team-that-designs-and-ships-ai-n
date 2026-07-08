import { ArrowRight } from 'lucide-react';

interface HeroSplitProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Split hero: copy beside a framed image. Bold, Lovable-style — gradient headline, vibrant gradient
// CTA with a primary glow, a surface glow behind, framed image, staggered scroll reveal. Tokens +
// plan-113 foundation classes only (emit-safe; no ui primitives, no motion lib).
export function HeroSplit({ eyebrow, heading, subheading, primaryLabel, primaryHref, imageSrc, imageAlt = '', _editable }: HeroSplitProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="surface-glow bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h1 className="text-display text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Heading'}</span>
          </h1>
          {subheading && <p className="text-lead mt-6 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
          {primaryLabel && (
            <div className="mt-9">
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
        <div className="reveal">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="shadow-glow aspect-[4/3] w-full rounded-2xl border border-border object-cover"
            />
          ) : (
            <div
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="shadow-glow aspect-[4/3] w-full rounded-2xl border border-border bg-muted"
            />
          )}
        </div>
      </div>
    </section>
  );
}
