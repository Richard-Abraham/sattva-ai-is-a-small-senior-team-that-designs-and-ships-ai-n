'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SITE_NAME, SITE_IDENTITY } from '@/data/site';

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navLinks, navCtaButtons, logoUrl } = SITE_IDENTITY;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav data-nav-variant="logo-left" className={"sticky top-0 z-50 border-b transition-all duration-300 " + (scrolled ? "border-border/60 bg-background/70 shadow-sm backdrop-blur-xl" : "border-transparent bg-transparent")}>
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3.5">
        <Link href="/" className="text-lg font-extrabold shrink-0">
          {logoUrl ? <img src={logoUrl} alt={SITE_NAME} className="h-7 w-auto" /> : <span className="text-gradient">{SITE_NAME}</span>}
        </Link>
        
        {/* Desktop links */}
        <div className="hidden md:flex flex-1 items-center  gap-6">
          {navLinks.map((link, i) =>
            link.children && link.children.length > 0 ? (
              <div key={i} className="group relative">
                <Link href={link.url} className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors">
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-px"><path d="m6 9 6 6 6-6" /></svg>
                </Link>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
                  <div className="flex min-w-[10rem] flex-col rounded-lg border border-border bg-background py-1.5 shadow-lg">
                    {link.children.map((child, j) => (
                      <Link key={j} href={child.url} className="px-3 py-1.5 text-sm text-foreground/70 hover:bg-accent hover:text-foreground">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={i} href={link.url} className={"text-sm text-foreground/70 hover:text-foreground transition-colors"}>
                {link.label}
              </Link>
            ),
          )}
        </div>
        {navCtaButtons.length > 0 && (
          <div className="hidden md:flex items-center gap-3">
            {navCtaButtons.map((btn, i) => (
              <Link
                key={i}
                href={btn.url}
                className={"rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}
        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden p-2 text-foreground/70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current mb-1" />
          <span className="block h-0.5 w-5 bg-current mb-1" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Link href={link.url} className="text-sm text-foreground/70 hover:text-foreground" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
                {link.children && link.children.length > 0 && (
                  <div className="flex flex-col gap-2 pl-4">
                    {link.children.map((child, j) => (
                      <Link key={j} href={child.url} className="text-sm text-foreground/50 hover:text-foreground" onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {navCtaButtons.map((btn, i) => (
              <Link
                key={i}
                href={btn.url}
                className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
