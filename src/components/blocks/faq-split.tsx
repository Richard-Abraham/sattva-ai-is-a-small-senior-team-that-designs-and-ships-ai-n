import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question?: string;
  answer?: string;
}

interface FaqSplitProps {
  heading?: string;
  subheading?: string;
  items?: FaqItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Two-column FAQ: a sticky intro on the left, accordion on the right (native <details>, no JS).
// Bold, Lovable-style — gradient heading, carded rows with rotating chevron, reveal. Plan-113 classes.
export function FaqSplit({ heading, subheading, items = [], _editable }: FaqSplitProps) {
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
          {subheading && <p className="text-lead mt-4 text-foreground/60" {...editable('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger space-y-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <details key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="group rounded-2xl border border-border bg-background px-6 py-4 shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                {item.question}
                <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              {item.answer && <p className="mt-3 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.answer`)}>{item.answer}</p>}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
