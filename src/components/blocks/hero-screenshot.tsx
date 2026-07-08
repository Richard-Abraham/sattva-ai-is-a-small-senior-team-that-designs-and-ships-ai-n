import { ArrowRight } from 'lucide-react';

interface HeroScreenshotProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// SaaS-product hero: centered copy with dual CTAs above a browser-chrome-framed product
// screenshot (three window dots + address bar). Tokens + plan-113 foundation classes only.
export function HeroScreenshot({
  eyebrow, heading, subheading, primaryLabel, primaryHref,
  secondaryLabel, secondaryHref, imageSrc, imageAlt = '', _editable,
}: HeroScreenshotProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="surface-glow overflow-hidden bg-background pt-20 sm:pt-28">
      <div className="reveal-stagger mx-auto max-w-3xl px-6 text-center">
        {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
        <h1 className="text-display text-balance">
          <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Heading'}</span>
        </h1>
        {subheading && <p className="text-lead mx-auto mt-6 max-w-2xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {primaryLabel && (
            <a
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              className="hover-lift inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          )}
          {secondaryLabel && (
            <a
              href={secondaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.secondaryHref' } : {})}
              className="inline-flex items-center justify-center rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              <span {...editable('props.secondaryLabel')}>{secondaryLabel}</span>
            </a>
          )}
        </div>
      </div>
      <div className="reveal mx-auto mt-16 max-w-5xl px-6 pb-20 sm:pb-28">
        <div className="shadow-strong overflow-hidden rounded-2xl border border-border bg-background">
          <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-400" />
            <span className="size-2.5 rounded-full bg-yellow-400" />
            <span className="size-2.5 rounded-full bg-green-400" />
            <span className="ml-3 h-4 flex-1 max-w-xs rounded-full bg-border/60" />
          </div>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div
              {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
              className="aspect-[16/9] w-full bg-gradient-to-br from-primary/10 to-primary-light/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}
