import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
  className?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Card CTA with a feature checklist. Bold, Lovable-style — glowing card, gradient title + CTA,
// gradient check chips, scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function Cta4({
  title = 'Call to action',
  description = 'Add a short, compelling line that drives the visitor to act.',
  buttonText = 'Get started',
  buttonUrl = '#',
  items = [],
  className, _editable }: Cta4Props) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className={cn('py-16 sm:py-24 lg:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto w-full max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-muted px-6 py-10 shadow-glow md:flex-row md:items-center lg:px-16 lg:py-14">
            <div className="md:w-1/2">
              <h2 className="text-h2 mb-2 text-balance">
                <span className="text-gradient" {...editable('props.title')}>{title}</span>
              </h2>
              {description && <p className="text-foreground/70" {...editable('props.description')}>{description}</p>}
              {buttonText && (
                <a
                  href={buttonUrl}
                  className="hover-lift mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  {buttonText}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              )}
            </div>
            {items.length > 0 && (
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-3 text-sm font-medium text-foreground" {...(_editable ? { 'data-edit-list': 'props.items' } : {})}>
                  {items.map((item, idx) => (
                    <li className="flex items-center gap-3" key={idx} {...(_editable ? { 'data-edit-item': '' } : {})}>
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
                        <Check aria-hidden="true" className="size-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
