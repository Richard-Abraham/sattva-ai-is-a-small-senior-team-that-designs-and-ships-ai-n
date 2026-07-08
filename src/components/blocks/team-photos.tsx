interface TeamMember {
  name?: string;
  role?: string;
  imageSrc?: string;
}

interface TeamPhotosProps {
  heading?: string;
  members?: TeamMember[];
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Team grid with circular photos. Bold, Lovable-style — gradient heading, elevated cards with hover
// lift, gradient placeholder avatars, staggered reveal. Tokens + plan-113 foundation classes only.
export function TeamPhotos({ heading, members = [], _editable }: TeamPhotosProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {heading && <h2 className="reveal text-h2 text-gradient mb-12 text-balance text-center" {...editable('props.heading')}>{heading}</h2>}
        <div className="reveal-stagger grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4" {...(_editable ? { 'data-edit-list': 'props.members' } : {})}>
          {members.map((m, i) => (
            <div key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="hover-lift flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center shadow-soft">
              {m.imageSrc ? (
                <img loading="lazy" src={m.imageSrc} {...(_editable ? { 'data-edit-img': `props.members.${i}.imageSrc` } : {})} alt={m.name ?? ''} className="h-24 w-24 rounded-full border-2 border-border object-cover" />
              ) : (
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20" />
              )}
              <p className="mt-4 font-semibold text-foreground" {...editable(`props.members.${i}.name`)}>{m.name}</p>
              {m.role && <p className="text-sm text-primary" {...editable(`props.members.${i}.role`)}>{m.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
