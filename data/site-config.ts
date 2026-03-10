export type NavLink = {
  href: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  slug: string;
  summary: string;
  detail: string;
  bestFor: string;
  typicalProblems: string[];
  quoteCtaLabel: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  intro: string;
  serviceSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export type TestimonialItem = {
  name: string;
  area: string;
  tag: string;
  quote: string;
  problem: string;
  solution: string;
  outcome: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PageSeo = {
  title: string;
  description: string;
  canonical: string;
  openGraphTitle: string;
  openGraphDescription: string;
};

export const siteConfig = {
  businessProfile: {
    // Customize these first when cloning for a new local business.
    name: 'BrightSpark Electrical',
    tagline: 'Reliable Electricians in Dublin for Homes & Businesses',
    phoneDisplay: '(01) 000 0000 (Demo)',
    phoneHref: 'tel:+35310000000',
    email: 'hello@brightspark-demo.example',
    serviceArea: {
      label: 'Dublin and surrounding areas',
      summary:
        'BrightSpark Electrical provides residential and commercial electrical services across Dublin City and nearby areas, including North Dublin, South Dublin, and parts of County Dublin.',
      extended:
        'We regularly cover callouts in Dublin 1-24, plus surrounding communities such as Swords, Lucan, Dundrum, and Tallaght. If your area is nearby but not listed, contact us to confirm availability.',
      areas: ['Dublin City Centre', 'Rathmines', 'Clontarf', 'Drumcondra', 'Tallaght', 'Dundrum', 'Swords', 'Lucan']
    },
    openingHours: ['Mon-Fri: 7:00-19:00', 'Sat: 8:00-17:00', 'Sun: Emergency callouts only'],
    services: [
      {
        title: 'Emergency Electrical Repairs',
        slug: 'emergency-repairs',
        summary:
          'Rapid-response emergency electrician support for urgent faults, outages, and safety-critical electrical problems.',
        detail:
          'Designed for high-priority situations where quick diagnosis and safe temporary or permanent repair is essential.',
        bestFor: 'Urgent electrical faults where safety and fast restoration are critical.',
        typicalProblems: ['Frequent breaker trips', 'Partial or full power outage', 'Burning smell near outlets'],
        quoteCtaLabel: 'Request Emergency Support'
      },
      {
        title: 'Fault Finding & Diagnostics',
        slug: 'diagnostics',
        summary:
          'Accurate electrical fault finding to identify root causes and deliver safe, lasting repairs.',
        detail:
          'A methodical diagnostic process that avoids guesswork and focuses on reliable long-term solutions.',
        bestFor: 'Recurring or hard-to-trace faults that need clear diagnosis before repair.',
        typicalProblems: ['Intermittent lighting issues', 'Sockets with no power', 'Repeated RCD or MCB tripping'],
        quoteCtaLabel: 'Book a Diagnostic Visit'
      },
      {
        title: 'Fuse Board / Consumer Unit Upgrades',
        slug: 'consumer-unit-upgrades',
        summary:
          'Modern consumer unit upgrades to improve electrical safety, reliability, and system resilience.',
        detail:
          'Ideal for older installations that need improved protection and capacity for modern electrical demand.',
        bestFor: 'Older installations needing safer protection and better load management.',
        typicalProblems: ['Outdated consumer unit', 'Insufficient circuit protection', 'Not enough capacity for modern usage'],
        quoteCtaLabel: 'Get a Consumer Unit Quote'
      },
      {
        title: 'Lighting Installation',
        slug: 'lighting-installation',
        summary:
          'Professional indoor and outdoor lighting installation for homes, retail spaces, and offices.',
        detail:
          'From new fittings to full lighting redesigns, we deliver safe installs with clean, practical results.',
        bestFor: 'Safe installation of new lighting circuits, fittings, and controls.',
        typicalProblems: ['Faulty light fittings', 'Low-light rooms', 'New feature or security lighting needs'],
        quoteCtaLabel: 'Request a Lighting Quote'
      },
      {
        title: 'EV Charger Installation',
        slug: 'ev-charger-installation',
        summary:
          'Home and workplace EV charger installation with practical setup advice and dependable workmanship.',
        detail:
          'Includes dedicated circuit planning and safe installation for reliable day-to-day charging.',
        bestFor: 'Property owners adding reliable at-home or business EV charging.',
        typicalProblems: ['No dedicated EV charging point', 'Need safe charger positioning', 'Electrical capacity checks before install'],
        quoteCtaLabel: 'Get an EV Charger Quote'
      },
      {
        title: 'Home Rewiring',
        slug: 'rewiring',
        summary:
          'Partial and full house rewiring for ageing electrical systems and renovation projects.',
        detail:
          'Structured rewiring plans that improve safety, flexibility, and long-term system reliability.',
        bestFor: 'Homes requiring safer wiring infrastructure and future-ready circuits.',
        typicalProblems: ['Old wiring in legacy properties', 'Insufficient socket coverage', 'Renovation-driven wiring changes'],
        quoteCtaLabel: 'Request a Rewiring Assessment'
      },
      {
        title: 'Electrical Safety Inspections',
        slug: 'inspections-safety',
        summary:
          'Clear, practical electrical inspections for homeowners, landlords, and small businesses.',
        detail:
          'Safety-focused checks with clear reporting and practical recommendations for any identified issues.',
        bestFor: 'Safety checks and condition reporting before problems become costly.',
        typicalProblems: ['Unknown condition of electrical system', 'Landlord safety checks', 'Pre-purchase or pre-lease inspections'],
        quoteCtaLabel: 'Book an Electrical Inspection'
      }
    ] as ServiceItem[],
    serviceCategories: [
      {
        id: 'urgent',
        title: 'Emergency Repairs',
        intro: 'Fast-response electrical support for urgent issues where safety and continuity matter.',
        serviceSlugs: ['emergency-repairs'],
        faqs: [
          {
            question: 'When should I request emergency electrical support?',
            answer: 'Call immediately for burning smells, sparking outlets, sudden outage, or repeated breaker trips.'
          }
        ]
      },
      {
        id: 'diagnostics',
        title: 'Diagnostics',
        intro: 'Technical fault-finding workflows that identify root causes before work begins.',
        serviceSlugs: ['diagnostics'],
        faqs: [
          {
            question: 'Do you diagnose recurring electrical faults?',
            answer: 'Yes. We isolate root causes and recommend the most practical long-term fix.'
          }
        ]
      },
      {
        id: 'consumer-unit-upgrades',
        title: 'Consumer Unit Upgrades',
        intro: 'Modern protection upgrades for properties with older electrical infrastructure.',
        serviceSlugs: ['consumer-unit-upgrades'],
        faqs: [
          {
            question: 'When should a consumer unit be upgraded?',
            answer: 'If your setup is outdated, lacks modern protection, or cannot support current electrical demand.'
          }
        ]
      },
      {
        id: 'lighting-installations',
        title: 'Lighting & Installations',
        intro: 'Lighting upgrades and installation work for homes, offices, and commercial spaces.',
        serviceSlugs: ['lighting-installation'],
        faqs: [
          {
            question: 'Do you support full lighting redesign and replacement?',
            answer: 'Yes. We handle upgrades, replacements, and new fitting installations.'
          }
        ]
      },
      {
        id: 'ev-chargers',
        title: 'EV Chargers',
        intro: 'Dedicated EV charger installation for residential and commercial use cases.',
        serviceSlugs: ['ev-charger-installation'],
        faqs: [
          {
            question: 'Can you install EV chargers for homes and small businesses?',
            answer: 'Yes. We support both residential and commercial EV charger installations.'
          },
        ]
      },
      {
        id: 'rewiring',
        title: 'Rewiring',
        intro: 'Partial and full rewiring pathways for properties with ageing or outdated systems.',
        serviceSlugs: ['rewiring'],
        faqs: [
          {
            question: 'Do you handle partial rewiring?',
            answer: 'Yes. We provide both partial and full rewiring based on your property condition and goals.'
          }
        ]
      },
      {
        id: 'inspections-safety',
        title: 'Inspections & Safety Checks',
        intro: 'Condition reviews and safety-focused inspection services with practical reporting.',
        serviceSlugs: ['inspections-safety'],
        faqs: [
          {
            question: 'Are inspections suitable for landlords and pre-purchase checks?',
            answer: 'Yes. We provide practical safety inspections for landlords and property checks.'
          }
        ]
      }
    ] as ServiceCategory[],
    trustMetrics: [
      { label: 'Emergency Response', value: '24/7', note: 'Priority support for urgent electrical faults' },
      { label: 'Service Coverage', value: 'Dublin 1-24', note: 'City-wide and nearby surrounding areas' },
      { label: 'Customer Types', value: 'Residential + Commercial', note: 'Homes, landlords, and small businesses' },
      { label: 'Service Model', value: 'Safety-First', note: 'Clear diagnostics and dependable workmanship' }
    ],
    audienceSegments: [
      {
        title: 'Residential Electrical Services',
        text: 'Safe, tidy electrical work for homeowners and landlords, from urgent repairs to upgrades and rewiring.',
        highlights: ['Fault repairs and diagnostics', 'Lighting and consumer unit upgrades', 'Planned rewiring and inspections']
      },
      {
        title: 'Commercial Electrical Services',
        text: 'Reliable electrical support for offices, retail units, and small commercial premises with minimal downtime.',
        highlights: ['Fast response for operational faults', 'Planned maintenance and safety checks', 'Installation and upgrade support']
      }
    ],
    evSpotlight: {
      title: 'EV Charger Installation Dublin',
      text:
        'Planning a home or workplace EV charger? We provide safe installation with practical guidance on location, load, and future expansion.',
      bullets: ['Dedicated circuit planning', 'Clear installation scope and quote', 'Reliable charging setup for daily use']
    },
    testimonials: [
      {
        name: 'Sarah M.',
        area: 'Rathmines',
        tag: 'Fault Finding',
        quote:
          'BrightSpark diagnosed a recurring trip fault quickly and fixed the wiring issue the same day. Clear communication throughout.',
        problem: 'Recurring trips and unstable power on one floor.',
        solution: 'Circuit diagnostics and targeted fault repair.',
        outcome: 'Power stability restored with no repeat tripping.'
      },
      {
        name: 'David L.',
        area: 'Clontarf',
        tag: 'Consumer Unit Upgrade',
        quote:
          'Professional team from survey to completion. They explained the options clearly and the new consumer unit setup feels much safer.',
        problem: 'Outdated fuse board and inconsistent circuit behavior.',
        solution: 'Consumer unit upgrade with modern protective devices.',
        outcome: 'Improved safety, clearer circuit control, and reliable daily operation.'
      },
      {
        name: 'Aoife T.',
        area: 'Tallaght',
        tag: 'Lighting Upgrade',
        quote:
          'Great work on our lighting installation. The team was punctual, tidy, and the result transformed the space.',
        problem: 'Poor lighting coverage and ageing fittings.',
        solution: 'New lighting plan and full fixture installation.',
        outcome: 'Brighter rooms and better energy use.'
      },
      {
        name: 'Martin K.',
        area: 'Swords',
        tag: 'Emergency Repair',
        quote:
          'Fast emergency support when we lost power in part of the house at night. Efficient and reassuring service.',
        problem: 'Unexpected circuit outage in occupied home.',
        solution: 'Rapid attendance and on-site fault resolution.',
        outcome: 'Power restored safely the same evening.'
      },
      {
        name: 'Niamh P.',
        area: 'Dundrum',
        tag: 'EV Charger',
        quote:
          'EV charger installation was straightforward and well organised. We got clear advice before and after the work.',
        problem: 'No existing EV charging point at home.',
        solution: 'Dedicated EV charger installation and setup support.',
        outcome: 'Reliable overnight charging with safe wiring.'
      },
      {
        name: 'Cian R.',
        area: 'Lucan',
        tag: 'Commercial Support',
        quote:
          'Dependable electrician for our office. They resolved an intermittent fault that had affected operations for weeks.',
        problem: 'Intermittent office electrical fault disrupting workflow.',
        solution: 'Structured diagnostics and targeted repair.',
        outcome: 'Stable office power and fewer disruptions.'
      }
    ] as TestimonialItem[],
    aboutCopy: {
      overview:
        'BrightSpark Electrical supports homeowners, landlords, and small businesses with responsive electrical repairs, upgrades, and installations across Dublin. Our work is guided by practical planning, safety-first decisions, and dependable execution.',
      experience:
        'We handle both residential and commercial electrical projects, from urgent callouts to planned installations and rewiring. Customers trust us for clear communication, punctual service, and professional electrical standards throughout each job.',
      values: [
        {
          title: 'Safety-Driven Delivery',
          text: 'Every job starts with risk awareness and a safe, structured work plan.'
        },
        {
          title: 'Technical Clarity',
          text: 'We explain diagnostics, options, and next steps clearly so decisions are straightforward.'
        },
        {
          title: 'Reliable Follow-Through',
          text: 'From first call to final testing, we focus on consistent quality and dependable outcomes.'
        }
      ],
      localWhyTitle: 'Why local electrical expertise matters in Dublin',
      standards: [
        'Clear pre-work scope and practical recommendations',
        'Tidy, respectful work in occupied properties',
        'Post-work testing and clear handover communication'
      ],
      expectations: [
        'Prompt communication and realistic scheduling',
        'Transparent explanation of works and priorities',
        'A safety-focused process from assessment to completion'
      ]
    },
    // Reusable button labels used across the whole site.
    ctaLabels: {
      requestQuote: 'Request a Free Quote',
      getQuote: 'Request a Free Quote',
      getFastQuote: 'Request a Free Quote',
      callNow: 'Call Now',
      emergencyCallNow: 'Call Emergency Electrician',
      emailUs: 'Email Us',
      viewAllServices: 'View All Services',
      viewAllTestimonials: 'View all testimonials',
      getInTouch: 'Get in Touch',
      startQuoteRequest: 'Start Your Quote Request',
      callForAdvice: 'Call for Advice',
      readTestimonials: 'Read Testimonials'
    },
    // SEO defaults + per-page metadata. Replace all entries for a new client.
    seoMetadata: {
      siteUrl: 'https://brightspark-demo.example',
      locale: 'en_IE',
      schemaBusinessType: 'Electrician',
      defaultTitle: 'BrightSpark Electrical Dublin | Electrician Dublin & Electrical Repairs',
      titleTemplate: '%s | BrightSpark Electrical Dublin',
      defaultDescription:
        'BrightSpark Electrical is a Dublin electrician for homes and businesses, covering emergency electrician Dublin callouts, electrical repairs Dublin, EV charger installation Dublin, rewiring, and inspections.',
      openGraphDescription:
        'Local electrician Dublin services with emergency repairs, diagnostics, EV charger installation, and safety-focused electrical upgrades.',
      twitterDescription:
        'Electrician Dublin demo website focused on emergency electrician Dublin and electrical repairs Dublin search intent.',
      pages: {
        home: {
          title: 'Reliable Electrician Dublin for Homes and Businesses',
          description:
            'Need an electrician in Dublin? BrightSpark Electrical provides emergency electrician Dublin support, electrical repairs Dublin, EV charger installation Dublin, rewiring, and inspections.',
          canonical: '/',
          openGraphTitle: 'Electrician Dublin | BrightSpark Electrical',
          openGraphDescription:
            'Safety-focused electrician Dublin service for urgent repairs, diagnostics, installations, and electrical upgrades.'
        },
        services: {
          title: 'Electrical Services Dublin | Emergency Electrician, Diagnostics, EV Chargers',
          description:
            'Explore BrightSpark Electrical services: emergency electrical repairs Dublin, fault finding, consumer unit upgrades, EV charger installation Dublin, rewiring, and inspections.',
          canonical: '/services',
          openGraphTitle: 'Electrical Services in Dublin | BrightSpark Electrical',
          openGraphDescription:
            'Structured electrical services for homeowners, landlords, and small businesses across Dublin.'
        },
        about: {
          title: 'About BrightSpark Electrical | Trusted Electrician Dublin',
          description:
            'Learn about BrightSpark Electrical, a responsive and safety-focused electrician Dublin team serving residential and commercial customers.',
          canonical: '/about',
          openGraphTitle: 'About BrightSpark Electrical Dublin',
          openGraphDescription:
            'Meet the local electrician Dublin team and our safety-first service approach.'
        },
        testimonials: {
          title: 'Electrician Reviews Dublin (Sample Testimonials) | BrightSpark Electrical',
          description:
            'Browse sample electrician Dublin testimonials for emergency repairs, diagnostics, lighting upgrades, and EV charger installation Dublin projects.',
          canonical: '/testimonials',
          openGraphTitle: 'BrightSpark Electrical Testimonials (Demo)',
          openGraphDescription:
            'Outcome-focused sample case snippets for Dublin electrical services.'
        },
        contact: {
          title: 'Contact an Electrician in Dublin | BrightSpark Electrical',
          description:
            'Contact BrightSpark Electrical for quote requests, emergency electrician Dublin support, and electrical repairs Dublin enquiries.',
          canonical: '/contact',
          openGraphTitle: 'Contact BrightSpark Electrical Dublin',
          openGraphDescription:
            'Request a free quote or call now for urgent electrical issues in Dublin and surrounding areas.'
        }
      } as Record<string, PageSeo>
    }
  },
  navigationLinks: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Case Results' },
    { href: '/contact', label: 'Contact' }
  ] as NavLink[],
  whyChooseUs: [
    'Safety-focused electrical planning and execution for every job.',
    'Fast, practical support for urgent electrical faults and outages.',
    'Clear scope and recommendations before work starts.',
    'Dependable service for residential and commercial customers.'
  ],
  processSteps: [
    {
      title: 'Initial Call and Scope',
      text: 'Tell us the issue, property type, and urgency so we can prioritise the right response.'
    },
    {
      title: 'Technical Assessment',
      text: 'We diagnose the fault or review installation requirements and confirm the plan.'
    },
    {
      title: 'Electrical Works',
      text: 'Repairs, upgrades, or installation are completed with safety-first workmanship.'
    },
    {
      title: 'Testing and Handover',
      text: 'Final checks confirm reliable operation and we explain next steps where needed.'
    }
  ],
  testimonialOutcomes: [
    'Urgent electrical problems resolved faster.',
    'Improved system safety and reliability.',
    'Clear communication through every project stage.',
    'Cleaner installs with less disruption on site.'
  ],
  contactFlowSteps: [
    'We review your message and service requirements.',
    'You receive a callback or email with the next available slot.',
    'We confirm scope, timing, and your preferred visit window.',
    'For urgent issues, we prioritise emergency call triage immediately.'
  ],
  faqs: {
    home: [
      {
        question: 'Do you cover all of Dublin for electrician callouts?',
        answer:
          'Yes, this demo business profile is set up for Dublin and nearby areas. Contact us to confirm availability for your exact location.'
      },
      {
        question: 'Can I request both emergency and planned electrical work?',
        answer:
          'Yes. Emergency callouts are for urgent electrical issues, while quote requests are ideal for planned installations, upgrades, and inspections.'
      },
      {
        question: 'Do you support residential and commercial properties?',
        answer:
          'Yes, BrightSpark Electrical supports homeowners, landlords, offices, retail spaces, and other small business premises.'
      }
    ] as FAQItem[],
    services: [
      {
        question: 'What electrical service should I choose if I am unsure?',
        answer:
          'Choose the closest match in the contact form and describe the issue. We can recommend the right service after a quick assessment.'
      },
      {
        question: 'Do you provide emergency electrician Dublin callouts?',
        answer: 'Yes. Emergency electrical repairs are prioritised when there is an active fault or safety concern.'
      },
      {
        question: 'Can you support electrical works for small businesses?',
        answer: 'Yes, we support offices, retail spaces, and other small commercial premises across Dublin.'
      }
    ] as FAQItem[],
    contact: [
      {
        question: 'What details should I include in a quote request?',
        answer:
          'Include your Dublin location, the electrical issue or project, urgency, and any useful access notes so we can respond with practical next steps.'
      },
      {
        question: 'Is the phone number on this website a real contact?',
        answer:
          'No. This is a demo website, and the listed phone and email are placeholder contact details for development and portfolio use.'
      },
      {
        question: 'When should I call instead of using the form?',
        answer:
          'If you have burning smells, repeated tripping circuits, sudden outage, or other urgent electrical concerns, call immediately.'
      }
    ] as FAQItem[]
  },
  pageContent: {
    footerBlurb: 'Residential and commercial electrical services in Dublin and surrounding areas.',
    demoNote: 'Demo website for portfolio and development purposes.',
    home: {
      heroTitle: 'Reliable Electricians in Dublin for Homes & Businesses',
      heroDescription:
        'From emergency repairs to full rewiring projects, our certified electricians deliver safe, professional electrical work across Dublin.',
      heroChecklist: ['Emergency electrician support', 'Residential and commercial projects', 'Clear quotes and practical timelines'],
      emergencyBanner: 'Emergency electrician Dublin: call now for urgent electrical faults and safety-critical issues.',
      servicesTitle: 'Core Electrical Services',
      servicesDescription:
        'Explore specialist electrician Dublin services designed for urgent repairs, technical diagnostics, and planned upgrades.',
      safetyTitle: 'Safety-First Electrical Standards',
      safetyDescription:
        'Our service model prioritises safe diagnosis, structured work planning, and clear communication from first call to final testing.',
      comparisonTitle: 'Residential and Commercial Coverage',
      processTitle: 'How BrightSpark Electrical Works',
      processDescription: 'A clear process focused on fast response, safe execution, and reliable outcomes.',
      testimonialsTitle: 'Recent Customer Outcomes',
      testimonialsDescription: 'Sample/demo case snippets showing the type of results customers look for.',
      faqTitle: 'Electrician Dublin FAQs',
      faqDescription: 'Common questions asked before booking electrical services in Dublin.',
      ctaBandTitle: 'Need a trusted electrician in Dublin?',
      ctaBandText:
        'Request a free quote in under two minutes, or call now for urgent electrical support.'
    },
    services: {
      pageTitle: 'Structured Electrical Services for Dublin Properties',
      pageDescription:
        'From emergency electrician Dublin callouts to planned installations, BrightSpark Electrical delivers clear scope, safe execution, and dependable outcomes.',
      emergencyTitle: 'Urgent electrical issue? Call for immediate support.',
      emergencyDescription:
        'For power loss, burning smells, sparking sockets, or repeated tripping circuits, contact us immediately for priority response.',
      categoriesTitle: 'Service Categories',
      categoriesDescription:
        'Use the sections below to match your problem type with the right electrical service pathway.',
      faqTitle: 'Dublin Electrical Services FAQ',
      faqDescription: 'Answers to common questions before requesting an electrician quote.',
      ctaBandTitle: 'Need a quote for electrical work in Dublin?',
      ctaBandText:
        'Share your project or fault details and we will recommend the most practical next step.'
    },
    about: {
      pageTitle: 'A Dublin electrician team built around safety, clarity, and dependable delivery',
      pageDescription:
        'BrightSpark Electrical supports residential and commercial customers with responsive service and professional electrical workmanship.',
      standardsTitle: 'Service Standards',
      expectationsTitle: 'What Customers Can Expect',
      coverageTitle: 'Local Dublin Coverage',
      ctaBandTitle: 'Want a safety-focused electrician you can rely on?',
      ctaBandText: 'Book a free quote for planned work or call now for urgent electrical issues in Dublin.'
    },
    testimonials: {
      pageTitle: 'Case-Style Customer Outcomes',
      pageDescription: 'These testimonials are sample/demo content, formatted as short problem-solution-outcome snapshots.',
      demoBanner: 'Demo note: all testimonials on this page are sample content and not real customer submissions.',
      outcomesTitle: 'Common Outcomes Mentioned',
      urgentHelpTitle: 'Need help now?',
      urgentHelpDescription:
        'If you need a dependable electrician in Dublin, contact BrightSpark Electrical for emergency support or quote requests.',
      ctaBandTitle: 'Need the same dependable result for your property?',
      ctaBandText: 'Send your electrical service request now and we will follow up with practical next steps.'
    },
    contact: {
      pageTitle: 'Request a free quote or speak with our electrician team',
      pageDescription:
        'For urgent electrical issues, call us directly. For planned work, use the quote form and we will follow up quickly.',
      emergencyLabel: 'Emergency Electrician Line (Demo)',
      emergencyDescription:
        'For burning smells, sudden outages, or repeated breaker trips, call now for priority triage.',
      callCardDescription: 'Fastest route for urgent electrical repairs in Dublin.',
      hoursNote: 'Emergency callouts are available outside standard hours.',
      flowTitle: 'What happens after you submit?',
      demoCardTitle: 'Demo Contact Note',
      demoCardBody:
        'This is a demo website. Phone number and email shown here are placeholder contact details for development use.',
      faqTitle: 'Contacting an Electrician in Dublin: FAQ',
      faqDescription: 'Quick answers about emergency calls, quote requests, and demo contact details.',
      ctaBandTitle: 'Need an emergency electrician right now?',
      ctaBandText:
        'Call our emergency line immediately, or submit the quote form and we will respond as quickly as possible.'
    }
  }
};

export const localServiceDemoConfig = siteConfig;
