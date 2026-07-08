interface FeatureBentoItem {
  title?: string;
  description?: string;
}

interface FeatureBentoProps {
  heading?: string;
  items?: FeatureBentoItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Bento-style feature grid: the first item spans larger for visual rhythm. Bold, Lovable-style —
// gradient heading, elevated cards with hover lift, staggered reveal. Tokens + plan-113 classes only.
export function FeatureBento({ heading, items = [], _editable }: FeatureBentoProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid auto-rows-[minmax(0,1fr)] gap-5 sm:grid-cols-2 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i}
              {...(_editable ? { 'data-edit-item': '' } : {})}
              className={`hover-lift flex flex-col justify-end rounded-2xl border border-border bg-muted p-7 shadow-soft ${i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}`}
            >
              <h3 className={`font-semibold text-foreground ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{item.title}</h3>
              {item.description && <p className="mt-3 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
