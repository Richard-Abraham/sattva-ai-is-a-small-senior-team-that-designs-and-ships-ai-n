'use client';

import { useEffect, useRef, useState } from 'react';

interface BandStat {
  value?: string;
  label?: string;
}

interface StatsBandProps {
  heading?: string;
  items?: BandStat[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Count-up number: parses the leading number from values like "10k+", "99.9%", "4.9/5" and
// animates 0 → N when the band scrolls into view. Skipped under reduced motion, in edit mode
// (contentEditable and rAF updates fight), and where IntersectionObserver is unavailable.
function CountUpValue({ value, editableAttrs }: { value: string; editableAttrs: Record<string, unknown> }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';
  const decimals = match && match[1].includes('.') ? match[1].split('.')[1].length : 0;
  const isEditing = Object.keys(editableAttrs).length > 0;

  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (isEditing || target === null) return;
    if (typeof IntersectionObserver === 'undefined') return;
    if (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, isEditing]);

  return (
    <p ref={ref} className="text-4xl font-bold text-white sm:text-5xl" {...editableAttrs}>
      {isEditing ? value : display}
    </p>
  );
}

// Full-width metric band on a primary gradient: an optional lead-in line and a row of big
// white numbers (counting up on scroll into view) with small labels. Tokens + plan-113 only.
export function StatsBand({ heading, items = [], _editable }: StatsBandProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {heading && (
          <p className="reveal mb-10 text-center text-sm font-semibold uppercase tracking-wider text-white/80" {...editable('props.heading')}>
            {heading}
          </p>
        )}
        <div
          className="reveal-stagger grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-4"
          {...(_editable ? { 'data-edit-list': 'props.items' } : {})}
        >
          {items.map((stat, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})}>
              <CountUpValue value={stat.value ?? ''} editableAttrs={editable(`props.items.${i}.value`)} />
              {stat.label && (
                <p className="mt-2 text-sm text-white/75" {...editable(`props.items.${i}.label`)}>{stat.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
