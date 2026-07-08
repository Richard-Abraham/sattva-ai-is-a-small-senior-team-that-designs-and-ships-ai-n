/**
 * Generated site data — source of truth for static rendering.
 * Re-run the builder to regenerate this file with updated content.
 */

export const SITE_NAME = "Sattva AI is a small senior team that designs and ships AI-n";

export interface PageData {
  title: string;
  slug: string;
  /** Derived URL path (Plan 014) — equals slug for a top-level page, "parentSlug/slug" for a
   *  subpage (e.g. "services/branding"). Routing matches on this, not slug. */
  path: string;
  excerpt: string | null;
  layout: Record<string, unknown>[];
}

export interface SiteIdentityData {
  navVariant: string;
  /** children (Plan 014): subpages of this top-level page, when it has any — the nav renders
   *  them as a dropdown instead of a flat link. */
  navLinks: { label: string; url: string; children?: { label: string; url: string }[] }[];
  navCtaButtons: { label: string; url: string }[];
  footerLinks: { label: string; url: string }[];
  footerText: string;
  footerVariant: string;
  logoUrl?: string;
}

export const SITE_PAGES: PageData[] = [
  {
    "title": "Home",
    "slug": "home-16",
    "excerpt": null,
    "layout": [
      {
        "id": 82,
        "blockType": "hero-screenshot",
        "props": {
          "eyebrow": "Senior AI product team",
          "heading": "Design and ship AI software",
          "imageAlt": "modern software engineering workspace",
          "subheading": "Sattva AI builds production-ready systems for startups and enterprises. We work directly with your team to turn high-stakes AI ideas into software that ships.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a free consultation",
          "secondaryHref": "/work",
          "secondaryLabel": "See selected work",
          "imageSrc": "https://images.unsplash.com/photo-1776090893591-90f5ea3fa523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwd29ya3NwYWNlfGVufDB8fHx8MTc4MzUxOTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": "none",
        "dividerBottom": null,
        "hoverEffect": "lift",
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": "compact",
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 83,
        "blockType": "logo-marquee",
        "props": {
          "logos": [
            {
              "name": "OpenAI",
              "imageSrc": "https://images.unsplash.com/photo-1676299081847-824916de030a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxPcGVuQUl8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Anthropic",
              "imageSrc": "https://images.unsplash.com/photo-1782513927216-d1b4610439f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxBbnRocm9waWN8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "AWS",
              "imageSrc": "https://images.unsplash.com/photo-1628296499994-70face79ab36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxBV1N8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Google Cloud",
              "imageSrc": "https://images.unsplash.com/photo-1612873346068-1d4b76372235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBDbG91ZHxlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Microsoft Azure",
              "imageSrc": "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBBenVyZXxlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Stripe",
              "imageSrc": "https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            }
          ],
          "heading": "Trusted by builders and operators"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 84,
        "blockType": "feature-bento-media",
        "props": {
          "items": [
            {
              "icon": "🔎",
              "title": "RAG pipelines",
              "description": "Ground models in your own data with retrieval pipelines tuned for accuracy, traceability, and production reliability."
            },
            {
              "icon": "⚙️",
              "title": "Automation and agents",
              "description": "Automate workflows and deploy autonomous agents that handle repeatable work without losing control or visibility."
            },
            {
              "icon": "🛒",
              "title": "AI-native products",
              "description": "Ship AI-native applications and ecommerce platforms built to convert, scale, and integrate cleanly with your stack."
            }
          ],
          "heading": "What We Do",
          "imageAlt": "ai software team meeting",
          "primaryHref": "/work",
          "primaryLabel": "See our work",
          "featuredLabel": "Production-ready AI systems",
          "featuredTitle": "Build AI that ships",
          "featuredDescription": "We design and deliver AI software that fits real constraints: data quality, existing systems, and business goals. Senior builders, direct collaboration, no handoff chain.",
          "imageSrc": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxhaSUyMHNvZnR3YXJlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 85,
        "blockType": "feature-media-cards",
        "props": {
          "items": [
            {
              "tags": [
                "Production-ready",
                "Autonomous agents",
                "Reliable orchestration"
              ],
              "title": "Agent patterns that hold up",
              "imageAlt": "autonomous agent workspace",
              "imageSrc": "https://images.unsplash.com/photo-1740560051651-c2010c37aa9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxBZ2VudCUyMHBhdHRlcm5zJTIwdGhhdCUyMGhvbGQlMjB1cHxlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "description": "New agent flows with tighter tool use, clearer state, and better failure recovery for production workloads."
            },
            {
              "tags": [
                "RAG pipelines",
                "Hybrid retrieval",
                "Higher answer quality"
              ],
              "title": "Retrieval with better signal",
              "imageAlt": "enterprise search analytics",
              "imageSrc": "https://images.unsplash.com/photo-1652643684001-ab895e1ff278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxSZXRyaWV2YWwlMjB3aXRoJTIwYmV0dGVyJTIwc2lnbmFsfGVufDB8fHx8MTc4MzUxOTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
              "description": "Improved RAG pipelines using hybrid search, reranking, and document-aware chunking for sharper answers."
            },
            {
              "tags": [
                "Workflow automation",
                "System integration",
                "Operational control"
              ],
              "title": "Automation across systems",
              "imageAlt": "workflow automation dashboard",
              "imageSrc": "https://images.unsplash.com/photo-1717386255777-ce60792a2a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxBdXRvbWF0aW9uJTIwYWNyb3NzJTIwc3lzdGVtc3xlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "description": "Workflow automation that connects approvals, data updates, and notifications without brittle handoffs."
            },
            {
              "tags": [
                "Ecommerce platforms",
                "AI-native UX",
                "Conversion focused"
              ],
              "title": "Commerce that feels native",
              "imageAlt": "commerce product interface",
              "imageSrc": "https://images.unsplash.com/photo-1761059724846-5fd855abdf25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxDb21tZXJjZSUyMHRoYXQlMjBmZWVscyUyMG5hdGl2ZXxlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "description": "AI-native ecommerce experiences for guided discovery, merchandising, and support that convert without friction."
            }
          ],
          "heading": "What’s New",
          "subheading": "Fresh capability work from the senior team at Sattva AI. We ship practical AI systems that improve retrieval, automate operations, and unlock new commerce experiences."
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 86,
        "blockType": "feature-tool-grid",
        "props": {},
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 87,
        "blockType": "team-cards",
        "props": {
          "heading": "Senior team, directly engaged",
          "members": [
            {
              "name": "Maya Rao",
              "role": "Founder, Lead Architect",
              "imageSrc": "https://images.unsplash.com/photo-1627024195469-5e96874be9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxNYXlhJTIwUmFvfGVufDB8fHx8MTc4MzUxOTM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Daniel Cho",
              "role": "AI Systems Engineer",
              "imageSrc": "https://images.unsplash.com/photo-1542909192-2f2241a99c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxEYW5pZWwlMjBDaG98ZW58MHx8fHwxNzgzNTE5MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Priya Nair",
              "role": "Product and Delivery Lead",
              "imageSrc": "https://images.unsplash.com/photo-1729101143806-d3ba486b9a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxQcml5YSUyME5haXJ8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            }
          ]
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 1,
        "heading": "Three-Step Process",
        "variant": "vertical",
        "sectionBackground": "default",
        "dividerTop": "none",
        "dividerBottom": "none",
        "gradientHeading": false,
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "events": [
          {
            "id": 1,
            "date": "01",
            "title": "Discover the real problem",
            "description": "We map users, systems, and constraints, then identify the highest-value AI opportunity.",
            "icon": "search"
          },
          {
            "id": 2,
            "date": "02",
            "title": "Design the solution",
            "description": "We define the workflow, model approach, data needs, and delivery plan before building.",
            "icon": "layout"
          },
          {
            "id": 3,
            "date": "03",
            "title": "Build, launch, iterate",
            "description": "We ship production software, measure results, and refine with your team after launch.",
            "icon": "rocket"
          }
        ],
        "__component": "shared.timeline"
      },
      {
        "id": 88,
        "blockType": "testimonial-marquee",
        "props": {
          "items": [
            {
              "quote": "They took our rough AI idea and shipped a production RAG system in weeks, not quarters. The team stayed close, made smart tradeoffs, and kept everything reliable in production.",
              "authorName": "Maya Chen",
              "authorRole": "Founder, B2B SaaS startup"
            },
            {
              "quote": "We needed an internal automation layer that would work with our existing stack and governance rules. Sattva AI delivered quickly, communicated clearly, and reduced manual work across the team.",
              "authorName": "Daniel Brooks",
              "authorRole": "VP Product, Enterprise Operations"
            },
            {
              "quote": "Their senior team moved from discovery to working ecommerce AI features without the usual handoff friction. We saw measurable lift in conversion, and the build held up under real traffic.",
              "authorName": "Priya Nair",
              "authorRole": "GM, Digital Commerce"
            }
          ],
          "heading": "Three testimonials"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 89,
        "blockType": "contact-split",
        "props": {
          "details": [
            {
              "icon": "phone",
              "label": "Intro call",
              "value": "Discuss your product, systems, and goals with a senior team member."
            },
            {
              "icon": "email",
              "label": "Intake review",
              "value": "Share your use case, tech stack, and what needs to ship first."
            },
            {
              "icon": "address",
              "label": "Best fit",
              "value": "For qualified teams ready to build production AI, not just explore ideas."
            }
          ],
          "eyebrow": "Book a Call",
          "heading": "Talk to the team that ships",
          "hoursLabel": "Consultation format",
          "hoursValue": "Free 30-minute call",
          "subheading": "A short consultation for startups and enterprises that need practical AI guidance, clear scope, and a build plan that fits real constraints.",
          "primaryHref": "/contact",
          "primaryLabel": "Book your call"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      }
    ],
    "path": "home-16"
  },
  {
    "title": "Services",
    "slug": "services-3",
    "excerpt": null,
    "layout": [
      {
        "id": 90,
        "blockType": "hero-image-bg",
        "props": {
          "eyebrow": "Services",
          "heading": "Production-ready AI systems",
          "imageAlt": "senior team planning software",
          "imageSrc": "null",
          "subheading": "Sattva AI designs and ships RAG pipelines, autonomous agents, workflow automation, and AI-native products. Small senior team, direct collaboration, built to fit real constraints.",
          "primaryHref": "null",
          "primaryLabel": "Discuss your project"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 91,
        "blockType": "feature-bento",
        "props": {
          "items": [
            {
              "title": "RAG pipelines",
              "description": "Design retrieval systems that ground answers in your data, with evaluation, guardrails, and deployment-ready architecture."
            },
            {
              "title": "Autonomous agents",
              "description": "Build agents that can plan, use tools, and complete defined tasks reliably inside your existing systems."
            },
            {
              "title": "Workflow automation",
              "description": "Automate repeatable operations across teams and software, reducing manual work without breaking process control."
            },
            {
              "title": "AI-native applications",
              "description": "Ship product-grade AI apps for startups and enterprises, designed around real users, constraints, and integration needs."
            },
            {
              "title": "Ecommerce platforms",
              "description": "Create AI-enabled commerce experiences, from storefront logic to merchandising, search, and operational automation."
            }
          ],
          "heading": "Service categories"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 92,
        "blockType": "menu-price-list",
        "props": {
          "groups": [
            {
              "items": [
                {
                  "name": "Define the problem",
                  "price": null,
                  "description": "We map the workflow, constraints, and success criteria before writing code."
                },
                {
                  "name": "Choose the right system",
                  "price": null,
                  "description": "RAG, agents, automation, or a product build — based on what the business actually needs."
                }
              ],
              "groupName": "01  Scope"
            },
            {
              "items": [
                {
                  "name": "Build a working path",
                  "price": null,
                  "description": "A focused prototype shows how the system behaves with real inputs, not slides."
                },
                {
                  "name": "Test with data",
                  "price": null,
                  "description": "We use your data early to surface retrieval gaps, failure modes, and integration friction."
                }
              ],
              "groupName": "02  Prototype"
            },
            {
              "items": [
                {
                  "name": "Set evaluation gates",
                  "price": null,
                  "description": "We define measurable quality checks for accuracy, latency, and reliability."
                },
                {
                  "name": "Connect the stack",
                  "price": null,
                  "description": "We integrate with your APIs, databases, tools, and deployment environment."
                }
              ],
              "groupName": "03  Harden"
            },
            {
              "items": [
                {
                  "name": "Deploy cleanly",
                  "price": null,
                  "description": "Production rollout includes observability, guardrails, and handoff-ready documentation."
                },
                {
                  "name": "Iterate with confidence",
                  "price": null,
                  "description": "You get a system built to operate, improve, and scale inside real business constraints."
                }
              ],
              "groupName": "04  Ship"
            }
          ],
          "eyebrow": "Delivery Approach",
          "heading": "Scope it. Prove it. Ship it.",
          "subheading": "We work directly with you to define the right system, validate it quickly, and harden it for production. Every engagement covers data, evaluation, integrations, and deployment from the start."
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 93,
        "blockType": "feature-bento-media",
        "props": {
          "items": [
            {
              "icon": "01",
              "title": "Product build",
              "description": "Design and ship AI-native software end to end: from RAG pipelines and agents to workflow automation and commerce experiences."
            },
            {
              "icon": "02",
              "title": "Modernization",
              "description": "Upgrade existing systems with AI where it fits, without disrupting core operations, data flow, or delivery cadence."
            },
            {
              "icon": "03",
              "title": "Implementation sprint",
              "description": "Move fast on one clear problem. We validate the path, build the first version, and leave you with a production-ready plan."
            }
          ],
          "heading": "Engagement Models",
          "imageAlt": "senior team strategy session",
          "primaryHref": "/contact",
          "primaryLabel": "Start with a consultation",
          "featuredLabel": "Direct engagement",
          "featuredTitle": "Work with the builders",
          "featuredDescription": "You get a small senior team from scoping through delivery. We stay close to product decisions, architecture, and release quality.",
          "imageSrc": "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB0ZWFtJTIwc3RyYXRlZ3klMjBzZXNzaW9ufGVufDB8fHx8MTc4MzUxOTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 2,
        "heading": "Project Lifecycle",
        "variant": "vertical",
        "sectionBackground": "default",
        "dividerTop": "none",
        "dividerBottom": "none",
        "gradientHeading": false,
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "events": [
          {
            "id": 4,
            "date": "01",
            "title": "Discovery",
            "description": "Align on goals, users, constraints, and success metrics.",
            "icon": "search"
          },
          {
            "id": 5,
            "date": "02",
            "title": "Architecture",
            "description": "Design the system, data flow, and AI stack for production.",
            "icon": "layers"
          },
          {
            "id": 6,
            "date": "03",
            "title": "Build",
            "description": "Ship the core product, integrations, and agent workflows.",
            "icon": "code"
          },
          {
            "id": 7,
            "date": "04",
            "title": "Testing",
            "description": "Validate quality, reliability, safety, and edge cases.",
            "icon": "check"
          },
          {
            "id": 8,
            "date": "05",
            "title": "Launch",
            "description": "Deploy with monitoring, guardrails, and rollback plans.",
            "icon": "rocket"
          },
          {
            "id": 9,
            "date": "06",
            "title": "Iterate",
            "description": "Use live signals to improve features, prompts, and performance.",
            "icon": "refresh"
          }
        ],
        "__component": "shared.timeline"
      },
      {
        "id": 94,
        "blockType": "testimonial-split",
        "props": {
          "heading": "Proof from shipped systems",
          "testimonials": [
            {
              "quote": "Sattva AI rebuilt our internal search with a production RAG pipeline. Retrieval became accurate enough for support and product teams to trust daily.",
              "authorName": "Head of Product",
              "authorRole": "B2B SaaS"
            },
            {
              "quote": "They automated a manual ops workflow end to end, cut turnaround time dramatically, and left us with code our engineers could maintain.",
              "authorName": "VP Operations",
              "authorRole": "Enterprise Services"
            },
            {
              "quote": "The team launched our AI-native product in weeks, not quarters. Clear architecture, fast decisions, and no handoff friction from discovery to release.",
              "authorName": "Founder",
              "authorRole": "Startup"
            }
          ]
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 95,
        "blockType": "faq-split",
        "props": {
          "items": [
            {
              "answer": "We focus on AI software we can ship: RAG systems, autonomous agents, workflow automation, ecommerce intelligence, and AI-native applications. If it needs to work in production, we can usually help.",
              "question": "What projects do you take on?"
            },
            {
              "answer": "No. We can own the full product or plug into a specific gap: architecture, implementation, prompt and retrieval design, evaluation, or launch hardening. We work directly with your team.",
              "question": "Do you only handle the full build?"
            },
            {
              "answer": "Usually enough to understand the workflow, target users, and available sources of truth. For RAG and agent systems, we review content quality, access patterns, permissions, and failure cases before we build.",
              "question": "What data do you need to start?"
            },
            {
              "answer": "We choose based on task, latency, cost, privacy, and reliability. That may mean frontier models, smaller open models, embeddings, rerankers, or a hybrid setup. The stack should fit the product, not the other way around.",
              "question": "How do you choose the model stack?"
            },
            {
              "answer": "Yes. Most engagements involve real constraints: legacy APIs, internal tools, cloud standards, and security reviews. We design around your stack instead of asking you to replace it.",
              "question": "Can you work with our existing systems?"
            },
            {
              "answer": "We can stay on for monitoring, iteration, prompt and retrieval tuning, bug fixes, and feature expansion. The goal is not a handoff; it is a system that keeps improving with use.",
              "question": "What happens after launch?"
            },
            {
              "answer": "We design for least-privilege access, auditability, data isolation, and vendor controls from the start. For sensitive environments, we align deployment, logging, and retention with your security requirements.",
              "question": "How do you handle enterprise security?"
            },
            {
              "answer": "Book a short consultation and we will map the problem, assess feasibility, and outline the right build path. If it is a fit, we move quickly from discovery to implementation.",
              "question": "How do we get started?"
            }
          ],
          "heading": "Service FAQ",
          "subheading": "Practical answers on scope, data, models, support, and security. Built for teams that need production-ready AI, not vague strategy."
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 96,
        "blockType": "cta-consultation",
        "props": {
          "heading": "Start a Project Conversation",
          "subheading": "Talk directly with a senior team that can help you define the right AI system, scope the build, and move fast without handoff friction.",
          "field1Label": "What are you building?",
          "field2Label": "What should success look like?",
          "primaryHref": "/contact",
          "primaryLabel": "Request a consultation",
          "field1Placeholder": "RAG pipeline, autonomous agent, AI workflow, ecommerce platform, or other AI product",
          "field2Placeholder": "Briefly describe the outcome, timeline, and any existing systems we should know about"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      }
    ],
    "path": "services-3"
  },
  {
    "title": "Work",
    "slug": "work",
    "excerpt": null,
    "layout": [
      {
        "id": 97,
        "blockType": "hero-motion",
        "props": {
          "eyebrow": "Selected Work",
          "heading": "Real AI, shipped in production",
          "imageAlt": "ai software team",
          "subheading": "See how a small senior team turns AI ideas into working systems with measurable business impact. Explore case studies or book a consultation if you need a clear path forward.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a consultation",
          "imageSrc": "https://images.unsplash.com/photo-1618758992354-364bbe07b3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxhaSUyMHNvZnR3YXJlJTIwdGVhbXxlbnwwfHx8fDE3ODM1MTkzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 98,
        "blockType": "stats-band",
        "props": {
          "items": [
            {
              "label": "Less manual review",
              "value": "40%"
            },
            {
              "label": "Faster retrieval",
              "value": "3x"
            },
            {
              "label": "From scoping to first build",
              "value": "2 weeks"
            },
            {
              "label": "Workflow reliability",
              "value": "99%"
            }
          ],
          "heading": "Real outcomes from shipped AI systems"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 99,
        "blockType": "feature-trio",
        "props": {
          "items": [
            {
              "title": "RAG for Support at Scale",
              "description": "Reduced answer time with a production RAG pipeline tuned to the client’s docs, permissions, and support workflow. Full detail on retrieval design and rollout is available in the case study page."
            },
            {
              "title": "Agentic Ops Automation",
              "description": "Shipped an autonomous agent workflow that handled repetitive internal tasks with auditability, clear approvals, and measurable time savings. Read the expanded narrative for architecture and controls."
            },
            {
              "title": "Commerce Search, Rebuilt",
              "description": "Delivered an AI-native ecommerce experience with faster product discovery, better relevance, and cleaner catalog operations. The full case study shows the product and backend changes."
            }
          ],
          "heading": "Selected Case Studies"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 100,
        "blockType": "content-resource-list",
        "props": {
          "items": [
            {
              "tag": "RAG",
              "title": "Production Search Systems",
              "actionHref": "/work",
              "actionLabel": "See related work",
              "description": "Retrieval pipelines that connect internal knowledge, product data, and source documents into reliable, answer-ready applications."
            },
            {
              "tag": "Agents",
              "title": "Autonomous Workflow Agents",
              "actionHref": "/work",
              "actionLabel": "See related work",
              "description": "Task-driven agents that execute multi-step work, surface decisions, and fit into real operating constraints."
            },
            {
              "tag": "Automation",
              "title": "Business Workflow Automation",
              "actionHref": "/work",
              "actionLabel": "See related work",
              "description": "AI-assisted systems that reduce manual review, route exceptions, and keep existing tools moving without brittle handoffs."
            },
            {
              "tag": "Commerce",
              "title": "AI-Native Commerce",
              "actionHref": "/work",
              "actionLabel": "See related work",
              "description": "Ecommerce experiences with intelligent discovery, guided selling, and operational logic designed to convert and scale."
            }
          ],
          "heading": "Representative Builds",
          "noteText": "These are the kinds of systems Sattva AI ships: practical, production-ready, and shaped around existing teams, data, and constraints. If you need a clear path from idea to implementation, start with a short consultation.",
          "noteHeading": "Built for real delivery",
          "primaryHref": "/contact",
          "primaryLabel": "Book a consultation"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 101,
        "blockType": "testimonial-cards",
        "props": {
          "heading": "Client Quotes",
          "testimonials": [
            {
              "quote": "Sattva AI turned a vague RAG concept into a production system our team could trust. Small team, fast decisions, no handoff churn.",
              "authorName": "Head of Product",
              "authorRole": "Series A SaaS Company"
            },
            {
              "quote": "They understood our existing stack and shipped automation that removed manual work without disrupting operations. Practical, senior, and easy to work with.",
              "authorName": "Operations Director",
              "authorRole": "Enterprise Commerce Brand"
            },
            {
              "quote": "We needed an AI-native product built for real constraints, not demos. Sattva AI delivered a clear plan and shipped the core experience on time.",
              "authorName": "Founder",
              "authorRole": "B2B Startup"
            }
          ]
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 102,
        "blockType": "faq-contact",
        "props": {
          "items": [
            {
              "answer": "A production-ready AI system tailored to the client’s workflow: usually a mix of RAG, automation, agents, and a shipping-grade interface integrated with existing tools.",
              "question": "What did you build?"
            },
            {
              "answer": "Most engagements move from discovery to a working build in weeks, not quarters. Scope is kept tight so the team can ship early and iterate with real usage.",
              "question": "How long did it take?"
            },
            {
              "answer": "By business output, not demos: faster task completion, fewer manual steps, better answer quality, cleaner handoffs, and adoption by the people who actually use it.",
              "question": "How was success measured?"
            },
            {
              "answer": "The pattern, not just the product. Similar teams can reuse the architecture, evaluation approach, and implementation playbook across support, ops, ecommerce, and internal tools.",
              "question": "What can be adapted?"
            }
          ],
          "heading": "Case Study Context",
          "subheading": "A quick read on what was built, how fast, and how impact was measured.",
          "contactText": "If you have a concrete AI use case, Sattva AI can help define the scope, architecture, and delivery plan before you commit to a build.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a consultation",
          "contactHeading": "Need a similar build?"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 103,
        "blockType": "cta4",
        "props": {
          "items": [
            "Review a similar build and the decisions that made it work.",
            "Get practical guidance on what to build, what to skip, and how to ship.",
            "See how we fit into your stack, constraints, and timeline."
          ],
          "title": "Discuss a Similar Build",
          "buttonUrl": "/contact",
          "buttonText": "Book a Free Call",
          "description": "If you’re exploring a RAG pipeline, autonomous agent, workflow automation, or AI-native product, we can map the fastest credible path. Book a free call with the senior team that will actually build it."
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      }
    ],
    "path": "work"
  },
  {
    "title": "About",
    "slug": "about-2",
    "excerpt": null,
    "layout": [
      {
        "id": 104,
        "blockType": "hero-screenshot",
        "props": {
          "eyebrow": "About Hero",
          "heading": "Senior AI, shipped directly",
          "imageAlt": "senior software team",
          "subheading": "Sattva AI is a small senior team building production-ready AI software for startups and enterprises. We work close to the problem, then ship systems that fit real constraints.",
          "primaryHref": "/about",
          "primaryLabel": "Learn more",
          "secondaryHref": "/contact",
          "secondaryLabel": "Book a consultation",
          "imageSrc": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBzb2Z0d2FyZSUyMHRlYW18ZW58MHx8fHwxNzgzNTE5MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 105,
        "blockType": "team-photos",
        "props": {
          "heading": "Senior team, built to ship",
          "members": [
            {
              "name": "Arjun Mehta",
              "role": "Founder and Lead Architect",
              "imageSrc": "https://images.unsplash.com/photo-1613462540041-ccd487c9a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxBcmp1biUyME1laHRhfGVufDB8fHx8MTc4MzUxOTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Priya Nair",
              "role": "AI Systems Engineer",
              "imageSrc": "https://images.unsplash.com/photo-1729101143806-d3ba486b9a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxQcml5YSUyME5haXJ8ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
              "name": "Daniel Kim",
              "role": "Product and Delivery Lead",
              "imageSrc": "https://images.unsplash.com/photo-1666966722000-6c9c61236728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxEYW5pZWwlMjBLaW18ZW58MHx8fHwxNzgzNTE5MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            }
          ]
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 106,
        "blockType": "content-story",
        "props": {
          "items": [
            {
              "text": "We came together around a shared pattern: teams had strong AI ideas, but needed experienced execution to turn them into usable software. So we built a lean studio focused on direct collaboration and fast delivery.",
              "heading": "How we formed"
            },
            {
              "text": "We build RAG pipelines, autonomous agents, workflow automation, ecommerce platforms, and AI-native applications that work in production, not just demos.",
              "heading": "What we solve"
            },
            {
              "text": "AI changes the product itself, the architecture, and the operating model. We focus on AI-native delivery because shipping well means designing for reliability, integration, and measurable business impact from day one.",
              "heading": "Why AI-native"
            }
          ],
          "eyebrow": "Our Story",
          "heading": "Built by senior practitioners",
          "imageAlt": "senior team meeting office",
          "subheading": "Sattva AI started as a small team of senior builders who wanted to close the gap between AI ambition and production reality. We work directly with startups and enterprises to design, ship, and operationalize AI-native software that fits real constraints.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a free consultation",
          "secondaryImageAlt": "product design workshop laptops",
          "imageSrc": "https://images.unsplash.com/photo-1650433349342-3eefed21339f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxCdWlsdCUyMGJ5JTIwc2VuaW9yJTIwcHJhY3RpdGlvbmVyc3xlbnwwfHx8fDE3ODM1MTkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          "secondaryImageSrc": "https://images.unsplash.com/photo-1721466759653-5383d6be56cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwd29ya3Nob3AlMjBsYXB0b3BzfGVufDB8fHx8MTc4MzUxOTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 3,
        "heading": "Company Milestones",
        "variant": "vertical",
        "sectionBackground": "default",
        "dividerTop": "none",
        "dividerBottom": "none",
        "gradientHeading": false,
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "events": [
          {
            "id": 10,
            "date": "2021",
            "title": "Sattva AI founded",
            "description": "A senior product-and-engineering team formed around one goal: build practical AI software, not demos.",
            "icon": "spark"
          },
          {
            "id": 11,
            "date": "2022",
            "title": "First production AI shipped",
            "description": "We delivered our first live RAG system and workflow automation for a fast-moving startup.",
            "icon": "rocket"
          },
          {
            "id": 12,
            "date": "2023",
            "title": "Enterprise delivery expanded",
            "description": "We began supporting larger teams with secure integrations, reviewable agent workflows, and reliable deployment practices.",
            "icon": "building"
          },
          {
            "id": 13,
            "date": "2024",
            "title": "AI-native platforms launched",
            "description": "Our work broadened into ecommerce platforms, autonomous agents, and custom AI applications built for daily use.",
            "icon": "grid"
          },
          {
            "id": 14,
            "date": "2025",
            "title": "Production capability matured",
            "description": "We now design end-to-end systems for startups and enterprises, from retrieval pipelines to operational automation.",
            "icon": "shield"
          }
        ],
        "__component": "shared.timeline"
      },
      {
        "id": 107,
        "blockType": "stats-showcase",
        "props": {
          "stats": [
            {
              "label": "Senior-led delivery",
              "value": "100%",
              "prefix": null,
              "suffix": null
            },
            {
              "label": "Core specialties",
              "value": "4",
              "prefix": null,
              "suffix": null
            },
            {
              "label": "Handoff layers",
              "value": "0",
              "prefix": null,
              "suffix": null
            },
            {
              "label": "Years combined experience",
              "value": "10+",
              "prefix": null,
              "suffix": null
            }
          ],
          "heading": "Senior team. Real delivery."
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 108,
        "blockType": "testimonial-cards",
        "props": {
          "heading": "Why Clients Trust Us",
          "testimonials": [
            {
              "quote": "They made hard decisions fast, without making us feel rushed. The team stayed close to the product, asked the right questions, and shipped cleanly.",
              "authorName": "Avery Chen",
              "authorRole": "Head of Product, SaaS Platform"
            },
            {
              "quote": "Communication was unusually crisp. We always knew what was being built, why it mattered, and what tradeoffs were being made.",
              "authorName": "Priya Nair",
              "authorRole": "VP Engineering, Enterprise Software"
            },
            {
              "quote": "We worked directly with senior people the entire time. That meant fewer handoffs, better judgment, and a much faster path from idea to production.",
              "authorName": "Marcus Reed",
              "authorRole": "Founder, Commerce Startup"
            }
          ]
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 109,
        "blockType": "contact-split",
        "props": {
          "details": [
            {
              "icon": "phone",
              "label": "Phone",
              "value": "+1 (555) 014-2038"
            },
            {
              "icon": "email",
              "label": "Email",
              "value": "hello@sattva. ai"
            },
            {
              "icon": "address",
              "label": "Location",
              "value": "Remote, serving startups and enterprises"
            }
          ],
          "eyebrow": "Let’s build the right AI system",
          "heading": "Work With the Team",
          "hoursLabel": "Free consultation",
          "hoursValue": "Available by appointment for qualified teams",
          "subheading": "Talk directly with a senior team that ships production AI software. Get a practical read on scope, architecture, and the fastest path to value.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a call"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      }
    ],
    "path": "about-2"
  },
  {
    "title": "Contact",
    "slug": "contact-4",
    "excerpt": null,
    "layout": [
      {
        "id": 110,
        "blockType": "hero-split",
        "props": {
          "eyebrow": "Contact",
          "heading": "Build your AI product with Sattva",
          "imageAlt": "senior team planning session",
          "subheading": "Talk directly with a senior team about what to build, how to ship it, and what will work in your stack. For startups and enterprises ready to move beyond prototypes.",
          "primaryHref": "/contact",
          "primaryLabel": "Start a conversation",
          "imageSrc": "https://images.unsplash.com/photo-1690191864293-3fc9f1bd330b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5ODA5OTd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB0ZWFtJTIwcGxhbm5pbmclMjBzZXNzaW9ufGVufDB8fHx8MTc4MzUxOTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 111,
        "blockType": "cta-split",
        "props": {
          "heading": "Get in Touch",
          "description": "If you have a serious AI product to ship, we should talk. Qualified teams can book a free consultation to map the right path forward.",
          "primaryHref": "/contact",
          "primaryLabel": "Book a Consultation"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      },
      {
        "id": 112,
        "blockType": "content-centered",
        "props": {
          "body": "Reach out with a short summary of your product, the workflow or model you want to improve, and any constraints in your stack, timeline, or data. We review every qualified inquiry directly and typically reply within 1–2 business days. If you already have requirements, share them.",
          "eyebrow": "Contact details",
          "heading": "Talk to the people building it"
        },
        "headingColor": null,
        "textColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "backgroundImage": null,
        "backgroundOverlay": null,
        "backgroundGradientFrom": null,
        "backgroundGradientTo": null,
        "backgroundGradientAngle": null,
        "paddingY": null,
        "containerWidth": null,
        "motion": null,
        "motionDelay": null,
        "__component": "shared.custom-block"
      }
    ],
    "path": "contact-4"
  },
  {
    "title": "Privacy Policy",
    "slug": "privacy-policy",
    "excerpt": null,
    "layout": [
      {
        "id": 36,
        "body": "<h1>Privacy Policy</h1><p><em>This is starter boilerplate, not legal advice — have a qualified professional review it before launch.</em></p><p>We respect your privacy. This policy describes what we collect and why.</p><h2>What we collect</h2><p>Information you provide directly (such as a contact form or newsletter signup) and basic usage analytics.</p><h2>How we use it</h2><p>To respond to enquiries, deliver requested services, and improve this site. We do not sell personal data.</p><h2>Cookies</h2><p>This site may use cookies for essential functionality and anonymous analytics.</p><h2>Your rights</h2><p>You may request access to, correction of, or deletion of your personal data at any time via the contact page.</p><p>Last updated: 2026.</p>",
        "textColor": null,
        "variant": "standard",
        "headingColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "__component": "shared.rich-text"
      }
    ],
    "path": "privacy-policy"
  },
  {
    "title": "Terms of Service",
    "slug": "terms-of-service",
    "excerpt": null,
    "layout": [
      {
        "id": 37,
        "body": "<h1>Terms of Service</h1><p><em>This is starter boilerplate, not legal advice — have a qualified professional review it before launch.</em></p><p>By using this website you agree to these terms.</p><h2>Use of this site</h2><p>Content is provided for general information. Do not misuse the site or attempt to disrupt its operation.</p><h2>Intellectual property</h2><p>All content on this site belongs to the site owner unless stated otherwise.</p><h2>Liability</h2><p>The site is provided \"as is\" without warranties; to the extent permitted by law, liability for damages arising from its use is excluded.</p><h2>Changes</h2><p>These terms may be updated from time to time; continued use constitutes acceptance.</p><p>Last updated: 2026.</p>",
        "textColor": null,
        "variant": "standard",
        "headingColor": null,
        "backgroundColor": null,
        "borderColor": null,
        "borderRadius": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "sectionBackground": null,
        "dividerTop": null,
        "dividerBottom": null,
        "hoverEffect": null,
        "gradientHeading": false,
        "__component": "shared.rich-text"
      }
    ],
    "path": "terms-of-service"
  }
];

export const SITE_IDENTITY: SiteIdentityData = {
  "navVariant": "logo-left",
  "navLinks": [
    {
      "label": "Home",
      "url": "/home"
    },
    {
      "label": "Services",
      "url": "/services"
    },
    {
      "label": "Work",
      "url": "/work"
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "Contact",
      "url": "/contact"
    }
  ],
  "navCtaButtons": [],
  "footerLinks": [
    {
      "label": "Home",
      "url": "/home"
    },
    {
      "label": "Services",
      "url": "/services"
    },
    {
      "label": "Work",
      "url": "/work"
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "Contact",
      "url": "/contact"
    }
  ],
  "footerText": "Built with Sattva",
  "footerVariant": "minimal-dark"
};
