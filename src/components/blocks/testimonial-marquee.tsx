interface MarqueeQuote {
  quote?: string;
  authorName?: string;
  authorRole?: string;
}

interface TestimonialMarqueeProps {
  heading?: string;
  items?: MarqueeQuote[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Horizontally scrolling wall of short quotes (pure CSS marquee, duplicated track for a seamless
// loop; paused on hover, disabled under reduced motion). Tokens + plan-113 classes; keyframes
// scoped inline so the block stays self-contained/emit-safe.
export function TestimonialMarquee({ heading, items = [], _editable }: TestimonialMarqueeProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  const track = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="testimonial-marquee-track flex shrink-0 items-stretch gap-5 pr-5"
      {...(!ariaHidden && _editable ? { 'data-edit-list': 'props.items' } : {})}
    >
      {items.map((item, i) => (
        <figure
          key={i}
          {...(!ariaHidden && _editable ? { 'data-edit-item': '' } : {})}
          className="w-80 shrink-0 rounded-2xl border border-border bg-background p-6 shadow-soft"
        >
          <blockquote className="text-sm leading-relaxed text-foreground/80">
            <span {...(!ariaHidden ? editable(`props.items.${i}.quote`) : {})}>“{item.quote}”</span>
          </blockquote>
          <figcaption className="mt-4 text-xs">
            {item.authorName && (
              <span className="font-semibold text-foreground" {...(!ariaHidden ? editable(`props.items.${i}.authorName`) : {})}>
                {item.authorName}
              </span>
            )}
            {item.authorRole && (
              <span className="text-foreground/50" {...(!ariaHidden ? editable(`props.items.${i}.authorRole`) : {})}>
                {' '}· {item.authorRole}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <style>{`
        @keyframes testimonial-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @media (prefers-reduced-motion: no-preference) {
          .testimonial-marquee-track { animation: testimonial-marquee-scroll 40s linear infinite; }
          .testimonial-marquee-viewport:hover .testimonial-marquee-track { animation-play-state: paused; }
        }
      `}</style>
      {heading && (
        <h2 className="reveal text-h2 text-gradient mb-12 px-6 text-balance text-center" {...editable('props.heading')}>
          {heading}
        </h2>
      )}
      <div className="testimonial-marquee-viewport flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {track(false)}
        {track(true)}
      </div>
    </section>
  );
}
