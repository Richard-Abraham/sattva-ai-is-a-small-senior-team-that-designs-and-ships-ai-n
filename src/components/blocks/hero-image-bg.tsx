import { ArrowRight } from 'lucide-react';

interface HeroImageBgProps {
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

// Full-bleed background-image hero with a dark gradient overlay and centered content. Bold,
// Lovable-style — gradient-glow CTA, staggered reveal. Tokens + plan-113 foundation classes only
// (emit-safe). Text is white over the overlay regardless of site theme for legibility.
export function HeroImageBg({ eyebrow, heading, subheading, primaryLabel, primaryHref, imageSrc, imageAlt = '', _editable }: HeroImageBgProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="relative isolate overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})} alt={imageAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 -z-10 bg-muted" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/55 to-black/35" />
      <div className="reveal-stagger mx-auto max-w-3xl px-6 py-32 text-center sm:py-44">
        {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
        <h1 className="text-display text-balance text-white" {...editable('props.heading')}>{heading ?? 'Heading'}</h1>
        {subheading && <p className="text-lead mx-auto mt-6 max-w-2xl text-white/85" {...editable('props.subheading')}>{subheading}</p>}
        {primaryLabel && (
          <div className="mt-9 flex justify-center">
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
    </section>
  );
}
