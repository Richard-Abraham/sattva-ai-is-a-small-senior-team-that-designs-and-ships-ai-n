interface Testimonial {
  quote?: string;
  authorName?: string;
  authorRole?: string;
}

interface TestimonialCardsProps {
  heading?: string;
  testimonials?: Testimonial[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Testimonial card grid. Bold, Lovable-style — gradient heading, elevated cards with hover lift,
// staggered reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function TestimonialCards({ heading, testimonials = [], _editable }: TestimonialCardsProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.testimonials' } : {})}>
          {testimonials.map((t, i) => (
            <figure key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft">
              {t.quote && <blockquote className="flex-1 leading-relaxed text-foreground/80">“{t.quote}”</blockquote>}
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
