interface ContentCenteredProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Centered prose block — a focused statement with generous measure. Bold, Lovable-style — eyebrow,
// gradient heading, lead body, scroll reveal. Tokens + plan-113 foundation classes only (emit-safe).
export function ContentCentered({ eyebrow, heading, body, _editable }: ContentCenteredProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="reveal mx-auto max-w-3xl px-6 text-center">
        {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
        {heading && (
          <h2 className="text-h2 text-balance">
            <span className="text-gradient" {...editable('props.heading')}>{heading}</span>
          </h2>
        )}
        {body && <p className="text-lead mt-6 whitespace-pre-line text-foreground/70" {...editable('props.body')}>{body}</p>}
      </div>
    </section>
  );
}
