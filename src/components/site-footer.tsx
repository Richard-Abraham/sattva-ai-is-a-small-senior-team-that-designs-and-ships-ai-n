import Link from 'next/link';
import { SITE_NAME, SITE_IDENTITY } from '@/data/site';

export function SiteFooter() {
  const { footerLinks, footerText, logoUrl } = SITE_IDENTITY;
  return (
    <footer data-footer-variant="minimal-dark" className="bg-foreground px-6 py-10 text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        {logoUrl && <img src={logoUrl} alt={SITE_NAME} className="h-6 w-auto" />}
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link, i) => (
            <Link key={i} href={link.url} className="text-sm text-background/70 hover:text-background transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} {SITE_NAME}. {footerText}
        </p>
      </div>
    </footer>
  );
}
