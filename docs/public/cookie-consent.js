/**
 * CAOS Docs - Cookie Consent Banner
 * GDPR-compliant cookie consent with Google Consent Mode v2
 * Only shows in GDPR regions (EU timezones)
 */
(function () {
  "use strict";

  const CONSENT_KEY = "caos-cookie-consent";
  const saved = localStorage.getItem(CONSENT_KEY);

  function applyConsent(granted) {
    if (typeof gtag === "function") {
      gtag("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }

  function hideBanner() {
    const banner = document.getElementById("cookie-consent-banner");
    if (banner) {
      banner.style.opacity = "0";
      banner.style.transform = "translateY(100%)";
      setTimeout(() => banner.remove(), 300);
    }
  }

  function savePref(granted) {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ granted, ts: Date.now() })
    );
    applyConsent(granted);
    hideBanner();
  }

  // Expose for footer link
  window.openCookieSettings = function () {
    localStorage.removeItem(CONSENT_KEY);
    showBanner();
  };

  function showBanner() {
    if (document.getElementById("cookie-consent-banner")) return;

    const banner = document.createElement("div");
    banner.id = "cookie-consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML = `
      <div style="max-width:42rem;margin:0 auto;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <p style="flex:1;min-width:200px;margin:0;font-size:0.85rem;line-height:1.5">
          We use cookies for analytics to improve this documentation.
          No advertising cookies are used.
        </p>
        <div style="display:flex;gap:0.5rem;flex-shrink:0">
          <button id="cc-reject" style="padding:0.4rem 1rem;border:1px solid #666;border-radius:0.375rem;background:transparent;color:inherit;cursor:pointer;font-size:0.8rem">Decline</button>
          <button id="cc-accept" style="padding:0.4rem 1rem;border:none;border-radius:0.375rem;background:#6366f1;color:#fff;cursor:pointer;font-size:0.8rem;font-weight:500">Accept</button>
        </div>
      </div>
    `;
    Object.assign(banner.style, {
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      padding: "1rem 1.5rem",
      background: "var(--sl-color-bg, #1a1a2e)",
      borderTop: "1px solid var(--sl-color-gray-5, #333)",
      zIndex: "9999",
      transition: "opacity 0.3s, transform 0.3s",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.15)",
    });
    document.body.appendChild(banner);

    document.getElementById("cc-accept").addEventListener("click", () => savePref(true));
    document.getElementById("cc-reject").addEventListener("click", () => savePref(false));
  }

  // On load
  if (saved) {
    try {
      applyConsent(JSON.parse(saved).granted);
    } catch {
      localStorage.removeItem(CONSENT_KEY);
    }
  } else if (window.__isGDPRRegion) {
    // Only show banner in GDPR regions
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", showBanner);
    } else {
      showBanner();
    }
  } else {
    // Non-GDPR: grant analytics by default (already set in consent defaults)
    applyConsent(true);
  }
})();
