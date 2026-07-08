'use client';

import { useState } from 'react';
import { Calculator, CheckCircle2, MapPin } from 'lucide-react';

interface FeatureToolGridProps {
  calcTitle?: string;
  calcDescription?: string;
  calcCoverageRate?: number;
  findTitle?: string;
  findDescription?: string;
  badgeTitle?: string;
  badgeDescription?: string;
  badgeFeatures?: string[];
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Three-card utility row: a live coverage calculator (real `useState` — length x width / coverage
// rate = litres needed, no dependency on a backend), a stockist-finder preview, and a trade-program
// perk card with a CTA. Adapted from the "heritage/woodcare" Stitch mockup's "Volume Calculator"
// row (stitch-mockup, designer-mockup license). The calculator is wired to a real computation
// (docs/block-adaptation.md's "plain HTML + react state" rule, same pattern as `pricing-toggle`);
// the source mockup shipped it as a static "Result: 0.0 Litres" placeholder — recorded here so a
// future maintainer knows this is deliberately live, not a broken demo. Tokens + plan-113
// foundation classes only (emit-safe).
export function FeatureToolGrid({
  calcTitle, calcDescription, calcCoverageRate = 12, findTitle, findDescription,
  badgeTitle, badgeDescription, badgeFeatures = [], primaryLabel, primaryHref, _editable,
}: FeatureToolGridProps) {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const litres = (() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!Number.isFinite(l) || !Number.isFinite(w) || l <= 0 || w <= 0 || calcCoverageRate <= 0) return 0;
    return (l * w) / calcCoverageRate;
  })();
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-stagger grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-soft">
            <span className="flex size-14 items-center justify-center rounded-full bg-muted text-primary">
              <Calculator aria-hidden="true" className="size-6" />
            </span>
            {calcTitle && <h3 className="mt-5 text-xl font-semibold text-foreground" {...editable('props.calcTitle')}>{calcTitle}</h3>}
            {calcDescription && <p className="mt-2 text-sm text-foreground/60" {...editable('props.calcDescription')}>{calcDescription}</p>}
            <div className="mt-5 w-full space-y-3">
              <div className="flex gap-2">
                <input
                  type="number" min="0" inputMode="decimal" placeholder="Length (m)"
                  value={length} onChange={(e) => setLength(e.target.value)}
                  aria-label="Length in metres"
                  className="h-10 w-1/2 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  type="number" min="0" inputMode="decimal" placeholder="Width (m)"
                  value={width} onChange={(e) => setWidth(e.target.value)}
                  aria-label="Width in metres"
                  className="h-10 w-1/2 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div className="rounded-lg border border-dashed border-border bg-muted p-3 text-sm font-semibold text-primary">
                Result: {litres.toFixed(1)} Litres
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center shadow-soft">
            <span className="flex size-14 items-center justify-center rounded-full bg-muted text-primary">
              <MapPin aria-hidden="true" className="size-6" />
            </span>
            {findTitle && <h3 className="mt-5 text-xl font-semibold text-foreground" {...editable('props.findTitle')}>{findTitle}</h3>}
            {findDescription && <p className="mt-2 text-sm text-foreground/60" {...editable('props.findDescription')}>{findDescription}</p>}
            <input
              type="text" placeholder="Enter postcode..."
              aria-label="Postcode"
              className="mt-5 h-10 w-full rounded-full border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="flex flex-col items-center rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent p-8 text-center shadow-glow">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
              <CheckCircle2 aria-hidden="true" className="size-6" />
            </span>
            {badgeTitle && <h3 className="mt-5 text-xl font-semibold text-foreground" {...editable('props.badgeTitle')}>{badgeTitle}</h3>}
            {badgeDescription && <p className="mt-2 text-sm text-foreground/60" {...editable('props.badgeDescription')}>{badgeDescription}</p>}
            {badgeFeatures.length > 0 && (
              <ul className="mt-5 flex w-full flex-col gap-2 text-left text-sm text-foreground/80" {...(_editable ? { 'data-edit-list': 'props.badgeFeatures' } : {})}>
                {badgeFeatures.map((feature, i) => (
                  <li key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
                    <span {...editable(`props.badgeFeatures.${i}`)}>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
