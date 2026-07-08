import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqItem {
  question?: string;
  answer?: string;
}

interface FaqContactProps {
  heading?: string;
  subheading?: string;
  items?: FaqItem[];
  contactHeading?: string;
  contactText?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Two-column FAQ: sticky intro + contact card on the left ("still have questions?"), an
// expandable question list on the right (native <details>, no JS). Tokens + plan-113
// foundation classes only.
export function FaqContact({
  heading, subheading, items = [], contactHeading, contactText, primaryLabel, primaryHref, _editable,
}: FaqContactProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="reveal-stagger lg:sticky lg:top-24 lg:self-start">
          {heading && (
            <h2 className="text-h2 text-balance">
              <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
            </h2>
          )}
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
          <div className="mt-8 rounded-2xl border border-border bg-muted p-6">
            <MessageCircle aria-hidden="true" className="size-6 text-primary" />
            {contactHeading && (
              <h3 className="mt-3 text-base font-semibold text-foreground" {...editable('props.contactHeading')}>{contactHeading}</h3>
            )}
            {contactText && (
              <p className="mt-1.5 text-sm text-foreground/60" {...editable('props.contactText')}>{contactText}</p>
            )}
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift mt-5 inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-primary-light px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              </a>
            )}
          </div>
        </div>
        <div className="reveal-stagger space-y-3" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
          {items.map((item, i) => (
            <details
              key={i}
              {...(_editable ? { 'data-edit-item': '' } : {})}
              className="group rounded-2xl border border-border bg-background px-6 py-4 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground">
                <span {...editable(`props.items.${i}.question`)}>{item.question}</span>
                <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              {item.answer && (
                <p className="mt-3 text-sm leading-relaxed text-foreground/70" {...editable(`props.items.${i}.answer`)}>{item.answer}</p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
