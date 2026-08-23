import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoPages, siteConfig } from './seoConfig';

/**
 * Invisible SEO Manager component.
 * Synchronously injects and updates document.title, meta tags, canonicals,
 * OpenGraph, Twitter Cards, and schema.org JSON-LD scripts upon route changes.
 * ZERO UI / ZERO DOM changes.
 */
export const SEOHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Normalize path by stripping trailing slash (except for root '/')
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const pageData = seoPages[path] || seoPages[location.pathname] || seoPages['/'];

    // 1. Update Document Title
    if (pageData.title) {
      document.title = pageData.title;
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

    // 2. Primary Meta Tags
    updateMetaTag('name', 'description', pageData.description);
    const keywordsStr = [
      pageData.primaryKeyword,
      ...(pageData.secondaryKeywords || [])
    ].filter(Boolean).join(', ');
    updateMetaTag('name', 'keywords', keywordsStr);
    updateMetaTag('name', 'robots', pageData.noIndex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageData.canonical || `https://www.wayzentechofficial.com${path}/`);

    // 4. OpenGraph Tags
    updateMetaTag('property', 'og:site_name', siteConfig.brandName);
    updateMetaTag('property', 'og:title', pageData.title);
    updateMetaTag('property', 'og:description', pageData.description);
    updateMetaTag('property', 'og:url', pageData.canonical || `https://www.wayzentechofficial.com${path}/`);
    updateMetaTag('property', 'og:type', pageData.ogType || 'website');
    updateMetaTag('property', 'og:image', `${siteConfig.domain}/logo.png`);

    // 5. Twitter Card Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', pageData.title);
    updateMetaTag('name', 'twitter:description', pageData.description);
    updateMetaTag('name', 'twitter:image', `${siteConfig.domain}/logo.png`);

    // 6. Dynamic JSON-LD Structured Data
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

    // Page-Specific Schema
    if (pageData.schemaType === 'Service') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageData.primaryKeyword,
        "description": pageData.description,
        "provider": {
          "@id": `${siteConfig.domain}/#organization`
        },
        "serviceType": pageData.primaryKeyword,
        "areaServed": siteConfig.serviceAreas
      });
    } else if (pageData.schemaType === 'LocalBusiness' || pageData.location) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `WayZenTech - ${pageData.location || "India"}`,
        "description": pageData.description,
        "url": pageData.canonical,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": pageData.location || "Narasaraopet",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "areaServed": [pageData.location, "Andhra Pradesh", "Telangana", "Karnataka", "India"].filter(Boolean)
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
