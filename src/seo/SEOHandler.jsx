import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoPages, siteConfig } from './seoConfig';
import { seoContentDatabase } from './seoContentData';

/**
 * Invisible SEO Manager component.
 * Synchronously injects and updates document.title, meta descriptions, canonicals,
 * OpenGraph, Twitter Cards, Breadcrumbs, FAQs, and schema.org JSON-LD scripts upon route changes.
 * 
 * NOTE: As per Google Search guidelines, <meta name="keywords"> is completely omitted.
 * ZERO UI / ZERO layout changes.
 */
export const SEOHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Normalize path by stripping trailing slash (except for root '/')
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const pageMeta = seoPages[path] || seoPages[location.pathname] || seoPages['/'];
    const pageContent = seoContentDatabase[path] || seoContentDatabase[location.pathname];

    // 1. Update Document Title
    if (pageMeta.title) {
      document.title = pageMeta.title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Remove legacy meta keywords tag if present in DOM
    const legacyKeywords = document.querySelector('meta[name="keywords"]');
    if (legacyKeywords) {
      legacyKeywords.remove();
    }

    // 2. Primary Meta Tags (No meta keywords per Google specification)
    updateMetaTag('name', 'description', pageMeta.description);
    updateMetaTag('name', 'robots', pageMeta.noIndex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const cleanCanonical = pageMeta.canonical || `https://www.wayzentechofficial.com${path === '/' ? '/' : path + '/'}`;
    canonicalLink.setAttribute('href', cleanCanonical);

    // 4. OpenGraph Tags
    updateMetaTag('property', 'og:site_name', siteConfig.brandName);
    updateMetaTag('property', 'og:title', pageMeta.title);
    updateMetaTag('property', 'og:description', pageMeta.description);
    updateMetaTag('property', 'og:url', cleanCanonical);
    updateMetaTag('property', 'og:type', pageMeta.ogType || 'website');
    updateMetaTag('property', 'og:image', `${siteConfig.domain}/logo.png`);

    // 5. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', pageMeta.title);
    updateMetaTag('name', 'twitter:description', pageMeta.description);
    updateMetaTag('name', 'twitter:image', `${siteConfig.domain}/logo.png`);

    // 6. Dynamic JSON-LD Structured Data Graph
    const existingSchemaScript = document.getElementById('dynamic-route-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.domain}/#organization`,
        "name": siteConfig.brandName,
        "alternateName": siteConfig.alternateNames,
        "url": siteConfig.domain,
        "logo": `${siteConfig.domain}/logo.png`,
        "image": `${siteConfig.domain}/logo.png`,
        "description": "WayZenTech provides website development, web apps, AI automation, SEO, digital marketing, and custom business software solutions in India.",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "foundingDate": siteConfig.foundingYear,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.address.streetAddress,
          "addressLocality": siteConfig.address.addressLocality,
          "addressRegion": siteConfig.address.addressRegion,
          "postalCode": siteConfig.address.postalCode,
          "addressCountry": siteConfig.address.addressCountry
        },
        "areaServed": siteConfig.serviceAreas,
        "sameAs": [
          siteConfig.instagram
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        "url": siteConfig.domain,
        "name": siteConfig.brandName,
        "alternateName": siteConfig.alternateNames,
        "publisher": {
          "@id": `${siteConfig.domain}/#organization`
        }
      }
    ];

    // Page-Specific Service or LocalBusiness Schema
    if (pageMeta.schemaType === 'Service') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageContent ? pageContent.h1 : pageMeta.primaryKeyword,
        "description": pageMeta.description,
        "provider": {
          "@id": `${siteConfig.domain}/#organization`
        },
        "serviceType": pageMeta.primaryKeyword,
        "areaServed": siteConfig.serviceAreas
      });
    } else if (pageMeta.schemaType === 'LocalBusiness' || pageMeta.location) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `WayZenTech - ${pageMeta.location || "India"}`,
        "description": pageMeta.description,
        "url": cleanCanonical,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": pageMeta.location || "Narasaraopet",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "areaServed": [pageMeta.location, "Andhra Pradesh", "Telangana", "Karnataka", "India"].filter(Boolean)
      });
    }

    // BreadcrumbList Schema (if breadcrumbs available)
    if (pageContent?.breadcrumbs && pageContent.breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": pageContent.breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.path === "/" ? siteConfig.domain : `${siteConfig.domain}${crumb.path}/`
        }))
      });
    }

    // FAQPage Schema (if FAQs available)
    if (pageContent?.faqs && pageContent.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pageContent.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.id = 'dynamic-route-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemas
    });
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('dynamic-route-schema');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [location.pathname]);

  return null; // Pure background component — Zero UI footprint
};

export default SEOHandler;
