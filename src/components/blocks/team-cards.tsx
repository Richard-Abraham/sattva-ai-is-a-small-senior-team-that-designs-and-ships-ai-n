interface TeamMember {
  name?: string;
  role?: string;
  imageSrc?: string;
}

interface TeamCardsProps {
  heading?: string;
  members?: TeamMember[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Team as portrait cards with a large image top and name/role below. Bold, Lovable-style — gradient
// heading, elevated cards with hover lift, staggered reveal. Tokens + plan-113 classes only.
export function TeamCards({ heading, members = [], _editable }: TeamCardsProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4" {...(_editable ? { 'data-edit-list': 'props.members' } : {})}>
          {members.map((m, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
              {m.imageSrc ? (
                <img loading="lazy" src={m.imageSrc} {...(_editable ? { 'data-edit-img': `props.members.${i}.imageSrc` } : {})} alt={m.name ?? ''} className="aspect-square w-full object-cover" />
              ) : (
                <div className="aspect-square w-full bg-gradient-to-br from-primary/20 to-primary-light/20" />
              )}
              <div className="p-5">
                <p className="font-semibold text-foreground" {...editable(`props.members.${i}.name`)}>{m.name}</p>
                {m.role && <p className="text-sm text-primary" {...editable(`props.members.${i}.role`)}>{m.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
