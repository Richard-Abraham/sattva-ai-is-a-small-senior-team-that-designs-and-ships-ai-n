interface MenuItem {
  name?: string;
  description?: string;
  price?: string;
}

interface MenuGroup {
  groupName?: string;
  items?: MenuItem[];
}

interface MenuPriceListProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  groups?: MenuGroup[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Restaurant/service price list: items grouped under category headers, each row a name+
// description on the left and a price on the right joined by a dotted leader rule — classic
// menu typesetting. Unlike `content-product-grid` (image-led product cards, no groups) and
// `pricing-strip`/`pricing-tiers` (pricing category, whole subscription plans not individual
// line items), this is plain grouped text with no images and no plan/CTA framing. Tokens +
// plan-113 foundation classes only.
export function MenuPriceList({ eyebrow, heading, subheading, groups = [], _editable }: MenuPriceListProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal-stagger mb-14 text-center">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          <h2 className="text-h2 text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading ?? 'Menu'}</span>
          </h2>
          {subheading && <p className="text-lead mx-auto mt-4 max-w-xl text-foreground/70" {...editable('props.subheading')}>{subheading}</p>}
        </div>
        <div className="reveal-stagger flex flex-col gap-12" {...(_editable ? { 'data-edit-list': 'props.groups' } : {})}>
          {groups.map((group, gi) => (
            <div key={gi} {...(_editable ? { 'data-edit-item': '' } : {})}>
              {group.groupName && (
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-primary" {...editable(`props.groups.${gi}.groupName`)}>
                  {group.groupName}
                </h3>
              )}
              <ul className="flex flex-col gap-5">
                {(group.items ?? []).map((item, ii) => (
                  <li key={ii}>
                    <div className="flex items-baseline gap-3">
                      <span className="text-base font-medium text-foreground" {...editable(`props.groups.${gi}.items.${ii}.name`)}>{item.name}</span>
                      <span aria-hidden="true" className="h-px flex-1 border-b border-dotted border-border" />
                      <span className="shrink-0 text-base font-semibold text-foreground" {...editable(`props.groups.${gi}.items.${ii}.price`)}>{item.price}</span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-sm text-foreground/60" {...editable(`props.groups.${gi}.items.${ii}.description`)}>{item.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
