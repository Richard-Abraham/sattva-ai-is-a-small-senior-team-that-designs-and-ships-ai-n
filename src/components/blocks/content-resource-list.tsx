import { Download, FileText } from 'lucide-react';

interface ResourceItem {
  tag?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}

interface ContentResourceListProps {
  heading?: string;
  items?: ResourceItem[];
  noteHeading?: string;
  noteText?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Document/resource list beside a sticky CTA aside — each row has a document icon, a small tag,
// a title, a description and a download-style link; the aside is a compact contact/CTA card.
// Adapted from the "heritage/woodcare" Stitch mockup's "Technical Resource Center" section
// (stitch-mockup, designer-mockup license). Tokens + plan-113 foundation classes only (emit-safe).
export function ContentResourceList({ heading, items = [], noteHeading, noteText, primaryLabel, primaryHref, _editable }: ContentResourceListProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:gap-14">
        <div>
          {heading && (
            <h2 className="reveal text-h2 mb-8 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          <div className="reveal-stagger flex flex-col gap-4" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
            {items.map((item, i) => (
              <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift flex flex-col gap-4 rounded-2xl border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    {item.tag && <p className="text-[11px] font-semibold uppercase tracking-wider text-primary" {...editable(`props.items.${i}.tag`)}>{item.tag}</p>}
                    <h3 className="mt-0.5 text-base font-semibold text-foreground" {...editable(`props.items.${i}.title`)}>{item.title}</h3>
                    {item.description && <p className="mt-1 text-sm text-foreground/60" {...editable(`props.items.${i}.description`)}>{item.description}</p>}
                  </div>
                </div>
                {item.actionLabel && (
                  <a
                    href={item.actionHref ?? '#'}
                    {...(_editable ? { 'data-edit-link': `props.items.${i}.actionHref` } : {})}
                    className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary hover:underline sm:self-center"
                  >
                    <span {...editable(`props.items.${i}.actionLabel`)}>{item.actionLabel}</span>
                    <Download aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <aside className="reveal shadow-glow h-fit rounded-2xl bg-gradient-to-br from-primary to-primary-light p-8 text-white lg:sticky lg:top-24">
          {noteHeading && <h3 className="text-lg font-semibold" {...editable('props.noteHeading')}>{noteHeading}</h3>}
          {noteText && <p className="mt-2 text-sm text-white/80" {...editable('props.noteText')}>{noteText}</p>}
          {primaryLabel && (
            <a
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              className="hover-lift mt-6 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-soft"
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
