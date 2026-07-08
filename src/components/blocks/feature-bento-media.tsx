interface BentoMediaItem {
  icon?: string;
  title?: string;
  description?: string;
}

interface FeatureBentoMediaProps {
  heading?: string;
  imageSrc?: string;
  imageAlt?: string;
  featuredLabel?: string;
  featuredTitle?: string;
  featuredDescription?: string;
  primaryLabel?: string;
  primaryHref?: string;
  items?: BentoMediaItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Media-led bento grid: a large photo tile with an overlaid label, title, copy and CTA, beside
// smaller icon+title support tiles. Adapted from the "heritage/woodcare" Stitch mockup's
// "Woodcare Intelligence" section (stitch-mockup, designer-mockup license) — distinct from
// `feature-bento` (text-only tiles, no imagery/CTA). Tokens + plan-113 foundation classes only
// (emit-safe).
export function FeatureBentoMedia({
  heading, imageSrc, imageAlt = '', featuredLabel, featuredTitle, featuredDescription, primaryLabel, primaryHref, items = [], _editable,
}: FeatureBentoMediaProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
          <div className="relative flex flex-col justify-end overflow-hidden rounded-2xl p-10 text-white shadow-glow md:col-span-2 md:row-span-2">
            {imageSrc ? (
              <img loading="lazy" src={imageSrc} alt={imageAlt} {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})} className="absolute inset-0 -z-10 h-full w-full object-cover" />
            ) : (
              <div {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})} className="absolute inset-0 -z-10 h-full w-full bg-primary" />
            )}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10" />
            {featuredLabel && <span className="text-xs font-semibold uppercase tracking-wider text-white/70" {...editable('props.featuredLabel')}>{featuredLabel}</span>}
            {featuredTitle && <h3 className="mt-2 text-2xl font-semibold text-balance" {...editable('props.featuredTitle')}>{featuredTitle}</h3>}
            {featuredDescription && <p className="mt-3 max-w-sm text-white/80" {...editable('props.featuredDescription')}>{featuredDescription}</p>}
            {primaryLabel && (
              <div className="mt-6">
                <a
                  href={primaryHref ?? '#'}
                  {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                  className="hover-lift inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft"
                >
                  <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
                </a>
              </div>
            )}
          </div>
          <div className="contents" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
            {items.map((item, i) => (
              <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift flex flex-col justify-between rounded-2xl border border-border bg-background p-7 shadow-soft">
                {item.icon && (
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-lg text-white shadow-glow" {...editable(`props.items.${i}.icon`)}>
                    {item.icon}
                  </span>
                )}
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h4>
                  {item.description && <p className="mt-1.5 text-sm text-foreground/60" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
