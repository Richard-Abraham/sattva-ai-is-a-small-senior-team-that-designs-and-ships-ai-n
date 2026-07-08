import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactDetail {
  icon?: 'phone' | 'email' | 'address';
  label?: string;
  value?: string;
}

interface ContactSplitProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  details?: ContactDetail[];
  hoursLabel?: string;
  hoursValue?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

const ICONS = { phone: Phone, email: Mail, address: MapPin } as const;

// Contact page centerpiece: a static intake-form preview beside a card of contact details
// (phone/email/address rows) plus an hours line. Unlike `cta-consultation` (two generic intake
// fields only, no address/hours info) and `contact-banner` (a compact 3-way strip with no form
// at all), this is the full "get in touch" page section pairing a form with a static info card.
// Plain HTML inputs — a visual only, not a wired form; deployed sites swap in their own handler.
// Tokens + plan-113 foundation classes only (emit-safe).
export function ContactSplit({
  eyebrow, heading, subheading, details = [], hoursLabel, hoursValue, primaryLabel, primaryHref, _editable,
}: ContactSplitProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="reveal-stagger">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Get in touch'}</span>
          </h2>
          {subheading && <p className="text-lead mt-4 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <input type="email" placeholder="Email address" className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <textarea placeholder="How can we help?" rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              </a>
            )}
          </form>
        </div>
        <div className="reveal rounded-3xl border border-border bg-muted p-8 shadow-soft lg:p-10">
          <ul className="flex flex-col gap-6" {...(_editable ? { 'data-edit-list': 'props.details' } : {})}>
            {details.map((detail, i) => {
              const Icon = ICONS[detail.icon ?? 'phone'];
              return (
                <li key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
                    <Icon aria-hidden="true" className="size-4.5" />
                  </span>
                  <div>
                    {detail.label && <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50" {...editable(`props.details.${i}.label`)}>{detail.label}</p>}
                    <p className="mt-1 text-sm font-medium text-foreground" {...editable(`props.details.${i}.value`)}>{detail.value}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          {(hoursLabel || hoursValue) && (
            <div className="mt-8 border-t border-border pt-6">
              {hoursLabel && <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50" {...editable('props.hoursLabel')}>{hoursLabel}</p>}
              {hoursValue && <p className="mt-1 text-sm text-foreground/70" {...editable('props.hoursValue')}>{hoursValue}</p>}
            </div>
          )}
          <div className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-primary-light/10" />
        </div>
      </div>
    </section>
  );
}
