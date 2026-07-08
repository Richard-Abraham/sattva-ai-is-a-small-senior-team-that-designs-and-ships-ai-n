interface FeatureTrioItem {
  title?: string;
  description?: string;
}

interface FeatureTrioProps {
  heading?: string;
  items?: FeatureTrioItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Three-column feature grid. Bold, Lovable-style — gradient heading, elevated cards with hover lift,
// staggered scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function FeatureTrio({ heading, items = [], _editable }: FeatureTrioProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift rounded-2xl border border-border bg-background p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
              {item.description && <p className="mt-3 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
