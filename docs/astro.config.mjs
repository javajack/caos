// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://javajack.github.io",
  base: "/caos",
  integrations: [
    starlight({
      title: "CAOS",
      description:
        "Complete market research, competitive analysis, and product strategy for CA practice management, CRM, and document intelligence SaaS. By Rakesh Waghela.",
      social: [
        { icon: "x.com", label: "Rakesh on X", href: "https://x.com/webiyo" },
        {
          icon: "linkedin",
          label: "Rakesh on LinkedIn",
          href: "https://www.linkedin.com/in/rakeshwaghela",
        },
        {
          icon: "external",
          label: "Book a Consultation",
          href: "https://topmate.io/rakeshwaghela",
        },
      ],
      components: {
        Footer: "./src/components/overrides/Footer.astro",
        SiteTitle: "./src/components/overrides/SiteTitle.astro",
      },
      head: [
        // Google Consent Mode v2 - MUST load BEFORE gtag.js (synchronous)
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            function isGDPRRegion() {
              const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
              const euTimezones = ['Europe/', 'Atlantic/Reykjavik', 'Atlantic/Azores', 'Atlantic/Madeira'];
              return euTimezones.some(zone => tz.startsWith(zone));
            }

            const isGDPR = isGDPRRegion();

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': isGDPR ? 'denied' : 'granted',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500,
            });

            window.__isGDPRRegion = isGDPR;
          `,
        },
        // Google Analytics
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-G986QLPFZ1",
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G986QLPFZ1', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });
          `,
        },
        // Yandex Webmaster verification
        {
          tag: "meta",
          attrs: { name: "yandex-verification", content: "5281e40eca9463d2" },
        },
        // Open Graph images
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://javajack.github.io/caos/og-image.png",
          },
        },
        { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://javajack.github.io/caos/og-image.png",
          },
        },
        // Cloudflare Web Analytics
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": '{"token": "7ce325bb227e4b42a8406f369ff4e788"}',
          },
        },
        // Cookie Consent Banner
        {
          tag: "script",
          attrs: { defer: true, src: "/caos/cookie-consent.js" },
        },
        // LLM optimization meta tags
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: "index, follow, max-snippet:-1, max-image-preview:large",
          },
        },
        // Schema.org structured data
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "CAOS - CA Practice Management Research",
                url: "https://javajack.github.io/caos/",
                description:
                  "Complete market research, competitive analysis, and product strategy for CA practice management, CRM, and document intelligence SaaS in India.",
                author: { "@id": "#rakesh" },
                keywords: [
                  "CA practice management",
                  "chartered accountant software",
                  "CA CRM",
                  "CA firm management",
                  "document intelligence",
                  "practice management SaaS India",
                  "CA workflow automation",
                  "tax practice management",
                  "accounting firm software",
                  "ICAI",
                ],
              },
              {
                "@type": "Person",
                "@id": "#rakesh",
                name: "Rakesh Waghela",
                url: "https://www.linkedin.com/in/rakeshwaghela",
                jobTitle: "Technology & Product Consultant",
                sameAs: [
                  "https://x.com/webiyo",
                  "https://www.linkedin.com/in/rakeshwaghela",
                  "https://topmate.io/rakeshwaghela",
                ],
              },
              {
                "@type": "ResearchProject",
                name: "CAOS Market Research",
                description:
                  "Comprehensive market research and competitive analysis for building a CA practice management, CRM, and document intelligence SaaS platform for Indian Chartered Accountant firms.",
                author: { "@id": "#rakesh" },
                about: [
                  "Chartered Accountant Practice Management",
                  "CRM for CA Firms",
                  "Document Intelligence",
                  "Indian Tax Practice Software",
                ],
              },
            ],
          }),
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Overview", slug: "" }],
        },
        {
          label: "Market Research",
          items: [
            { label: "Market Overview", slug: "market/overview" },
            { label: "CA Profession Landscape", slug: "market/ca-landscape" },
            { label: "Market Sizing & TAM", slug: "market/tam" },
            {
              label: "Seasonality & Business Cycles",
              slug: "market/seasonality",
            },
            { label: "Client Segments CAs Serve", slug: "market/client-segments" },
            { label: "Pain Points & Workflows", slug: "market/pain-points" },
            { label: "Technology Adoption", slug: "market/tech-adoption" },
            { label: "CA Firm Economics", slug: "market/ca-firm-economics" },
            { label: "Regulatory Opportunity", slug: "market/regulatory-opportunity" },
          ],
        },
        {
          label: "Competitor Analysis",
          items: [
            { label: "Competitive Landscape", slug: "competitors/landscape" },
            { label: "Comparison Matrix", slug: "competitors/comparison-matrix" },
            { label: "Feature Gap Analysis", slug: "competitors/feature-gaps" },
            {
              label: "Practice Management",
              collapsed: true,
              items: [
                { label: "SimplifyPractice", slug: "competitors/simplifypractice" },
                { label: "Jamku", slug: "competitors/jamku" },
                { label: "PracticeGuru", slug: "competitors/practiceguru" },
                { label: "Practive", slug: "competitors/practive" },
                { label: "QwikCA", slug: "competitors/qwikca" },
                { label: "CA Dashboard", slug: "competitors/cadashboard" },
                { label: "Zoho Practice", slug: "competitors/zoho-practice" },
              ],
            },
            {
              label: "Compliance & Tax",
              collapsed: true,
              items: [
                { label: "Masters India", slug: "competitors/masters-india" },
                { label: "ComplyRelax", slug: "competitors/complyrelax" },
                { label: "Finexo", slug: "competitors/finexo" },
                { label: "TaxOne by Vyapar", slug: "competitors/taxone" },
              ],
            },
            {
              label: "Accounting & Bookkeeping",
              collapsed: true,
              items: [
                { label: "WebLedger", slug: "competitors/webledger" },
                { label: "Accomation", slug: "competitors/accomation" },
                { label: "TheMunim", slug: "competitors/themunim" },
                { label: "BookKeeper", slug: "competitors/bookkeeper" },
                { label: "Bizalys", slug: "competitors/bizalys" },
              ],
            },
            {
              label: "Document & Communication",
              collapsed: true,
              items: [
                { label: "VouchrIT", slug: "competitors/vouchrit" },
                { label: "Digital Doc Sys", slug: "competitors/digitaldocsys" },
                { label: "Vidur", slug: "competitors/vidur" },
              ],
            },
            {
              label: "AI & Emerging",
              collapsed: true,
              items: [
                { label: "Vaive AI", slug: "competitors/vaive-ai" },
                { label: "AI Accountant", slug: "competitors/ai-accountant" },
                { label: "FinsightAnalytics", slug: "competitors/finsightanalytics" },
              ],
            },
            {
              label: "Task & Workflow",
              collapsed: true,
              items: [
                { label: "MyTask", slug: "competitors/mytask" },
                { label: "Turia", slug: "competitors/turia" },
                { label: "Papilio", slug: "competitors/papilio" },
              ],
            },
            {
              label: "International",
              collapsed: true,
              items: [
                { label: "Karbon HQ", slug: "competitors/karbon-hq" },
              ],
            },
          ],
        },
        {
          label: "Product Strategy",
          items: [
            { label: "Vision & Positioning", slug: "strategy/vision" },
            { label: "USP & Wedge", slug: "strategy/usp-wedge" },
            { label: "Moat & Defensibility", slug: "strategy/moat" },
            { label: "Feature Prioritization", slug: "strategy/features" },
            { label: "MVP Definition", slug: "strategy/mvp" },
            { label: "Product Roadmap", slug: "strategy/roadmap" },
            { label: "Competitive Response", slug: "strategy/competitive-response" },
            { label: "Distribution Strategy", slug: "strategy/distribution" },
            { label: "Risk Analysis", slug: "strategy/risk-analysis" },
          ],
        },
        {
          label: "Business Model",
          items: [
            { label: "Pricing Strategy", slug: "business-model/pricing" },
            { label: "Revenue Model", slug: "business-model/revenue" },
            { label: "Unit Economics", slug: "business-model/unit-economics" },
          ],
        },
        {
          label: "Go-to-Market",
          items: [
            { label: "GTM Strategy", slug: "gtm/strategy" },
            { label: "Customer Acquisition", slug: "gtm/acquisition" },
            { label: "Growth Loops", slug: "gtm/growth-loops" },
            { label: "Upsell & Cross-sell", slug: "gtm/upsell-cross-sell" },
          ],
        },
        {
          label: "Features",
          items: [
            { label: "Feature Catalog", slug: "features/catalog" },
            { label: "Workflow Engine", slug: "features/workflow" },
            { label: "CRM & Client Management", slug: "features/crm" },
            { label: "Document Intelligence", slug: "features/document-intelligence" },
            { label: "Communication Hub", slug: "features/communication" },
            { label: "Billing & Invoicing", slug: "features/billing" },
            { label: "Compliance Calendar", slug: "features/compliance-calendar" },
            { label: "Client Portal", slug: "features/client-portal" },
            { label: "Analytics & Reporting", slug: "features/analytics" },
            { label: "Practice in a Box", slug: "features/practice-in-a-box" },
          ],
        },
      ],
    }),
  ],
});
