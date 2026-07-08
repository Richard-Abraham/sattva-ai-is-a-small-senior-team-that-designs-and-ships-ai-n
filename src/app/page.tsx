import type { Metadata } from 'next';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { BlockRenderer } from '@/components/block-renderer';
import { SITE_PAGES, SITE_NAME } from '@/data/site';

export const metadata: Metadata = {
  title: "Sattva AI is a small senior team that designs and ships AI-n",
  description: "Sattva AI is a small senior team that designs and ships AI-native software for startups and enterprises. They build production-ready AI products and services, including RAG pipelines, workflow automation, autonomous agents, ecommerce platforms, and AI-native applications.",
};

export default function HomePage() {
  const page = SITE_PAGES.find(p => p.slug === "home-16") ?? SITE_PAGES[0];
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        {page ? (
          <BlockRenderer blocks={page.layout as Record<string, unknown>[]} />
        ) : (
          <section className="flex min-h-[50vh] items-center justify-center">
            <p className="text-foreground/50">No content yet.</p>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
