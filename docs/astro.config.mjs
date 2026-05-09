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
        // Facebook Open Graph
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
          attrs: { property: "og:image:type", content: "image/png" },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content:
              "CAOS - CA Practice Management Research by Rakesh Waghela",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "article:author",
            content: "https://www.linkedin.com/in/rakeshwaghela",
          },
        },
        {
          tag: "meta",
          attrs: { property: "article:section", content: "Technology" },
        },
        {
          tag: "meta",
          attrs: {
            property: "article:tag",
            content:
              "CA Practice Management, Chartered Accountant Software, SaaS, India, CRM, Document Intelligence",
          },
        },
        // Twitter Card
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://javajack.github.io/caos/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image:alt",
            content:
              "CAOS - CA Practice Management Research by Rakesh Waghela",
          },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:creator", content: "@webiyo" },
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
          label: "Overview",
          items: [
            { label: "Welcome", slug: "" },
            { label: "The thesis", slug: "overview/thesis" },
            { label: "Flywheel in one picture", slug: "overview/flywheel-in-one-picture" },
            { label: "Who this is for", slug: "overview/who-this-is-for" },
          ],
        },
        {
          label: "The Flywheel",
          items: [
            { label: "The composite", slug: "flywheel/composite" },
            { label: "Four candidates", slug: "flywheel/four-candidates" },
            { label: "Phase 1 — CA-Led Practitioner Network", slug: "flywheel/phase-1-ca-led" },
            { label: "Phase 2 — Vendor-Network Fact Graph", slug: "flywheel/phase-2-vendor-network" },
            { label: "Phase 3 — Audit Workspace Bridge", slug: "flywheel/phase-3-audit-workspace" },
            { label: "Phase 4 — DPI Fact Graph", slug: "flywheel/phase-4-dpi-graph" },
            { label: "Minimum viable flywheel", slug: "flywheel/minimum-viable" },
            { label: "Sizing math", slug: "flywheel/sizing-math" },
          ],
        },
        {
          label: "Stakeholder Atlas",
          items: [
            { label: "The 14 stakeholder classes", slug: "stakeholders/overview" },
            { label: "Practitioners — CA / CS / CMA / Valuer / IP", slug: "stakeholders/practitioners" },
            { label: "In-house finance teams (11 personas)", slug: "stakeholders/in-house-finance" },
            { label: "Counterparties — vendors + customers", slug: "stakeholders/counterparties" },
            { label: "Auditors — Big-4 / Big-6 / mid-tier", slug: "stakeholders/auditors" },
            { label: "Tech & service partners", slug: "stakeholders/tech-partners" },
            { label: "Institutional capital", slug: "stakeholders/institutional-capital" },
            { label: "The bridge persona (60.8%)", slug: "stakeholders/bridge-persona" },
            { label: "30+ document flows", slug: "stakeholders/document-flows" },
          ],
        },
        {
          label: "Market",
          items: [
            { label: "Overview — India's compliance economy", slug: "market/overview" },
            { label: "TAM sizing (verified)", slug: "market/tam-sizing" },
            { label: "Regulatory tailwinds", slug: "market/regulatory-tailwinds" },
            { label: "Workflow volumes", slug: "market/workflow-volumes" },
          ],
        },
        {
          label: "Product",
          items: [
            { label: "Overview — primitives, not features", slug: "product/overview" },
            { label: "15 atomic primitives", slug: "product/atomic-primitives" },
            { label: "25 use cases + 7 bridges", slug: "product/use-cases" },
            { label: "Document intelligence pipeline", slug: "product/document-intelligence" },
            { label: "Tally / ERP integration", slug: "product/tally-erp-integration" },
            { label: "Architecture", slug: "product/architecture" },
          ],
        },
        {
          label: "Business Model",
          items: [
            { label: "Three SKUs", slug: "business-model/three-skus" },
            { label: "Pricing architecture", slug: "business-model/pricing-architecture" },
            { label: "Unit economics", slug: "business-model/unit-economics" },
            { label: "Revenue path", slug: "business-model/revenue-path" },
          ],
        },
        {
          label: "Go-to-Market",
          items: [
            { label: "Channel architecture", slug: "gtm/channel-architecture" },
            { label: "CA referral", slug: "gtm/ca-referral" },
            { label: "Tally Master partner pilot", slug: "gtm/tally-partners" },
            { label: "Mid-tier audit firm partnerships", slug: "gtm/audit-firm-partnerships" },
            { label: "DPI ecosystem (AA / GSP / ERI)", slug: "gtm/dpi-ecosystem" },
            { label: "Sequencing — the 60-month path", slug: "gtm/sequencing" },
          ],
        },
        {
          label: "Competitors",
          items: [
            { label: "Landscape", slug: "competitors/landscape" },
            { label: "Comparison matrix", slug: "competitors/comparison-matrix" },
            { label: "Feature gaps", slug: "competitors/feature-gaps" },
            { label: "Enterprise threats", slug: "competitors/enterprise-threats" },
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
          label: "Risks & Decisions",
          items: [
            { label: "Five failure modes", slug: "risks/failure-modes" },
            { label: "Counterfactual scenarios", slug: "risks/counterfactual" },
            { label: "Seven decisions (D1–D7)", slug: "decisions/d1-d7" },
            { label: "Architectural pre-investments (10 + 8)", slug: "decisions/architectural-pre-investments" },
          ],
        },
        {
          label: "Sources",
          items: [
            { label: "Data atlas (31 tables)", slug: "method/data-atlas" },
            { label: "Source quality legend", slug: "method/source-quality-legend" },
            { label: "Open research questions", slug: "method/open-questions" },
          ],
        },
      ],
    }),
  ],
});
