/**
 * WayZenTech Master SEO Configuration (30 Exact Target Keywords)
 * Pure metadata and structured data definitions.
 * ZERO UI / Layout impact.
 */

export const siteConfig = {
  domain: "https://www.wayzentechofficial.com",
  brandName: "WayZenTech",
  alternateNames: [
    "WayZen Tech",
    "Way Zen Tech",
    "WayZenTech India",
    "WayZen Tech India"
  ],
  phone: "+91-9398724704",
  email: "wayzentech@gmail.com",
  whatsapp: "https://wa.me/919398724704",
  instagram: "https://instagram.com/way_zentech",
  foundingYear: "2023",
  address: {
    streetAddress: "Main Road",
    addressLocality: "Narasaraopet",
    addressRegion: "Andhra Pradesh",
    postalCode: "522601",
    addressCountry: "IN"
  },
  serviceAreas: [
    "Palnadu",
    "Narasaraopet",
    "Guntur",
    "Vijayawada",
    "Hyderabad",
    "Bangalore",
    "India"
  ]
};

/**
 * Exact 30 Target Keyword-to-URL Mapping & Metadata
 */
export const seoPages = {
  // Existing Base Pages
  "/": {
    primaryKeyword: "best web development company in India",
    secondaryKeywords: [
      "website development company in India",
      "AI automation company in India",
      "digital marketing agency in India",
      "custom billing software development"
    ],
    title: "WayZenTech | Web Development, AI Automation, SEO & Digital Marketing",
    description: "WayZenTech provides website and app development, AI solutions, business automation, SEO, digital marketing, billing software and custom digital solutions for businesses in India.",
    canonical: "https://www.wayzentechofficial.com/",
    ogType: "website",
    schemaType: "Organization"
  },
  "/services": {
    primaryKeyword: "custom website development services in India",
    secondaryKeywords: [
      "AI solutions for small businesses",
      "digital marketing services for small businesses",
      "business software development company in India"
    ],
    title: "Services | Web Development, AI, SEO & Digital Growth | WayZenTech",
    description: "Explore WayZenTech's high-performance services: custom website development, AI automation, performance ads, social media marketing, and business software in India.",
    canonical: "https://www.wayzentechofficial.com/services",
    ogType: "website",
    schemaType: "Service"
  },
  "/about": {
    primaryKeyword: "about WayZenTech",
    secondaryKeywords: ["WayZenTech India", "software development company India", "AI development team"],
    title: "About WayZenTech | Technology Collective & AI Engineering",
    description: "Learn about WayZenTech, our engineering philosophy, and our mission delivering scalable web applications, AI automation, and digital growth for businesses.",
    canonical: "https://www.wayzentechofficial.com/about",
    ogType: "website",
    schemaType: "AboutPage"
  },
  "/team": {
    primaryKeyword: "WayZenTech team",
    secondaryKeywords: ["software engineers India", "AI developers", "WayZen Core Hub"],
    title: "Our Team & Core Engineering Hub | WayZenTech",
    description: "Meet the software engineers, designers, and growth specialists behind WayZenTech's digital products, AI systems, and marketing architecture.",
    canonical: "https://www.wayzentechofficial.com/team",
    ogType: "website",
    schemaType: "ProfilePage"
  },
  "/what-is-wayzentech": {
    primaryKeyword: "what is WayZenTech",
    secondaryKeywords: ["WayZenTech foundry", "digital assets engineering", "scalable web apps"],
    title: "What is WayZenTech? | Elite Tech Foundry & Engineering Lab",
    description: "Discover WayZenTech: an India-based engineering collective architecting modern websites, AI solutions, and digital growth assets for businesses.",
    canonical: "https://www.wayzentechofficial.com/what-is-wayzentech",
    ogType: "website",
    schemaType: "WebPage"
  },
  "/admin": {
    title: "System Access Portal | WayZenTech",
    description: "WayZenTech administrative portal and system access.",
    canonical: "https://www.wayzentechofficial.com/admin",
    noIndex: true
  },

  // 1. best web development company in Palnadu
  "/web-development-company-palnadu": {
    keywordId: 1,
    primaryKeyword: "best web development company in Palnadu",
    secondaryKeywords: [
      "website development in Palnadu",
      "web developers in Palnadu",
      "custom website development",
      "business website development",
      "web development services"
    ],
    title: "Best Web Development Company in Palnadu | WayZenTech",
    description: "WayZenTech provides professional website and web development services for businesses in Palnadu, helping businesses build modern and scalable websites.",
    canonical: "https://www.wayzentechofficial.com/web-development-company-palnadu/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Palnadu"
  },

  // 2. website development company in Vijayawada
  "/website-development-company-vijayawada": {
    keywordId: 2,
    primaryKeyword: "website development company in Vijayawada",
    secondaryKeywords: [
      "website developers in Vijayawada",
      "web development services Vijayawada",
      "custom website development",
      "business websites",
      "responsive websites"
    ],
    title: "Website Development Company in Vijayawada | WayZenTech",
    description: "WayZenTech provides custom website development services for businesses in Vijayawada, including responsive business websites and modern web solutions.",
    canonical: "https://www.wayzentechofficial.com/website-development-company-vijayawada/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Vijayawada"
  },

  // 3. best digital marketing agency in Vijayawada
  "/digital-marketing-agency-vijayawada": {
    keywordId: 3,
    primaryKeyword: "best digital marketing agency in Vijayawada",
    secondaryKeywords: [
      "digital marketing services Vijayawada",
      "SEO Vijayawada",
      "social media marketing Vijayawada",
      "Google Ads Vijayawada"
    ],
    title: "Best Digital Marketing Agency in Vijayawada | WayZenTech",
    description: "WayZenTech provides digital marketing, SEO, social media marketing and Google Ads solutions for businesses in Vijayawada.",
    canonical: "https://www.wayzentechofficial.com/digital-marketing-agency-vijayawada/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Vijayawada"
  },

  // 4. SEO company in Guntur and Palnadu
  "/seo-company-guntur-palnadu": {
    keywordId: 4,
    primaryKeyword: "SEO company in Guntur and Palnadu",
    secondaryKeywords: [
      "SEO services Guntur",
      "SEO services Palnadu",
      "local SEO",
      "Google ranking",
      "business SEO"
    ],
    title: "SEO Company in Guntur & Palnadu | WayZenTech",
    description: "WayZenTech provides SEO and local SEO services for businesses in Guntur and Palnadu to improve search visibility and attract relevant customers.",
    canonical: "https://www.wayzentechofficial.com/seo-company-guntur-palnadu/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Guntur & Palnadu"
  },

  // 5, 11, 13. web development company near me / best web development company in India / for small businesses
  "/web-development": {
    keywordId: 5,
    primaryKeyword: "best web development company in India",
    secondaryKeywords: [
      "web development company near me",
      "web development company for small businesses",
      "custom web development services",
      "business websites",
      "scalable web applications"
    ],
    title: "Best Web Development Company in India | WayZenTech",
    description: "WayZenTech provides custom web development services for businesses in India, including responsive websites, web applications and modern digital solutions.",
    canonical: "https://www.wayzentechofficial.com/web-development/",
    ogType: "website",
    schemaType: "Service"
  },

  // 6, 22, 23. digital marketing agency near me / best digital marketing agency in India
  "/digital-marketing": {
    keywordId: 6,
    primaryKeyword: "best digital marketing agency in India",
    secondaryKeywords: [
      "digital marketing agency near me",
      "digital marketing services for small businesses",
      "social media marketing",
      "Google Ads management",
      "online marketing agency"
    ],
    title: "Best Digital Marketing Agency in India | WayZenTech",
    description: "WayZenTech provides digital marketing, SEO, social media marketing and Google Ads solutions designed to help businesses grow online.",
    canonical: "https://www.wayzentechofficial.com/digital-marketing/",
    ogType: "website",
    schemaType: "Service"
  },

  // 7. web development company in Hyderabad
  "/web-development-company-hyderabad": {
    keywordId: 7,
    primaryKeyword: "web development company in Hyderabad",
    secondaryKeywords: [
      "website development Hyderabad",
      "web developers Hyderabad",
      "custom websites Hyderabad",
      "web applications Hyderabad"
    ],
    title: "Web Development Company in Hyderabad | WayZenTech",
    description: "WayZenTech provides custom website and web application development services for businesses in Hyderabad and surrounding areas.",
    canonical: "https://www.wayzentechofficial.com/web-development-company-hyderabad/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Hyderabad"
  },

  // 8. AI automation company in Hyderabad
  "/ai-automation-company-hyderabad": {
    keywordId: 8,
    primaryKeyword: "AI automation company in Hyderabad",
    secondaryKeywords: [
      "AI automation Hyderabad",
      "business automation Hyderabad",
      "AI solutions Hyderabad",
      "workflow automation Hyderabad",
      "AI chatbot development"
    ],
    title: "AI Automation Company in Hyderabad | WayZenTech",
    description: "WayZenTech provides AI automation and business process automation solutions for businesses in Hyderabad, helping automate repetitive workflows and tasks.",
    canonical: "https://www.wayzentechofficial.com/ai-automation-company-hyderabad/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Hyderabad"
  },

  // 9. web development company in Bangalore
  "/web-development-company-bangalore": {
    keywordId: 9,
    primaryKeyword: "web development company in Bangalore",
    secondaryKeywords: [
      "website development Bangalore",
      "web developers Bangalore",
      "custom websites Bangalore",
      "SaaS web development Bangalore"
    ],
    title: "Web Development Company in Bangalore | WayZenTech",
    description: "WayZenTech provides custom website and web development solutions for businesses in Bangalore, including modern business websites and web applications.",
    canonical: "https://www.wayzentechofficial.com/web-development-company-bangalore/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Bangalore"
  },

  // 10. digital marketing agency in Bangalore
  "/digital-marketing-agency-bangalore": {
    keywordId: 10,
    primaryKeyword: "digital marketing agency in Bangalore",
    secondaryKeywords: [
      "digital marketing Bangalore",
      "SEO services Bangalore",
      "social media marketing Bangalore",
      "Google Ads Bangalore"
    ],
    title: "Digital Marketing Agency in Bangalore | WayZenTech",
    description: "WayZenTech provides SEO, digital marketing, social media marketing and Google Ads solutions for businesses in Bangalore.",
    canonical: "https://www.wayzentechofficial.com/digital-marketing-agency-bangalore/",
    ogType: "website",
    schemaType: "LocalBusiness",
    location: "Bangalore"
  },

  // 12, 14, 15. website development company in India / custom / best website design
  "/website-development": {
    keywordId: 12,
    primaryKeyword: "website development company in India",
    secondaryKeywords: [
      "custom website development services in India",
      "best website design company in India",
      "responsive website development",
      "business website design"
    ],
    title: "Website Development Company in India | WayZenTech",
    description: "Build a professional, responsive business website with WayZenTech's custom website development services for businesses across India.",
    canonical: "https://www.wayzentechofficial.com/website-development/",
    ogType: "website",
    schemaType: "Service"
  },

  // 16. mobile app development company in India
  "/mobile-app-development": {
    keywordId: 16,
    primaryKeyword: "mobile app development company in India",
    secondaryKeywords: [
      "Android app development company in India",
      "custom mobile app development",
      "cross platform app development",
      "business mobile apps"
    ],
    title: "Mobile App Development Company in India | WayZenTech",
    description: "WayZenTech develops custom mobile applications for businesses, startups and organizations with modern technology and scalable architecture.",
    canonical: "https://www.wayzentechofficial.com/mobile-app-development/",
    ogType: "website",
    schemaType: "Service"
  },

  // 17. AI development company in India
  "/ai-development": {
    keywordId: 17,
    primaryKeyword: "AI development company in India",
    secondaryKeywords: [
      "AI solutions company in India",
      "custom AI systems India",
      "AI implementation services",
      "enterprise AI development"
    ],
    title: "AI Development Company in India | WayZenTech",
    description: "WayZenTech develops custom AI solutions, intelligent applications and AI-powered business systems for organizations in India.",
    canonical: "https://www.wayzentechofficial.com/ai-development/",
    ogType: "website",
    schemaType: "Service"
  },

  // 18, 19. AI automation services for businesses / AI automation company in India
  "/ai-automation": {
    keywordId: 18,
    primaryKeyword: "AI automation services for businesses",
    secondaryKeywords: [
      "AI automation company in India",
      "AI chatbot development company",
      "AI workflow automation",
      "AI business automation services"
    ],
    title: "AI Automation Services for Businesses | WayZenTech",
    description: "Automate repetitive business processes with AI workflows, chatbots, integrations and custom automation solutions from WayZenTech.",
    canonical: "https://www.wayzentechofficial.com/ai-automation/",
    ogType: "website",
    schemaType: "Service"
  },

  // 20. business process automation services
  "/business-automation": {
    keywordId: 20,
    primaryKeyword: "business process automation services",
    secondaryKeywords: [
      "business automation services",
      "workflow automation services",
      "CRM automation services",
      "process automation company"
    ],
    title: "Business Process Automation Services | WayZenTech",
    description: "Automate repetitive workflows and business processes with custom automation solutions designed to improve efficiency and reduce manual work.",
    canonical: "https://www.wayzentechofficial.com/business-automation/",
    ogType: "website",
    schemaType: "Service"
  },

  // 21. WhatsApp automation services for businesses
  "/whatsapp-automation": {
    keywordId: 21,
    primaryKeyword: "WhatsApp automation services for businesses",
    secondaryKeywords: [
      "WhatsApp chatbot development company",
      "WhatsApp business automation services",
      "automated WhatsApp enquiries",
      "WhatsApp API solutions"
    ],
    title: "WhatsApp Automation Services for Businesses | WayZenTech",
    description: "Automate WhatsApp enquiries, customer communication and business workflows with custom WhatsApp automation solutions from WayZenTech.",
    canonical: "https://www.wayzentechofficial.com/whatsapp-automation/",
    ogType: "website",
    schemaType: "Service"
  },

  // 24, 25. best SEO company in India / SEO services for small businesses
  "/seo": {
    keywordId: 24,
    primaryKeyword: "best SEO company in India",
    secondaryKeywords: [
      "SEO services in India",
      "SEO services for small businesses",
      "technical SEO services",
      "Google ranking services"
    ],
    title: "Best SEO Company in India | WayZenTech",
    description: "WayZenTech provides SEO services including technical SEO, on-page SEO and local SEO to help businesses improve their Google search visibility.",
    canonical: "https://www.wayzentechofficial.com/seo/",
    ogType: "website",
    schemaType: "Service"
  },

  // 26. local SEO services for businesses
  "/local-seo": {
    keywordId: 26,
    primaryKeyword: "local SEO services for businesses",
    secondaryKeywords: [
      "local SEO company in India",
      "Google Business Profile optimization",
      "local business SEO",
      "Google map ranking services"
    ],
    title: "Local SEO Services for Businesses | WayZenTech",
    description: "Improve local search visibility with local SEO services designed to help businesses reach customers searching on Google in their service areas.",
    canonical: "https://www.wayzentechofficial.com/local-seo/",
    ogType: "website",
    schemaType: "Service"
  },

  // 27. Google Ads management services in India
  "/google-ads": {
    keywordId: 27,
    primaryKeyword: "Google Ads management services in India",
    secondaryKeywords: [
      "Google Ads agency in India",
      "PPC management services in India",
      "Google search ads company",
      "pay per click advertising"
    ],
    title: "Google Ads Management Services in India | WayZenTech",
    description: "WayZenTech provides Google Ads management services to help businesses reach relevant customers through targeted paid search campaigns.",
    canonical: "https://www.wayzentechofficial.com/google-ads/",
    ogType: "website",
    schemaType: "Service"
  },

  // 28. custom billing software development
  "/billing-software": {
    keywordId: 28,
    primaryKeyword: "custom billing software development",
    secondaryKeywords: [
      "billing software development company",
      "custom billing software for businesses",
      "business billing software",
      "POS billing software"
    ],
    title: "Custom Billing Software Development | WayZenTech",
    description: "WayZenTech develops custom billing software and business billing solutions tailored to the workflow and requirements of your business.",
    canonical: "https://www.wayzentechofficial.com/billing-software/",
    ogType: "website",
    schemaType: "Service"
  },

  // 29. business software development company in India
  "/custom-software-development": {
    keywordId: 29,
    primaryKeyword: "business software development company in India",
    secondaryKeywords: [
      "custom software development company in India",
      "custom business software development",
      "business management software development",
      "software development company for small businesses"
    ],
    title: "Business Software Development Company in India | WayZenTech",
    description: "WayZenTech develops custom business software, applications and digital systems designed around the specific needs of growing businesses.",
    canonical: "https://www.wayzentechofficial.com/custom-software-development/",
    ogType: "website",
    schemaType: "Service"
  },

  // 30. ecommerce website development company in India
  "/ecommerce-development": {
    keywordId: 30,
    primaryKeyword: "ecommerce website development company in India",
    secondaryKeywords: [
      "custom ecommerce website development",
      "ecommerce development company in India",
      "online store development services",
      "ecommerce web design"
    ],
    title: "Ecommerce Website Development Company in India | WayZenTech",
    description: "WayZenTech develops responsive ecommerce websites with modern storefronts, product management, payments and business-focused functionality.",
    canonical: "https://www.wayzentechofficial.com/ecommerce-development/",
    ogType: "website",
    schemaType: "Service"
  }
};
