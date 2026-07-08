import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { BlockRenderer } from '@/components/block-renderer';
import { SITE_PAGES } from '@/data/site';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// Pre-render all known pages at build time — each entry's segments join back to a derived path.
export function generateStaticParams() {
  return [
    {
        "slug": [
            "services"
        ]
    },
    {
        "slug": [
            "work"
        ]
    },
    {
        "slug": [
            "about"
        ]
    },
    {
        "slug": [
            "contact"
        ]
    },
    {
        "slug": [
            "privacy-policy"
        ]
    },
    {
        "slug": [
            "terms-of-service"
        ]
    }
];
}

function findPage(slugParts: string[]) {
  const path = slugParts.join('/');
  return SITE_PAGES.find(p => p.path === path);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) return { title: 'Page Not Found' };
  return { title: page.title, description: page.excerpt ?? undefined };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <BlockRenderer blocks={page.layout as Record<string, unknown>[]} />
      </main>
      <SiteFooter />
    </div>
  );
}
