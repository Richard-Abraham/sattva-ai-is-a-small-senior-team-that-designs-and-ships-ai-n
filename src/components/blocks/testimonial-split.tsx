interface Testimonial {
  quote?: string;
  authorName?: string;
  authorRole?: string;
}

interface TestimonialSplitProps {
  heading?: string;
  testimonials?: Testimonial[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Two-column testimonials: a sticky heading on the left, a stack of quote cards on the right. Bold,
// Lovable-style — gradient heading, elevated cards, staggered reveal. Tokens + plan-113 classes only.
export function TestimonialSplit({ heading, testimonials = [], _editable }: TestimonialSplitProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-24 lg:self-start">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
        </div>
        <div className="reveal-stagger space-y-6" {...(_editable ? { 'data-edit-list': 'props.testimonials' } : {})}>
          {testimonials.map((t, i) => (
            <figure key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="rounded-2xl border border-border bg-background p-7 shadow-soft">
              {t.quote && <blockquote className="text-lg leading-relaxed text-foreground/80">“{t.quote}”</blockquote>}
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-foreground" {...editable(`props.testimonials.${i}.authorName`)}>{t.authorName}</span>
                {t.authorRole && <span className="block text-foreground/50" {...editable(`props.testimonials.${i}.authorRole`)}>{t.authorRole}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
