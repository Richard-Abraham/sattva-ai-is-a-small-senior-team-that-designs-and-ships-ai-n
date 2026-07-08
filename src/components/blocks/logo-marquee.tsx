interface LogoItem {
  name?: string;
  imageSrc?: string;
}

interface LogoMarqueeProps {
  heading?: string;
  logos?: LogoItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Infinite-scroll logo marquee (pure CSS keyframes, JS-free; the track is duplicated once for a
// seamless loop, pausing on hover and disabled under reduced motion). Logos render as images
// when a URL is set, else as styled wordmarks. Tokens + plan-113 classes; the marquee keyframes
// are scoped inline so the block stays self-contained/emit-safe.
export function LogoMarquee({ heading, logos = [], _editable }: LogoMarqueeProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="logo-marquee-track flex shrink-0 items-center gap-14 pr-14"
      {...(!ariaHidden && _editable ? { 'data-edit-list': 'props.logos' } : {})}
    >
      {logos.map((logo, i) => (
        <span
          key={i}
          {...(!ariaHidden && _editable ? { 'data-edit-item': '' } : {})}
          className="flex items-center opacity-60 grayscale transition-opacity hover:opacity-100"
        >
          {logo.imageSrc ? (
            <img loading="lazy"
              src={logo.imageSrc}
              alt={logo.name ?? ''}
              {...(!ariaHidden && _editable ? { 'data-edit-img': `props.logos.${i}.imageSrc` } : {})}
              className="h-8 w-auto object-contain"
            />
          ) : (
            <span
              className="whitespace-nowrap text-lg font-bold tracking-tight text-foreground/70"
              {...(!ariaHidden ? editable(`props.logos.${i}.name`) : {})}
            >
              {logo.name}
            </span>
          )}
        </span>
      ))}
    </div>
  );

  return (
    <section className="bg-background py-12 sm:py-16">
      <style>{`
        @keyframes logo-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @media (prefers-reduced-motion: no-preference) {
          .logo-marquee-track { animation: logo-marquee-scroll 30s linear infinite; }
          .logo-marquee-viewport:hover .logo-marquee-track { animation-play-state: paused; }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <p className="reveal mb-8 text-center text-sm font-medium text-foreground/50" {...editable('props.heading')}>
            {heading}
          </p>
        )}
        <div className="logo-marquee-viewport flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
