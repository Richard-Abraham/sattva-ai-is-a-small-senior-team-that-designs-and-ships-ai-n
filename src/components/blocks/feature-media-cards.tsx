import { CheckCircle2 } from 'lucide-react';

interface MediaCardItem {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

interface FeatureMediaCardsProps {
  heading?: string;
  subheading?: string;
  items?: MediaCardItem[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Three-column "how to choose" cards: a photo, a title, a short recommendation and a small
// checklist of tags. Adapted from the "heritage/woodcare" Stitch mockup's "Surface Selection
// Guide" section (stitch-mockup, designer-mockup license) — distinct from `feature-trio`
// (text-only, no imagery/checklist). Tokens + plan-113 foundation classes only (emit-safe).
export function FeatureMediaCards({ heading, subheading, items = [], _editable }: FeatureMediaCardsProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-muted py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-stagger mx-auto mb-14 max-w-2xl text-center">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger grid gap-6 lg:grid-cols-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              <div className="h-40 bg-muted">
                {item.imageSrc ? (
                  <img loading="lazy" src={item.imageSrc} alt={item.imageAlt ?? ''} {...(_editable ? { 'data-edit-img': `props.items.${i}.imageSrc` } : {})} className="h-full w-full object-cover" />
                ) : (
                  <div {...(_editable ? { 'data-edit-img': `props.items.${i}.imageSrc` } : {})} className="h-full w-full bg-gradient-to-br from-primary/10 to-primary-light/10" />
                )}
              </div>
              <div className="p-7">
                <h3 className="text-lg font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
                {item.description && <p className="mt-2 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
                {(item.tags ?? []).length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2 text-xs font-medium uppercase tracking-wide text-primary">
                    {(item.tags ?? []).map((tag, ti) => (
                      <li key={ti} className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="size-3.5 shrink-0" />
                        <span {...editable(`props.items.${i}.tags.${ti}`)}>{tag}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
