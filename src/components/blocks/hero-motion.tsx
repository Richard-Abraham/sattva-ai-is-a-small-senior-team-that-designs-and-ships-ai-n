'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroMotionProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Cinematic full-height hero (inspired by a real user's motion redesign of an exported site):
// slow-parallax background image (CSS scroll-driven, supports-gated), word-by-word headline
// reveal, floating ambient gradient orbs, a magnetic CTA (pointer-tracking, JS-light) and a
// fading scroll cue. Everything degrades gracefully and respects prefers-reduced-motion.
// Dependency-free: react + lucide + scoped CSS only (emit-safe).
export function HeroMotion({ eyebrow, heading, subheading, primaryLabel, primaryHref, imageSrc, imageAlt = '', _editable }: HeroMotionProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Magnetic CTA: the button leans toward the pointer. No-ops under reduced motion.
  function onCtaMove(e: React.PointerEvent) {
    const el = ctaRef.current;
    if (!el || (typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 10;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onCtaLeave() {
    if (ctaRef.current) ctaRef.current.style.transform = '';
  }

  const words = (heading ?? 'Heading').split(/\s+/).filter(Boolean);

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-background">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes hero-motion-word { from { opacity: 0; transform: translateY(0.6em); } to { opacity: 1; transform: none; } }
          .hero-motion-word { display: inline-block; animation: hero-motion-word 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
          @keyframes hero-motion-fade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
          .hero-motion-fade { animation: hero-motion-fade 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
          @keyframes hero-motion-float { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(4%, -6%) scale(1.08); } }
          .hero-motion-orb { animation: hero-motion-float 14s ease-in-out infinite; }
          .hero-motion-orb-2 { animation-duration: 19s; animation-direction: reverse; }
          @keyframes hero-motion-cue { 0%, 100% { opacity: 0.5; transform: translateY(0); } 50% { opacity: 0.1; transform: translateY(8px); } }
          .hero-motion-cue { animation: hero-motion-cue 2.2s ease-in-out infinite; }
          @supports (animation-timeline: scroll()) {
            @keyframes hero-motion-parallax { to { transform: translateY(12%) scale(1.1); } }
            .hero-motion-bg { animation: hero-motion-parallax linear both; animation-timeline: scroll(); animation-range: 0 100vh; }
          }
        }
      `}</style>

      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
          className="hero-motion-bg absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
        />
      ) : (
        <div
          {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
          className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/15 via-background to-primary-light/10"
        />
      )}
      {imageSrc && <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/45 to-black/25" />}

      {/* Ambient orbs */}
      <div aria-hidden="true" className="hero-motion-orb pointer-events-none absolute -left-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden="true" className="hero-motion-orb hero-motion-orb-2 pointer-events-none absolute -right-24 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-primary-light/20 blur-3xl" />

      <div className="mx-auto w-full max-w-4xl px-6 py-24 text-center">
        {eyebrow && (
          <span className={`hero-motion-fade ${imageSrc ? 'inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 backdrop-blur' : 'eyebrow'}`} {...editable('props.eyebrow')}>
            {eyebrow}
          </span>
        )}
        <h1
          className={`text-display mt-5 text-balance ${imageSrc ? 'text-white' : ''}`}
          {...editable('props.heading')}
        >
          {words.map((word, i) => (
            <span key={`${word}-${i}`} className="hero-motion-word" style={{ animationDelay: `${0.08 * i}s` }}>
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        {subheading && (
          <p
            className={`text-lead hero-motion-fade mx-auto mt-6 max-w-2xl ${imageSrc ? 'text-white/85' : 'text-foreground/70'}`}
            style={{ animationDelay: `${0.08 * words.length + 0.1}s` }}
            {...editable('props.subheading')}
          >
            {subheading}
          </p>
        )}
        {primaryLabel && (
          <div className="hero-motion-fade mt-10 flex justify-center" style={{ animationDelay: `${0.08 * words.length + 0.25}s` }}>
            <a
              ref={ctaRef}
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              onPointerMove={onCtaMove}
              onPointerLeave={onCtaLeave}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-light px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-200"
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        )}
      </div>

      <div aria-hidden="true" className="hero-motion-cue absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className={`h-9 w-5 rounded-full border-2 ${imageSrc ? 'border-white/50' : 'border-foreground/30'} p-1`}>
          <div className={`mx-auto h-2 w-1 rounded-full ${imageSrc ? 'bg-white/70' : 'bg-foreground/40'}`} />
        </div>
      </div>
    </section>
  );
}
