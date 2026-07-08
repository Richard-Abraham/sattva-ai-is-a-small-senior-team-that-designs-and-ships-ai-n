import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

interface StorySection {
  heading?: string;
  text?: string;
}

interface ContentStoryProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  imageSrc?: string;
  imageAlt?: string;
  secondaryImageSrc?: string;
  secondaryImageAlt?: string;
  items?: StorySection[];
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Long-form "our story" content section: eyebrow + display heading, lead paragraph, an image
// pair, then alternating narrative sections and a closing outline CTA. Adapted from
// shadcnblocks about7 (docs/block-adaptation.md worked example) — rebuilt on tokens +
// plan-113 foundation classes, with the toolbox Button (emit-safety v2).
export function ContentStory({
  eyebrow,
  heading,
  subheading,
  imageSrc,
  imageAlt = '',
  secondaryImageSrc,
  secondaryImageAlt = '',
  items = [],
  primaryLabel,
  primaryHref,
  _editable,
}: ContentStoryProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal-stagger max-w-2xl">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h1 text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Heading'}</span>
          </h2>
          {subheading && (
            <p className="text-lead mt-6 text-foreground/70" {...editable('props.subheading')}>{subheading}</p>
          )}
        </div>

        {(imageSrc || secondaryImageSrc || _editable) && (
          <div className="reveal mt-12 grid gap-6 md:grid-cols-2">
            {(imageSrc || _editable) && (
              imageSrc ? (
                <img loading="lazy"
                  src={imageSrc}
                  alt={imageAlt}
                  {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
                  className="shadow-soft aspect-[3/2] w-full rounded-2xl border border-border object-cover"
                />
              ) : (
                <div
                  {...(_editable ? { 'data-edit-img': 'props.imageSrc' } : {})}
                  className="aspect-[3/2] w-full rounded-2xl border border-border bg-muted"
                />
              )
            )}
            {(secondaryImageSrc || _editable) && (
              secondaryImageSrc ? (
                <img loading="lazy"
                  src={secondaryImageSrc}
                  alt={secondaryImageAlt}
                  {...(_editable ? { 'data-edit-img': 'props.secondaryImageSrc' } : {})}
                  className="shadow-soft aspect-[3/2] w-full rounded-2xl border border-border object-cover"
                />
              ) : (
                <div
                  {...(_editable ? { 'data-edit-img': 'props.secondaryImageSrc' } : {})}
                  className="aspect-[3/2] w-full rounded-2xl border border-border bg-muted"
                />
              )
            )}
          </div>
        )}

        {items.length > 0 && (
          <div
            className="mt-14 flex flex-col gap-10"
            {...(_editable ? { 'data-edit-list': 'props.items' } : {})}
          >
            {items.map((item, i) => (
              <div
                key={i}
                {...(_editable ? { 'data-edit-item': '' } : {})}
                className={`reveal max-w-2xl ${i % 2 === 1 ? 'md:ml-auto' : ''}`}
              >
                {item.heading && (
                  <h3 className="text-h2 mb-3 text-balance" {...editable(`props.items.${i}.heading`)}>
                    {item.heading}
                  </h3>
                )}
                {item.text && (
                  <p className="text-lg leading-relaxed text-foreground/70" {...editable(`props.items.${i}.text`)}>
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {primaryLabel && (
          <div className="reveal mt-12">
            <a
              href={primaryHref ?? '#'}
              {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
              className={buttonVariants({ variant: 'outline', size: 'lg', className: 'gap-2' })}
            >
              <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
