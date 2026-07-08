/**
 * Block renderer for the generated site. First-class sections render inline; catalog blocks
 * (shared.custom-block) render their real component via CUSTOM_MAP.
 */
import type { JSX } from 'react';
import { HeroScreenshot } from '@/components/blocks/hero-screenshot';
import { LogoMarquee } from '@/components/blocks/logo-marquee';
import { FeatureBentoMedia } from '@/components/blocks/feature-bento-media';
import { FeatureMediaCards } from '@/components/blocks/feature-media-cards';
import { FeatureToolGrid } from '@/components/blocks/feature-tool-grid';
import { TeamCards } from '@/components/blocks/team-cards';
import { TestimonialMarquee } from '@/components/blocks/testimonial-marquee';
import { ContactSplit } from '@/components/blocks/contact-split';
import { HeroImageBg } from '@/components/blocks/hero-image-bg';
import { FeatureBento } from '@/components/blocks/feature-bento';
import { MenuPriceList } from '@/components/blocks/menu-price-list';
import { TestimonialSplit } from '@/components/blocks/testimonial-split';
import { FaqSplit } from '@/components/blocks/faq-split';
import { CtaConsultation } from '@/components/blocks/cta-consultation';
import { HeroMotion } from '@/components/blocks/hero-motion';
import { StatsBand } from '@/components/blocks/stats-band';
import { FeatureTrio } from '@/components/blocks/feature-trio';
import { ContentResourceList } from '@/components/blocks/content-resource-list';
import { TestimonialCards } from '@/components/blocks/testimonial-cards';
import { FaqContact } from '@/components/blocks/faq-contact';
import { Cta4 } from '@/components/blocks/cta4';
import { TeamPhotos } from '@/components/blocks/team-photos';
import { ContentStory } from '@/components/blocks/content-story';
import { StatsShowcase } from '@/components/blocks/stats-showcase';
import { HeroSplit } from '@/components/blocks/hero-split';
import { CtaSplit } from '@/components/blocks/cta-split';
import { ContentCentered } from '@/components/blocks/content-centered';

type Block = Record<string, unknown>;

function HeroSection({ block }: { block: Block }) {
  const links = (block.links as { text?: string; url?: string; type?: string }[] | undefined) ?? [];
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {Boolean(block.eyebrow) && (
          <p className="mb-4 text-sm font-medium text-primary">{block.eyebrow as string}</p>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {(block.heading as string) || 'Welcome'}
        </h1>
        {Boolean(block.subheading) && (
          <p className="mt-4 text-lg text-foreground/70">{block.subheading as string}</p>
        )}
        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link, i) => (
              <a key={i} href={link.url ?? '#'} className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function CtaSection({ block }: { block: Block }) {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white">{(block.title as string) || ''}</h2>
        {Boolean(block.description) && (<p className="mt-4 text-white/80">{block.description as string}</p>)}
        {Boolean(block.buttonText) && (
          <a href={(block.buttonUrl as string) ?? '#'} className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition-colors">
            {block.buttonText as string}
          </a>
        )}
      </div>
    </section>
  );
}

function FaqSection({ block }: { block: Block }) {
  const items = (block.items as { question?: string; answer?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-foreground">
          {(block.heading as string) || (block.title as string) || 'FAQ'}
        </h2>
        <div className="divide-y divide-border">
          {items.map((q, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-medium text-foreground">{q.question}</summary>
              <p className="mt-3 text-sm text-foreground/70">{q.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardGridSection({ block }: { block: Block }) {
  const cards = (block.cards as { title?: string; description?: string }[] | undefined) ?? [];
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {Boolean(block.title) && (<h2 className="mb-3 text-3xl font-bold text-foreground">{block.title as string}</h2>)}
        {Boolean(block.description) && (<p className="mb-10 text-foreground/70">{block.description as string}</p>)}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
              {card.description && (<p className="mt-2 text-sm text-foreground/70">{card.description}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RichTextSection({ block }: { block: Block }) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6 prose prose-neutral">
        {Boolean(block.body) && <div dangerouslySetInnerHTML={{ __html: block.body as string }} />}
      </div>
    </section>
  );
}

function StatsSection({ block }: { block: Block }) {
  const items = (block.stats as { value?: string; label?: string }[] | undefined) ?? [];
  return (
    <section className="bg-primary/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {Boolean(block.title) && (<h2 className="mb-10 text-center text-3xl font-bold text-foreground">{block.title as string}</h2>)}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ block }: { block: Block }) {
  const events = (block.events as { date?: string; title?: string; description?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        {Boolean(block.heading) && (
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">{block.heading as string}</h2>
        )}
        <ol className="relative flex flex-col gap-10 border-l-2 border-primary/20 pl-8">
          {events.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
              {e.date && <span className="text-xs font-semibold uppercase tracking-wider text-primary">{e.date}</span>}
              {e.title && <h3 className="mt-1 text-lg font-semibold text-foreground">{e.title}</h3>}
              {e.description && <p className="mt-2 text-sm leading-relaxed text-foreground/70">{e.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NewsletterSection({ block }: { block: Block }) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl border border-border bg-muted/40 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{(block.heading as string) || 'Stay in the loop'}</h2>
          {Boolean(block.text) && <p className="mx-auto mt-3 max-w-xl text-foreground/70">{block.text as string}</p>}
          <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row" action="#" method="post">
            <input
              type="email"
              required
              placeholder="you@example.com"
              aria-label="Email address"
              className="h-12 flex-1 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-foreground/40"
            />
            <button type="submit" className="h-12 rounded-xl bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CommunityLinksSection({ block }: { block: Block }) {
  const links = (block.links as { label?: string; href?: string; url?: string }[] | undefined) ?? [];
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {Boolean(block.heading) && <h2 className="mb-8 text-3xl font-bold text-foreground">{block.heading as string}</h2>}
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href ?? l.url ?? '#'}
              className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection({ block }: { block: Block }) {
  const url = (block.videoUrl as string) || '';
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/);
  const embed = yt ? `https://www.youtube-nocookie.com/embed/${yt[1]}` : url;
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {Boolean(block.heading) && (
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">{block.heading as string}</h2>
        )}
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
          {embed ? (
            <iframe
              src={embed}
              title={(block.heading as string) || 'Video'}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-white/50">Video coming soon</div>
          )}
        </div>
      </div>
    </section>
  );
}

function GenericSection({ block }: { block: Block }) {
  const component = block.__component as string;
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-4xl px-6">
        {Boolean(block.title) && <h2 className="mb-4 text-3xl font-bold text-foreground">{block.title as string}</h2>}
        {Boolean(block.heading) && <h2 className="mb-4 text-3xl font-bold text-foreground">{block.heading as string}</h2>}
        {Boolean(block.description) && <p className="text-foreground/70">{block.description as string}</p>}
        {Boolean(block.body) && <p className="text-foreground/70">{block.body as string}</p>}
        <p className="mt-4 text-xs text-foreground/30">{component}</p>
      </div>
    </section>
  );
}

const BLOCK_MAP: Record<string, (props: { block: Block }) => JSX.Element> = {
  'shared.hero':            HeroSection,
  'shared.cta':             CtaSection,
  'shared.faq':             FaqSection,
  'shared.card-grid':       CardGridSection,
  'shared.rich-text':       RichTextSection,
  'shared.stats':           StatsSection,
  'shared.timeline':        TimelineSection,
  'shared.newsletter':      NewsletterSection,
  'shared.community-links': CommunityLinksSection,
  'shared.video':           VideoSection,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CUSTOM_MAP: Record<string, (props: any) => JSX.Element> = {
  "hero-screenshot": HeroScreenshot,
  "logo-marquee": LogoMarquee,
  "feature-bento-media": FeatureBentoMedia,
  "feature-media-cards": FeatureMediaCards,
  "feature-tool-grid": FeatureToolGrid,
  "team-cards": TeamCards,
  "testimonial-marquee": TestimonialMarquee,
  "contact-split": ContactSplit,
  "hero-image-bg": HeroImageBg,
  "feature-bento": FeatureBento,
  "menu-price-list": MenuPriceList,
  "testimonial-split": TestimonialSplit,
  "faq-split": FaqSplit,
  "cta-consultation": CtaConsultation,
  "hero-motion": HeroMotion,
  "stats-band": StatsBand,
  "feature-trio": FeatureTrio,
  "content-resource-list": ContentResourceList,
  "testimonial-cards": TestimonialCards,
  "faq-contact": FaqContact,
  "cta4": Cta4,
  "team-photos": TeamPhotos,
  "content-story": ContentStory,
  "stats-showcase": StatsShowcase,
  "hero-split": HeroSplit,
  "cta-split": CtaSplit,
  "content-centered": ContentCentered,
};

// Style-override fields a custom block may carry (Plan 149) — mirrors CUSTOM_STYLE_FIELDS in
// src/lib/block-styles.ts. Kept inline: the emitted standalone project can't import from this app.
const CUSTOM_STYLE_FIELDS = [
  'backgroundColor', 'headingColor', 'textColor', 'buttonColor', 'buttonTextColor',
  'borderColor', 'borderRadius', 'backgroundImage', 'backgroundOverlay',
  'backgroundGradientFrom', 'backgroundGradientTo', 'backgroundGradientAngle',
  'paddingY', 'containerWidth',
] as const;

function pickStyleOverrides(block: Block): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of CUSTOM_STYLE_FIELDS) {
    const val = block[key];
    if (val != null) out[key] = val;
  }
  return out;
}

const HEX_RE = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const PADDING_Y_MAP: Record<string, string> = { none: '0', compact: '3rem', spacious: '8rem', hero: '10rem' };
const CONTAINER_WIDTH_MAP: Record<string, string> = { narrow: '56rem', wide: '96rem', full: 'none' };

function clampNum(n: number, min: number, max: number): number {
  if (Number.isNaN(n)) return min;
  return Math.min(max, Math.max(min, n));
}

function isValidHex(value: unknown): value is string {
  return typeof value === 'string' && HEX_RE.test(value.trim());
}

// Mirrors buildCustomBlockStyle (src/lib/block-styles.ts): wrapper inline style + scoped CSS vars.
function buildCustomBlockStyle(style: Record<string, unknown>): Record<string, string> {
  const css: Record<string, string> = {};
  if (style.backgroundColor) {
    css.backgroundColor = style.backgroundColor as string;
    css['--background'] = style.backgroundColor as string;
    css['--muted'] = style.backgroundColor as string;
  }
  if (style.borderRadius) css.borderRadius = style.borderRadius as string;
  if (style.borderColor) {
    css.borderColor = style.borderColor as string;
    css.borderWidth = '1px';
    css.borderStyle = 'solid';
    css['--border'] = style.borderColor as string;
  }
  if (style.textColor) {
    css['--foreground'] = style.textColor as string;
    css.color = style.textColor as string;
  }
  if (style.buttonColor) {
    css['--primary'] = style.buttonColor as string;
    css['--primary-light'] = style.buttonColor as string;
    css['--primary-dark'] = style.buttonColor as string;
  }
  if (style.buttonTextColor) css['--primary-foreground'] = style.buttonTextColor as string;
  if (style.backgroundImage) {
    const overlayPct = style.backgroundOverlay != null ? clampNum(Number(style.backgroundOverlay), 0, 80) : 40;
    const alpha = overlayPct / 100;
    css.backgroundImage = `linear-gradient(rgba(0,0,0,${alpha}),rgba(0,0,0,${alpha})), url(${style.backgroundImage})`;
    css.backgroundSize = 'cover';
    css.backgroundPosition = 'center';
  } else if (isValidHex(style.backgroundGradientFrom) && isValidHex(style.backgroundGradientTo)) {
    const angle = style.backgroundGradientAngle != null ? clampNum(Number(style.backgroundGradientAngle), 0, 360) : 135;
    css.backgroundImage = `linear-gradient(${angle}deg, ${style.backgroundGradientFrom}, ${style.backgroundGradientTo})`;
  }
  return css;
}

// Mirrors buildCustomBlockCss (src/lib/block-styles.ts): heading color + paddingY/containerWidth
// (enum-gated through the fixed lookup tables above, never raw user strings) + the
// transparent-background rule so the block's own bg-* classes don't paint over a custom background.
function buildCustomBlockCss(scope: string, style: Record<string, unknown>): string {
  let css = '';
  const headingColor = (style.headingColor as string) || (style.textColor as string);
  if (headingColor) {
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((h) => `${scope} ${h}`).join(',');
    css +=
      `${scope} .text-gradient{background:none!important;-webkit-text-fill-color:${headingColor}!important;color:${headingColor}!important;}` +
      `${headings}{color:${headingColor}!important;}`;
  }
  const paddingLen = style.paddingY ? PADDING_Y_MAP[style.paddingY as string] : undefined;
  if (paddingLen) {
    css += `${scope} > section, ${scope} > div > section{padding-top:${paddingLen}!important;padding-bottom:${paddingLen}!important;}`;
  }
  const widthLen = style.containerWidth ? CONTAINER_WIDTH_MAP[style.containerWidth as string] : undefined;
  if (widthLen) {
    css += `${scope} [class*="max-w-"]{max-width:${widthLen}!important;}`;
  }
  const hasCustomBackground = Boolean(style.backgroundImage) || (isValidHex(style.backgroundGradientFrom) && isValidHex(style.backgroundGradientTo));
  if (hasCustomBackground) {
    css += `${scope} > section{background-color:transparent!important;}${scope} > div > section{background-color:transparent!important;}`;
  }
  return css;
}

function CustomBlock({ block, index }: { block: Block; index: number }) {
  const Comp = CUSTOM_MAP[block.blockType as string];
  if (!Comp) return <GenericSection block={block} />;
  const props = (block.props as Record<string, unknown>) ?? {};
  const overrides = pickStyleOverrides(block);
  if (Object.keys(overrides).length === 0) return <Comp {...props} />;
  const scopeClass = `cb-${index}`;
  const style = buildCustomBlockStyle(overrides);
  const scopedCss = buildCustomBlockCss(`.${scopeClass}`, overrides);
  return (
    <div className={scopeClass} style={style}>
      {scopedCss && <style>{scopedCss}</style>}
      <Comp {...props} />
    </div>
  );
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || blocks.length === 0) return null;
  return (
    <>
      {blocks.map((block, i) => {
        const component = block.__component as string;
        if (component === 'shared.custom-block') return <CustomBlock key={i} block={block} index={i} />;
        const Component = BLOCK_MAP[component] ?? GenericSection;
        return <Component key={i} block={block} />;
      })}
    </>
  );
}
