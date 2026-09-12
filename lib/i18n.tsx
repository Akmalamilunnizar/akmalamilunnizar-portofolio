'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import * as projects from '@/public/projects-image/projects'

export type Locale = 'en' | 'id'

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
}

export type Category = {
  name: string
  articles: { title: string; slug: string }[]
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

export type ProjectChallenge = {
  title: string
  description: string
  severity?: 'high' | 'medium'
}

export type ProjectAchievement = {
  title: string
  description?: string
}

export type ProjectVisualLog = {
  title: string
  description: string
  tag?: string
  image?: string
}

export type Project = {
  slug?: string
  name: string
  description: string
  longDescription?: string
  tags: string[]
  thumbnail?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>
  year?: string
  role?: string
  highlights?: string[]
  liveUrl?: string
  githubUrl?: string
  missionStatus?: 'completed' | 'in-progress' | 'shipped'
  challenges?: ProjectChallenge[]
  achievements?: (string | ProjectAchievement)[]
  visualLogs?: ProjectVisualLog[]
}

export function getProjectSlug(project: { name: string; slug?: string }): string {
  return project.slug || project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

type Dictionary = {
  nav: {
    about: string
    experience: string
    projects: string
    subscribe: string
  }
  langToggleLabel: string
  hero: {
    badge: string
    title: string
    bio: string
    readLatest: string
    moreAbout: string
  }
  about: {
    title: string
    heading: string
    paragraphs: string[]
    skillsLabel: string
    skills: string[]
  }
  experience: {
    title: string
    subtitle: string
    items: ExperienceItem[]
  }
  projectsSection: {
    title: string
    subtitle: string
    viewAll: string
    items: Project[]
  }
  featured: {
    title: string
    subtitle: string
    viewAll: string
  }
  contact: {
    title: string
    subtitle: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
    placeholderName: string
    placeholderEmail: string
    placeholderSubject: string
    placeholderMessage: string
    getInTouch: string
    sendButton: string
    directContact: string
    locationLabel: string
  }
  footer: {
    rights: string
    poweredBy: string
  }
  posts: Post[]
  categories: Category[]
}

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      subscribe: 'Subscribe',
    },
    langToggleLabel: 'Switch to Bahasa Indonesia',
    hero: {
      badge: 'Available for interesting problems',
      title: 'Backend Engineer & AI Enthusiast',
      bio: 'Backend Engineer specializing in system automation, network integrations, and efficient database architecture. Proficient in Go and PHP, with a proven track record of architecting end-to-end management systems from the ground up, including automated provisioning and hardware tracking. Skilled in deploying reliable, self-starting services via Docker Compose. Dedicated to building highly optimized, scalable backend solutions.',
      readLatest: 'View Projects',
      viewProjects: 'View Projects',
      moreAbout: 'More about me',
    },
    about: {
      title: 'About',
      heading: 'Building reliable and scalable backends.',
      paragraphs: [
        'I build software products and services that teams rely on every day — from high-concurrency APIs to AI-driven tools that turn complex data into actionable decisions.',
        'My focus is on reliability, performance, and simplicity: systems that are easy to reason about, simple to extend, and rock-solid to operate. When I am not shipping, I am exploring distributed systems, experimenting with machine learning, or optimizing backend workflows.',
      ],
      skillsLabel: 'Tools I reach for',
      skills: ['Docker', 'Golang', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'REST APIs', 'MySQL', 'Flutter', 'n8n', 'Github', 'Flask', 'Tensorflow', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Machine Learning'],
    },
    experience: {
      title: 'Experience',
      subtitle: 'Places where I\'ve delivered my best work and solved complex problems',
      items: [
        {
          role: 'Full Stack Engineer Intern',
          company: 'PT Empat Inti Nukleon',
          period: 'Aug 2025 - Dec 2025',
          description:
            'Architected a high-concurrency CRM backend with Go (Fiber), creating 5 features in 3 months, cutting manual data entry by 40%. Automated invoicing workflows with a Node.js microservice and deployed the Docker-based architecture on Proxmox with Grafana monitoring.',
        }
      ],
    },
    projectsSection: {
      title: 'Projects',
      subtitle: 'Selected work I am proud to have shipped.',
      viewAll: 'View all projects →',
      items: [
        {
          slug: 'citra-media-ecommerce-and-forecasting',
          name: 'Citra Media Ecommerce and Forecasting',
          description:
            'A scalable microservice ecosystem bridging a Laravel backend with a Python/Flask API. Features SARIMAX time-series forecasting, IoT hardware telemetry, and automated payment gateways.',
          longDescription:
            'Citra Media is an end-to-end e-commerce and inventory forecasting solution. Built with a distributed microservice architecture, it connects Laravel for business transactions and a Python/Flask engine powering statistical SARIMAX models to predict stock demands and minimize overstock/understock cycles.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API'],
          thumbnail: '/projects-image/cime/cime-produk.jpg',
          year: '2025',
          role: 'Fullstack & ML Engineer',
          missionStatus: 'completed',
          highlights: [
            'Architected microservice sync between Laravel & Python Flask API',
            'Implemented SARIMAX statistical modeling for sales forecasting',
            'Integrated real-time IoT hardware telemetry & automated payment gateways',
            'Constructed robust RESTful API with tokenized authentication',
          ],
          challenges: [
            {
              title: 'Microservice Latency & Sync Orchestration',
              description:
                'Bridging synchronous transactional checkouts in Laravel with compute-intensive Python statistical routines required an asynchronous message queue architecture to avoid blocking user threads.',
              severity: 'high',
            },
            {
              title: 'Sparse & Seasonal Time-Series Data',
              description:
                'Sales data exhibited irregular purchasing intervals. Implemented rolling-window smoothing and automated outlier imputation to stabilize SARIMAX regression outputs.',
              severity: 'high',
            },
            {
              title: 'Hardware Telemetry Ingestion Pipeline',
              description:
                'Standardized heterogeneous warehouse telemetry sensors into a unified MQTT queue with schema validation and automatic alert thresholds.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Full microservice orchestration between Laravel 11 & Python Flask API' },
            { title: 'Reduced stockout risk by 35% through SARIMAX statistical trend prediction' },
            { title: 'Engineered automated payment webhook gateway handling concurrent orders' },
            { title: 'Achieved sub-100ms API response endpoints with tokenized OAuth2 security' },
          ],
          visualLogs: [
            {
              title: 'Product & Inventory Catalog',
              description: 'Real-time product management catalog with stock reservation and variant pricing.',
              tag: 'E-Commerce',
              image: '/projects-image/cime/cime-produk.jpg',
            },
            {
              title: 'Checkout & Payment Gateway',
              description: 'Automated transaction checkout pipeline with instant payment webhook confirmations.',
              tag: 'Payment Gateway',
              image: '/projects-image/cime/cime-checkout.jpg',
            },
            {
              title: 'Customer Transaction Details',
              description: 'Detailed order tracking and automated invoice breakdown with telemetry metadata.',
              tag: 'Order Fulfillment',
              image: '/projects-image/cime/cime-detail-transaksi-customer.jpg',
            },
          ],
        },
        {
          slug: 'crm-lilly',
          name: 'CRM Lilly ISP & Billing System',
          description:
            'A high-concurrency ISP customer relationship and automated MikroTik provisioning platform with billing automation and live monitoring.',
          longDescription:
            'CRM Lilly is a dedicated ISP management solution designed to streamline customer provisioning, MikroTik router configuration, and recurring invoice automation. Built with Go (Fiber) and Node.js microservices, it eliminates manual provisioning errors and monitors active network subscriber bandwidth in real-time.',
          tags: ['Go', 'Fiber', 'MikroTik API', 'Node.js', 'PostgreSQL', 'Docker'],
          thumbnail: '/projects-image/crm-lilly/crm-lilly-monitoring.jpg',
          year: '2025',
          role: 'Backend & Network Engineer',
          missionStatus: 'shipped',
          highlights: [
            'Architected high-throughput Go backend cutting manual data entry by 40%',
            'Integrated automated MikroTik router API provisioning and bandwidth queues',
            'Automated monthly recurring billing and invoice generation with Node.js microservice',
            'Deployed containerized architecture on Proxmox with Grafana telemetry monitoring',
          ],
          challenges: [
            {
              title: 'High-Concurrency MikroTik API Sync',
              description:
                'Managing simultaneous router provisioning commands across distributed MikroTik routers without socket exhaustion or timeout failures.',
              severity: 'high',
            },
            {
              title: 'Automated Billing & Recurring Payment Reconciliation',
              description:
                'Eliminating duplicate billing and ensuring zero dropped transactions during monthly invoicing cycles.',
              severity: 'high',
            },
            {
              title: 'Real-Time Bandwidth Telemetry Aggregation',
              description:
                'Collecting and aggregating high-volume live subscriber bandwidth statistics without impacting gateway performance.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Reduced client provisioning time from 15 minutes to under 5 seconds' },
            { title: 'Automated 100% of recurring invoice generation and payment reminder dispatches' },
            { title: 'Engineered real-time subscriber status and traffic monitoring dashboard' },
            { title: 'Deployed resilient infrastructure on Proxmox VE with automated backup schedules' },
          ],
          visualLogs: [
            {
              title: 'Live Network & Subscriber Monitoring',
              description: 'Real-time telemetry monitor tracking active bandwidth usage, gateway uptime, and subscriber latency.',
              tag: 'Network Telemetry',
              image: '/projects-image/crm-lilly/crm-lilly-monitoring.jpg',
            },
            {
              title: 'Customer & Subscription Directory',
              description: 'Centralized subscriber directory managing service packages, billing cycles, and customer contracts.',
              tag: 'CRM & Billing',
              image: '/projects-image/crm-lilly/crm-lilly-customer.jpg',
            },
            {
              title: 'Automated MikroTik Provisioning Console',
              description: 'Interface for instant router configuration, queue management, and PPPoE/Hotspot user provisioning.',
              tag: 'MikroTik API',
              image: '/projects-image/crm-lilly/crm-lilly-mikrotik-provisioning.jpg',
            },
          ],
        },
        {
          slug: 'sanke-intelligence-system',
          name: 'SANKE Intelligence System',
          description:
            'An IoT-based water quality monitoring system for Koi ponds. Built with Node.js and Laravel, utilizing Mamdani Fuzzy Logic to automatically evaluate real-time environmental metrics.',
          longDescription:
            'SANKE Intelligence System is a smart aquaculture monitoring solution for high-value Koi fish ecosystems. It ingests telemetry from submerged IoT sensors (pH, temperature, dissolved oxygen) and runs a Mamdani Fuzzy Logic inference engine on Node.js/Laravel to score pond health and trigger automated remediation devices.',
          tags: ["Node.js", "Laravel", "Flutter", "IoT"],
          thumbnail: projects.SankeIntellegenceSystem,
          year: '2025',
          role: 'IoT & Backend Lead',
          missionStatus: 'completed',
          highlights: [
            'Built Mamdani Fuzzy Logic inference engine for real-time water scoring',
            'Engineered low-latency telemetry ingestion pipeline with Node.js & MQTT',
            'Developed cross-platform Flutter companion app with live alerts',
            'Designed Laravel administrative portal with multi-pond analytics',
          ],
          challenges: [
            {
              title: 'Real-Time Mamdani Fuzzy Inference',
              description:
                'Evaluating multi-variable continuous membership functions (pH, dissolved oxygen, temperature) with sub-second response times on resource-constrained backend workers.',
              severity: 'high',
            },
            {
              title: 'Sensor Noise & Submerged Probe Drift',
              description:
                'Underwater probes frequently experience electrical noise and calibration drift. Implemented Kalman filtering and outlier rejection algorithms before fuzzy evaluation.',
              severity: 'high',
            },
            {
              title: 'Fail-Safe Bi-Directional Relay Dispatch',
              description:
                'Ensured life-critical aerator and water pump actuator relays execute with state confirmations even during intermittent local network drops.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Developed custom Mamdani Fuzzy Logic engine scoring real-time water health' },
            { title: 'Constructed sub-50ms MQTT pub/sub telemetry pipeline on Node.js' },
            { title: 'Delivered cross-platform Flutter application with instant push alert dispatches' },
            { title: 'Engineered multi-pond centralized analytics dashboard with historic export tools' },
          ],
          visualLogs: [
            {
              title: 'Pond Health & Multi-Pond Directory',
              description: 'Overview of multi-pond water quality metrics with real-time health scoring indicators.',
              tag: 'IoT Telemetry',
              image: '/projects-image/sanke/daftarkolam.png',
            },
            {
              title: 'Automated Disease & Anomaly Detection',
              description: 'Computer vision and fuzzy inference analysis for early koi health anomaly detection.',
              tag: 'Machine Learning',
              image: '/projects-image/sanke/deteksi-penyakit.png',
            },
            {
              title: 'Mobile Field Telemetry & Relay Control',
              description: 'Mobile companion interface displaying dissolved oxygen and automated aerator relay status.',
              tag: 'Mobile Telemetry',
              image: '/projects-image/sanke/IMG-20241002-WA0008.png',
            },
            {
              title: 'Live Sensor Monitoring Stream',
              description: 'Continuous sensor telemetry monitoring pH, temperature, and water parameters 24/7.',
              tag: 'Live Monitoring',
              image: '/projects-image/sanke/WhatsApp Image 2024-10-02 at 23.10.15_ac87dd75.png',
            },
          ],
        },
        {
          slug: 'masroster-ecommerce-and-forecasting',
          name: 'MASROSTER Ecommerce and Forecasting',
          description:
            'An enterprise-level e-commerce backend integrated with predictive data pipelines using LSTM and Facebook Prophet for highly accurate inventory and time-series forecasting.',
          longDescription:
            'MASROSTER combines enterprise commerce workflows with deep learning predictive analytics. By leveraging LSTM recurrent neural networks and Facebook Prophet models, it accurately anticipates seasonal demand swings and automates supplier restocking recommendations.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API', 'Deep Learning'],
          thumbnail: '/projects-image/masroster/masroster-dashboard.jpg',
          year: '2024',
          role: 'Backend & ML Engineer',
          missionStatus: 'in-progress',
          highlights: [
            'Trained LSTM and Facebook Prophet models on historical transactional datasets',
            'Engineered high-throughput Laravel e-commerce catalog and ordering engine',
            'Built automated data preprocessing and scheduled retraining pipelines',
            'Delivered interactive visualization dashboard for business forecasts',
          ],
          challenges: [
            {
              title: 'Deep Learning Model Memory Footprint',
              description:
                'Running recurrent LSTM neural network evaluations on multi-category product catalogs required batch inference optimization and lightweight model quantization.',
              severity: 'high',
            },
            {
              title: 'Multi-Seasonal Holiday Fluctuations',
              description:
                'Accounting for unexpected flash sales and shifting annual holiday patterns required blending Prophet changepoints with LSTM sequence encoders.',
              severity: 'medium',
            },
            {
              title: 'High-Concurrency Inventory Locks',
              description:
                'Preventing stock over-allocation during peak flash sales by implementing atomic Redis transaction locks and optimistic concurrency controls.',
              severity: 'high',
            },
          ],
          achievements: [
            { title: 'Trained high-accuracy LSTM & Prophet models on multi-year transactional datasets' },
            { title: 'Built high-throughput Laravel e-commerce catalog handling concurrent checkouts' },
            { title: 'Automated scheduled ETL pipelines with asynchronous queue workers' },
            { title: 'Constructed executive forecast visualization suite with uncertainty confidence intervals' },
          ],
          visualLogs: [
            {
              title: 'Executive Analytics & Demand Forecast',
              description: 'Integrated dashboard plotting LSTM sales forecasts against seasonal demand targets.',
              tag: 'Predictive Analytics',
              image: '/projects-image/masroster/masroster-dashboard.jpg',
            },
            {
              title: 'E-Commerce Checkout & Stock Reservation',
              description: 'High-concurrency checkout flow with atomic stock locking and payment processing.',
              tag: 'E-Commerce',
              image: '/projects-image/masroster/masroster-checkout.jpg',
            },
            {
              title: 'Search Keyword Trend Intelligence',
              description: 'Predictive keyword search velocity analysis assisting in automated restocking decisions.',
              tag: 'NLP & Analytics',
              image: '/projects-image/masroster/masroster-keyword.jpg',
            },
          ],
        },
        {
          slug: 'restorant',
          name: 'RestoranT',
          description:
            'A dual-platform ordering system seamlessly bridging a Flutter client application with a Laravel administrative dashboard to streamline real-time fulfillment workflows.',
          longDescription:
            'RestoranT modernizes restaurant order dispatch and kitchen management. Customers order through a fluid Flutter mobile app while kitchen and management staff track order states in real-time through an optimized Laravel dashboard with instant status dispatch.',
          tags: ["Flutter", "Laravel", "MySQL"],
          thumbnail: '/projects-image/restorant/restorant-dashboard.jpg',
          year: '2024',
          role: 'Mobile & Backend Developer',
          missionStatus: 'completed',
          highlights: [
            'Developed Flutter mobile app with interactive menu & cart experience',
            'Engineered real-time order state management with Laravel & WebSockets',
            'Optimized relational MySQL schema for high concurrent table orders',
            'Integrated receipt generation and thermal printer dispatch support',
          ],
          challenges: [
            {
              title: 'Real-Time Multi-Screen State Synchronization',
              description:
                'Synchronizing instant order status changes across customer phones, kitchen display screens, and cashier registers with zero missed event dispatches.',
              severity: 'high',
            },
            {
              title: 'Offline Order Queue Resiliency',
              description:
                'Allowing floor waitstaff devices to take table orders seamlessly during transient Wi-Fi drops, auto-syncing when reconnection occurs.',
              severity: 'medium',
            },
            {
              title: 'Thermal Printer Driver Abstraction',
              description:
                'Building asynchronous ESC/POS network print dispatch pipelines for kitchen stations with print queue retry mechanisms.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Delivered dual-platform system connecting Flutter mobile client to Laravel hub' },
            { title: 'Sub-second order state synchronization via WebSocket event broadcasting' },
            { title: 'Optimized relational schema supporting high concurrent table and takeaway orders' },
            { title: 'Integrated automated kitchen ticket dispatch with ESC/POS thermal printer support' },
          ],
          visualLogs: [
            {
              title: 'Kitchen & Order Command Dashboard',
              description: 'Administrative dashboard tracking real-time table orders, daily revenue, and kitchen status.',
              tag: 'Admin Portal',
              image: '/projects-image/restorant/restorant-dashboard.jpg',
            },
            {
              title: 'Digital Menu & Category Catalog',
              description: 'Mobile menu browsing interface with dietary chips, dish modifiers, and pricing.',
              tag: 'Flutter Client',
              image: '/projects-image/restorant/restorant-daftar-makanan.jpg',
            },
            {
              title: 'Dish Modifier & Customization View',
              description: 'Detailed food customization modal allowing guests to tailor spice levels and extras.',
              tag: 'Mobile UI',
              image: '/projects-image/restorant/restorant-detail-makanan.jpg',
            },
            {
              title: 'Interactive Table Cart & Order Review',
              description: 'Real-time table order summary with instant dispatch to kitchen display systems.',
              tag: 'Cart & Checkout',
              image: '/projects-image/restorant/restorant-cart.jpg',
            },
            {
              title: 'Kitchen Order Queue List',
              description: 'Live preparation ticket queue with status dispatch and receipt printing triggers.',
              tag: 'Kitchen Display',
              image: '/projects-image/restorant/restorant-list-pesanan.jpg',
            },
          ],
        },
        {
          slug: 'elibrary-desktop',
          name: 'E-Library Desktop Management System',
          description:
            'A cross-platform desktop application for comprehensive library asset indexing, member circulation, and automated barcode loan tracking.',
          longDescription:
            'E-Library Desktop provides institutional libraries with a responsive, offline-first catalogue management system. It supports fast ISBN/barcode scanning, automated overdue fine calculation, and comprehensive borrowing analytics.',
          tags: ['Desktop App', 'Electron', 'TypeScript', 'SQLite', 'TailwindCSS'],
          thumbnail: '/projects-image/elibrary-desktop/elibrary-desktop.jpg',
          year: '2024',
          role: 'Desktop Application Developer',
          missionStatus: 'completed',
          highlights: [
            'Developed cross-platform desktop client with offline-first SQLite synchronization',
            'Integrated hardware barcode scanner input for sub-second book checkouts',
            'Engineered automated overdue calculation and digital receipt generation',
            'Created comprehensive borrowing trends and inventory audit reports',
          ],
          challenges: [
            {
              title: 'Offline-First Local Database Synchronization',
              description:
                'Ensuring seamless local SQLite database performance while preserving data integrity during periodic remote server synchronization.',
              severity: 'high',
            },
            {
              title: 'Hardware Peripheral Barcode Integration',
              description:
                'Handling raw serial and USB HID barcode scanner input streams reliably across desktop operating environments.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Built streamlined desktop catalogue indexing thousands of volume records' },
            { title: 'Implemented instant barcode checkout reducing queue wait times by 60%' },
            { title: 'Automated fine calculations and exportable monthly circulation summaries' },
          ],
          visualLogs: [
            {
              title: 'Library Circulation & Inventory Management',
              description: 'Main management window showcasing catalogue search, real-time book availability, and member circulation.',
              tag: 'Desktop UI',
              image: '/projects-image/elibrary-desktop/elibrary-desktop.jpg',
            },
          ],
        },
        {
          slug: 'elibrary-mobile',
          name: 'E-Library Mobile Client App',
          description:
            'A companion mobile application allowing library members to browse digital collections, reserve physical books, and receive due-date notifications.',
          longDescription:
            'E-Library Mobile is the mobile companion to the library ecosystem. Built with Flutter, it enables patrons to search library collections, view digital excerpts, reserve books for pickup, and receive automated return deadline alerts.',
          tags: ['Flutter', 'Mobile App', 'RESTful API', 'Push Notifications'],
          thumbnail: '/projects-image/elibrary-mobile/elibrary-mobile-thumbnail.jpg',
          year: '2024',
          role: 'Mobile Developer',
          missionStatus: 'completed',
          highlights: [
            'Cross-platform mobile client with intuitive digital book catalog',
            'Real-time book reservation and pickup queue notifications',
            'Integrated digital membership card with dynamic QR code pass',
          ],
          challenges: [
            {
              title: 'Real-Time Reservation Locking',
              description:
                'Preventing race conditions when multiple members attempt to reserve the last available physical volume simultaneously.',
              severity: 'high',
            },
          ],
          achievements: [
            { title: 'Developed fluid mobile search and reservation client' },
            { title: 'Implemented automated push alerts for reservation pickups and return deadlines' },
          ],
          visualLogs: [
            {
              title: 'Mobile Dashboard',
              description: 'Interactive book discovery feed with search, category filtering, and reservation actions.',
              tag: 'Mobile App',
              image: '/projects-image/elibrary-mobile/elibrary-mobile-dashboard.jpg',
            },
            {
              title: 'Digital Book Entry & Scanner',
              description: 'Digital catalog input form with real-time field validation and integrated barcode scanning.',
              tag: 'Mobile App',
              image: '/projects-image/elibrary-mobile/elibrary-mobile-addbook.jpg',
            },
          ],
        },
      ],
    },
    featured: {
      title: 'Latest',
      subtitle: 'Recent writing and selected work.',
      viewAll: 'View all →',
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Have a project in mind or want to collaborate? Feel free to reach out!',
      nameLabel: 'Your Name',
      emailLabel: 'Email Address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderSubject: 'Project Inquiry',
      placeholderMessage: 'Tell me about your project or inquiry...',
      sendButton: 'Send Message',
      directContact: 'Direct Contact',
      locationLabel: 'Location',
      getInTouch: 'Get In Touch',
    },
    footer: {
      rights: 'All rights reserved.',
      poweredBy: 'Powered by Next.js',
    },
    posts: [
      {
        slug: 'shipping-ai-features-without-losing-your-mind',
        title: 'Shipping AI features without losing your mind',
        excerpt:
          'A pragmatic playbook for integrating LLMs into production apps — evals, guardrails, and keeping latency in check.',
        category: 'AI Integration',
        date: 'Aug 4, 2026',
      },
      {
        slug: 'the-architecture-i-reach-for-first',
        title: 'The architecture I reach for first',
        excerpt:
          'Why I default to boring, composable systems and how a small set of primitives scales further than most frameworks.',
        category: 'Software Development',
        date: 'Jul 22, 2026',
      },
      {
        slug: 'debugging-is-a-search-problem',
        title: 'Debugging is a search problem',
        excerpt:
          'Treating bugs like a binary search over your assumptions turns panic into a repeatable, calm process.',
        category: 'Problem Solving',
        date: 'Jul 9, 2026',
      },
      {
        slug: 'the-coffee-driven-workflow',
        title: 'The coffee-driven workflow',
        excerpt:
          'How I structure deep-work blocks, protect focus, and use small rituals to stay consistent over years, not weeks.',
        category: 'Productivity',
        date: 'Jun 28, 2026',
      },
    ],
    categories: [
      {
        name: 'Engineering',
        articles: [
          { title: 'Designing APIs people actually enjoy using', slug: 'designing-apis' },
          { title: 'Type-safe from the database to the button', slug: 'type-safe-stack' },
          { title: 'When to write the abstraction (and when not to)', slug: 'abstractions' },
          { title: 'Server components changed how I think about data', slug: 'server-components' },
        ],
      },
      {
        name: 'Problem Solving',
        articles: [
          { title: 'The five-whys, but for flaky tests', slug: 'flaky-tests' },
          { title: 'Reading a stack trace like a detective', slug: 'stack-trace' },
          { title: 'How to unstick yourself in 20 minutes', slug: 'unstick-yourself' },
          { title: 'Estimation is a skill, not a guess', slug: 'estimation' },
        ],
      },
      {
        name: 'Productivity',
        articles: [
          { title: 'A calendar is a promise to your future self', slug: 'calendar-promise' },
          { title: 'The inbox-zero trap for engineers', slug: 'inbox-zero-trap' },
          { title: 'Notes that compound over a career', slug: 'notes-that-compound' },
          { title: 'Saying no is a technical decision', slug: 'saying-no' },
        ],
      },
    ],
  },
  id: {
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      projects: 'Proyek',
      subscribe: 'Langganan',
    },
    langToggleLabel: 'Ganti ke Bahasa Inggris',
    hero: {
      badge: 'Tersedia untuk masalah menarik',
      title: 'Backend Engineer & Penggemar AI',
      bio: 'Backend Engineer yang berspesialisasi dalam otomatisasi sistem, integrasi jaringan, dan arsitektur basis data yang efisien. Mahir dalam Go dan PHP, dengan pengalaman membangun sistem manajemen end-to-end, provisi otomatis, serta deployment layanan andal menggunakan Docker Compose.',
      readLatest: 'Lihat Proyek',
      viewProjects: 'Lihat Proyek',
      moreAbout: 'Selengkapnya tentang saya',
    },
    about: {
      title: 'Tentang',
      heading: 'Membangun sistem backend yang andal dan terukur.',
      paragraphs: [
        'Saya membangun produk dan layanan perangkat lunak yang diandalkan setiap hari — mulai dari API berthroughput tinggi hingga integrasi kecerdasan buatan untuk otomatisasi alur kerja.',
        'Fokus saya adalah keandalan, performa, dan kesederhanaan arsitektur: sistem yang mudah dipahami, mudah dikembangkan, dan stabil saat dioperasikan. Saat tidak sedang merilis fitur, saya mengeksplorasi sistem terdistribusi, bereksperimen dengan machine learning, atau mengoptimalkan alur kerja backend.',
      ],
      skillsLabel: 'Alat yang saya andalkan',
      skills: ['Docker', 'Golang', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'REST APIs', 'MySQL', 'Flutter', 'n8n', 'Github', 'Flask', 'Tensorflow', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Machine Learning'],
    },
    experience: {
      title: 'Pengalaman',
      subtitle: 'Beberapa tempat di mana saya memberikan karya terbaik saya.',
      items: [
        {
          role: 'Full Stack Engineer Intern',
          company: 'PT Empat Inti Nukleon',
          period: 'Agu 2025 - Des 2025',
          description:
            'Merancang arsitektur backend CRM berkinerja tinggi dengan Go (Fiber), membuat 5 fitur dalam 3 bulan, dan mengurangi penginputan data manual sebesar 40%. Otomatisasi alur penagihan dengan microservice Node.js serta deployment arsitektur Docker di Proxmox dengan pemantauan Grafana.',
        },
      ],
    },
    projectsSection: {
      title: 'Proyek',
      subtitle: 'Karya pilihan yang saya banggakan telah dirilis.',
      viewAll: 'Lihat semua proyek →',
      items: [
        {
          slug: 'citra-media-ecommerce-and-forecasting',
          name: 'Citra Media Ecommerce and Forecasting',
          description:
            'Ekosistem microservice yang menghubungkan backend Laravel dengan Python/Flask API. Memiliki fitur peramalan deret waktu SARIMAX, telemetri IoT, dan gerbang pembayaran otomatis.',
          longDescription:
            'Citra Media adalah solusi e-commerce dan peramalan inventaris menyeluruh. Dibangun dengan arsitektur microservice terdistribusi, menghubungkan Laravel untuk transaksi bisnis dan Python/Flask untuk pemodelan statistik SARIMAX dalam memprediksi permintaan stok dan meminimalkan siklus overstock/understock.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API'],
          thumbnail: '/projects-image/cime/cime-produk.jpg',
          year: '2025',
          role: 'Fullstack & ML Engineer',
          missionStatus: 'completed',
          highlights: [
            'Merancang sinkronisasi microservice antara Laravel & Python Flask API',
            'Mengimplementasikan model statistik SARIMAX untuk peramalan penjualan',
            'Integrasi telemetri perangkat keras IoT & gerbang pembayaran otomatis',
            'Membangun RESTful API tangguh dengan autentikasi berbasis token',
          ],
          challenges: [
            {
              title: 'Latensi Microservice & Sinkronisasi',
              description:
                'Menghubungkan proses checkout transaksional sinkron pada Laravel dengan komputasi statistik Python yang intensif menggunakan arsitektur message queue asinkron.',
              severity: 'high',
            },
            {
              title: 'Data Deret Waktu yang Sporadis & Musiman',
              description:
                'Data penjualan memiliki interval transaksi yang tidak seragam. Menerapkan penghalusan rolling-window dan imputasi data untuk menstabilkan model SARIMAX.',
              severity: 'high',
            },
            {
              title: 'Pipeline Ingesti Telemetri Perangkat Keras',
              description:
                'Menstandarkan sensor telemetri gudang yang beragam ke dalam antrean MQTT terpadu dengan validasi skema dan ambang batas peringatan otomatis.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Orkestrasi microservice penuh antara Laravel 11 & Python Flask API' },
            { title: 'Menurunkan risiko kehabisan stok sebesar 35% melalui peramalan tren SARIMAX' },
            { title: 'Membangun gerbang webhook pembayaran otomatis untuk transaksi bersamaan' },
            { title: 'Mencapai respon endpoint API di bawah 100ms dengan keamanan token OAuth2' },
          ],
          visualLogs: [
            {
              title: 'Katalog Produk & Inventaris',
              description: 'Katalog manajemen produk real-time dengan reservasi stok dan harga varian.',
              tag: 'E-Commerce',
              image: '/projects-image/cime/cime-produk.jpg',
            },
            {
              title: 'Checkout & Gerbang Pembayaran',
              description: 'Pipeline checkout transaksi otomatis dengan konfirmasi webhook pembayaran instan.',
              tag: 'Gerbang Pembayaran',
              image: '/projects-image/cime/cime-checkout.jpg',
            },
            {
              title: 'Detail Transaksi Pelanggan',
              description: 'Pelacakan pesanan mendalam dan rincian faktur otomatis dengan metadata telemetri.',
              tag: 'Pemenuhan Pesanan',
              image: '/projects-image/cime/cime-detail-transaksi-customer.jpg',
            },
          ],
        },
        {
          slug: 'crm-lilly',
          name: 'CRM Lilly ISP & Sistem Penagihan',
          description:
            'Platform manajemen relasi pelanggan ISP berkinerja tinggi dengan provisi otomatis MikroTik, otomasi penagihan, dan monitoring jaringan langsung.',
          longDescription:
            'CRM Lilly adalah solusi manajemen ISP yang dirancang untuk mempermudah provisi pelanggan, konfigurasi router MikroTik, dan otomatisasi faktur bulanan berulang. Dibangun dengan microservice Go (Fiber) dan Node.js, sistem ini mengeliminasi kesalahan input manual dan memantau bandwidth subscriber secara real-time.',
          tags: ['Go', 'Fiber', 'MikroTik API', 'Node.js', 'PostgreSQL', 'Docker'],
          thumbnail: '/projects-image/crm-lilly/crm-lilly-monitoring.jpg',
          year: '2025',
          role: 'Backend & Network Engineer',
          missionStatus: 'shipped',
          highlights: [
            'Merancang backend Go berthroughput tinggi memangkas input data manual hingga 40%',
            'Integrasi provisi otomatis API router MikroTik dan antrean bandwidth queue',
            'Otomatisasi invoice bulanan berulang dan reminder tagihan dengan microservice Node.js',
            'Deployment arsitektur berbasis container di Proxmox dengan pemantauan Grafana',
          ],
          challenges: [
            {
              title: 'Sinkronisasi API MikroTik Konkurensi Tinggi',
              description:
                'Mengelola instruksi provisi serentak ke router MikroTik terdistribusi tanpa menyebabkan kehabisan socket atau timeout.',
              severity: 'high',
            },
            {
              title: 'Rekonsiliasi Pembayaran & Penagihan Berulang',
              description:
                'Menghilangkan duplikasi tagihan dan memastikan nol transaksi gagal selama siklus penagihan massal bulanan.',
              severity: 'high',
            },
            {
              title: 'Agregasi Telemetri Bandwidth Real-Time',
              description:
                'Mengumpulkan statistik lalu lintas bandwidth subscriber bervolume tinggi tanpa membebani kinerja gateway.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Mempercepat waktu provisi klien dari 15 menit menjadi kurang dari 5 detik' },
            { title: 'Mengotomatiskan 100% pembuatan faktur berulang dan pengiriman notifikasi pembayaran' },
            { title: 'Membangun dashboard pemantauan status dan lalu lintas jaringan subscriber real-time' },
            { title: 'Deployment infrastruktur tangguh pada Proxmox VE dengan backup terjadwal' },
          ],
          visualLogs: [
            {
              title: 'Monitoring Jaringan & Subscriber Real-Time',
              description: 'Monitor telemetri melacak penggunaan bandwidth, uptime gateway, dan latensi subscriber.',
              tag: 'Telemetri Jaringan',
              image: '/projects-image/crm-lilly/crm-lilly-monitoring.jpg',
            },
            {
              title: 'Direktori Pelanggan & Paket Berlangganan',
              description: 'Direktori terpusat mengelola paket layanan, siklus penagihan, dan kontrak pelanggan.',
              tag: 'CRM & Billing',
              image: '/projects-image/crm-lilly/crm-lilly-customer.jpg',
            },
            {
              title: 'Konsol Provisi Otomatis MikroTik',
              description: 'Antarmuka konfigurasi router instan, manajemen queue, dan provisi user PPPoE/Hotspot.',
              tag: 'MikroTik API',
              image: '/projects-image/crm-lilly/crm-lilly-mikrotik-provisioning.jpg',
            },
          ],
        },
        {
          slug: 'sanke-intelligence-system',
          name: 'SANKE Intelligence System',
          description:
            'Sistem pemantauan kualitas air berbasis IoT untuk kolam Koi. Dibuat dengan Node.js dan Laravel, memanfaatkan Logika Fuzzy Mamdani untuk mengevaluasi metrik lingkungan secara otomatis.',
          longDescription:
            'SANKE Intelligence System adalah solusi cerdas pemantauan akuakultur kolam ikan Koi. Mengambil telemetri dari sensor IoT (pH, suhu, DO) dan menjalankan mesin inferensi Logika Fuzzy Mamdani pada Node.js/Laravel untuk mengevaluasi kesehatan air dan mengaktifkan aktuator secara otomatis.',
          tags: ["Node.js", "Laravel", "Flutter", "IoT"],
          thumbnail: projects.SankeIntellegenceSystem,
          year: '2025',
          role: 'IoT & Backend Lead',
          missionStatus: 'completed',
          highlights: [
            'Membangun mesin inferensi Logika Fuzzy Mamdani untuk skor kualitas air realtime',
            'Merancang pipeline telemetri latensi rendah dengan Node.js & MQTT',
            'Mengembangkan aplikasi mobile Flutter dengan notifikasi peringatan instan',
            'Membuat portal admin Laravel dengan analisis multi-kolam',
          ],
          challenges: [
            {
              title: 'Inferensi Fuzzy Mamdani Real-Time',
              description:
                'Mengevaluasi fungsi keanggotaan kontinu multi-variabel (pH, oksigen terlarut, suhu) dengan waktu respon sub-detik pada server backend.',
              severity: 'high',
            },
            {
              title: 'Derau Sensor & Pergeseran Probe Bawah Air',
              description:
                'Probe sensor air sering mengalami interferensi sinyal listrik. Menerapkan filter Kalman dan eliminasi anomali sebelum evaluasi logika fuzzy.',
              severity: 'high',
            },
            {
              title: 'Eksekusi Relay Bi-Directional yang Andal',
              description:
                'Memastikan aktuator aerator dan pompa air kritis tetap beroperasi aman dengan konfirmasi status meskipun jaringan lokal terputus sementara.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Mengembangkan mesin Logika Fuzzy Mamdani untuk penilaian kesehatan air real-time' },
            { title: 'Membangun pipeline pub/sub MQTT di bawah 50ms menggunakan Node.js' },
            { title: 'Merilis aplikasi Flutter multiplatform dengan notifikasi peringatan darurat instan' },
            { title: 'Membuat dashboard analitik multi-kolam dengan fitur ekspor data historis' },
          ],
          visualLogs: [
            {
              title: 'Direktori & Kesehatan Multi-Kolam',
              description: 'Ringkasan metrik kualitas air multi-kolam dengan indikator skor kesehatan real-time.',
              tag: 'Telemetri IoT',
              image: '/projects-image/sanke/daftarkolam.png',
            },
            {
              title: 'Deteksi Penyakit & Anomali Otomatis',
              description: 'Analisis computer vision dan inferensi fuzzy untuk deteksi dini anomali kesehatan koi.',
              tag: 'Machine Learning',
              image: '/projects-image/sanke/deteksi-penyakit.png',
            },
            {
              title: 'Telemetri Lapangan & Kontrol Relay Mobile',
              description: 'Antarmuka aplikasi mobile menampilkan oksigen terlarut dan status relay aerator otomatis.',
              tag: 'Telemetri Mobile',
              image: '/projects-image/sanke/IMG-20241002-WA0008.png',
            },
            {
              title: 'Stream Pemantauan Sensor Real-Time',
              description: 'Telemetri sensor kontinu memantau kadar pH, suhu, dan parameter air 24/7.',
              tag: 'Monitoring Langsung',
              image: '/projects-image/sanke/WhatsApp Image 2024-10-02 at 23.10.15_ac87dd75.png',
            },
          ],
        },
        {
          slug: 'masroster-ecommerce-and-forecasting',
          name: 'MASROSTER Ecommerce and Forecasting',
          description:
            'Backend e-commerce tingkat enterprise terintegrasi dengan pipeline data prediktif LSTM dan Facebook Prophet untuk peramalan inventaris yang akurat.',
          longDescription:
            'MASROSTER menggabungkan workflow e-commerce enterprise dengan analitik prediktif deep learning. Memanfaatkan jaringan saraf berulang LSTM dan model Facebook Prophet untuk memprediksi fluktuasi permintaan musiman dan rekomendasi pemesanan ulang otomatis.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API', 'Deep Learning'],
          thumbnail: '/projects-image/masroster/masroster-dashboard.jpg',
          year: '2024',
          role: 'Backend & ML Engineer',
          missionStatus: 'in-progress',
          highlights: [
            'Melatih model LSTM dan Facebook Prophet pada dataset transaksi historis',
            'Membangun katalog dan mesin pemesanan e-commerce Laravel berkecepatan tinggi',
            'Membuat pipeline prapemrosesan data otomatis dan pelatihan ulang terjadwal',
            'Menyajikan dashboard visualisasi interaktif untuk peramalan bisnis',
          ],
          challenges: [
            {
              title: 'Beban Memori Model Deep Learning',
              description:
                'Menjalankan inferensi LSTM berulang pada ribuan SKU produk membutuhkan optimasi batching dan kuantisasi model yang efisien.',
              severity: 'high',
            },
            {
              title: 'Fluktuasi Musiman & Hari Libur',
              description:
                'Mengakomodasi lonjakan flash sale musiman dengan mengombinasikan changepoint Prophet dan sekuens LSTM.',
              severity: 'medium',
            },
            {
              title: 'Kunci Inventaris Berkecepatan Tinggi',
              description:
                'Mencegah over-allocation stok saat puncak transaksi dengan mengimplementasikan kunci transaksi atomik Redis.',
              severity: 'high',
            },
          ],
          achievements: [
            { title: 'Melatih model LSTM & Prophet berakurasi tinggi pada data transaksi multi-tahun' },
            { title: 'Membangun backend katalog dan checkout Laravel berkapasitas transaksi tinggi' },
            { title: 'Otomatisasi pipeline ETL terjadwal dengan antrean worker asinkron' },
            { title: 'Menghadirkan dashboard visualisasi peramalan dengan rentang confidence interval' },
          ],
          visualLogs: [
            {
              title: 'Analitik Eksekutif & Prediksi Permintaan',
              description: 'Dashboard terintegrasi memetakan proyeksi penjualan LSTM terhadap target musiman.',
              tag: 'Analitik Prediktif',
              image: '/projects-image/masroster/masroster-dashboard.jpg',
            },
            {
              title: 'Checkout E-Commerce & Kunci Stok',
              description: 'Alur checkout konkurensi tinggi dengan penguncian stok atomik dan pemrosesan pembayaran.',
              tag: 'E-Commerce',
              image: '/projects-image/masroster/masroster-checkout.jpg',
            },
            {
              title: 'Intelijen Tren Kata Kunci Pencarian',
              description: 'Analisis kecepatan tren pencarian kata kunci membantu keputusan pemesanan ulang otomatis.',
              tag: 'NLP & Analitik',
              image: '/projects-image/masroster/masroster-keyword.jpg',
            },
          ],
        },
        {
          slug: 'restorant',
          name: 'RestoranT',
          description:
            'Sistem pemesanan dua platform yang menghubungkan aplikasi klien Flutter dengan dashboard administrasi Laravel.',
          longDescription:
            'RestoranT memodernisasi pemesanan restoran dan alur kerja dapur. Pelanggan memesan melalui aplikasi Flutter yang intuitif, sementara staf dapur mengelola status pesanan secara langsung melalui dashboard Laravel dengan pembaruan status instan.',
          tags: ["Flutter", "Laravel", "MySQL"],
          thumbnail: '/projects-image/restorant/restorant-dashboard.jpg',
          year: '2024',
          role: 'Mobile & Backend Developer',
          missionStatus: 'completed',
          highlights: [
            'Mengembangkan aplikasi mobile Flutter dengan antarmuka menu & keranjang interaktif',
            'Membangun manajemen status pesanan realtime dengan Laravel & WebSockets',
            'Optimasi skema relasional MySQL untuk volume pesanan tinggi',
            'Integrasi pencetakan struk dan dukungan thermal printer',
          ],
          challenges: [
            {
              title: 'Sinkronisasi Status Pesanan Multi-Layar',
              description:
                'Menyelaraskan status pesanan secara instan antara ponsel pelanggan, layar dapur (KDS), dan kasir tanpa paket hilang.',
              severity: 'high',
            },
            {
              title: 'Ketahanan Antrean Pesanan Offline',
              description:
                'Memungkinkan pelayan mengambil pesanan saat Wi-Fi terputus, dengan sinkronisasi otomatis saat terhubung kembali.',
              severity: 'medium',
            },
            {
              title: 'Abstraksi Driver Thermal Printer',
              description:
                'Membangun pipeline pencetakan jaringan ESC/POS asinkron untuk berbagai pos dapur dengan mekanisme retry antrean.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Merilis sistem ganda menghubungkan aplikasi klien Flutter dengan hub Laravel' },
            { title: 'Sinkronisasi status pesanan sub-detik melalui broadcasting event WebSocket' },
            { title: 'Optimasi skema relasional mendukung volume pesanan meja tinggi pada jam sibuk' },
            { title: 'Integrasi pengiriman tiket pesanan dapur otomatis dengan printer termal ESC/POS' },
          ],
          visualLogs: [
            {
              title: 'Dashboard Komando Dapur & Pesanan',
              description: 'Dashboard administratif melacak pesanan meja real-time, pendapatan harian, dan antrean dapur.',
              tag: 'Portal Admin',
              image: '/projects-image/restorant/restorant-dashboard.jpg',
            },
            {
              title: 'Katalog Menu & Kategori Digital',
              description: 'Antarmuka pemilihan menu mobile dengan chip preferensi makanan, modifikasi, dan harga.',
              tag: 'Klien Flutter',
              image: '/projects-image/restorant/restorant-daftar-makanan.jpg',
            },
            {
              title: 'Modifikasi Menu & Kustomisasi Porsi',
              description: 'Modal kustomisasi makanan memungkinkan tamu memilih level pedas dan ekstra topping.',
              tag: 'UI Mobile',
              image: '/projects-image/restorant/restorant-detail-makanan.jpg',
            },
            {
              title: 'Keranjang Meja & Review Pesanan',
              description: 'Ringkasan pesanan meja real-time dengan pengiriman instan ke layar sistem dapur.',
              tag: 'Keranjang & Checkout',
              image: '/projects-image/restorant/restorant-cart.jpg',
            },
            {
              title: 'Daftar Antrean Tiket Dapur',
              description: 'Antrean tiket persiapan dapur dengan pengubah status dan pemicu cetak struk otomatis.',
              tag: 'Layar Dapur',
              image: '/projects-image/restorant/restorant-list-pesanan.jpg',
            },
          ],
        },
        {
          slug: 'elibrary-desktop',
          name: 'Sistem Manajemen Perpustakaan Desktop (E-Library)',
          description:
            'Aplikasi desktop lintas platform untuk pengindeksan katalog perpustakaan, sirkulasi anggota, dan pelacakan peminjaman barcode otomatis.',
          longDescription:
            'E-Library Desktop memberikan sistem manajemen katalog responsif dengan arsitektur offline-first untuk perpustakaan institusi. Mendukung pemindaian barcode/ISBN instan, perhitungan denda keterlambatan otomatis, dan analitik sirkulasi lengkap.',
          tags: ['Desktop App', 'Electron', 'TypeScript', 'SQLite', 'TailwindCSS'],
          thumbnail: '/projects-image/elibrary-desktop/elibrary-desktop.jpg',
          year: '2024',
          role: 'Desktop Application Developer',
          missionStatus: 'completed',
          highlights: [
            'Mengembangkan klien desktop lintas platform dengan sinkronisasi SQLite offline-first',
            'Integrasi input scanner barcode perangkat keras untuk peminjaman buku sub-detik',
            'Otomatisasi kalkulasi denda keterlambatan dan pencetakan bukti transaksi digital',
            'Menyajikan laporan komprehensif tren peminjaman dan audit stok buku berkala',
          ],
          challenges: [
            {
              title: 'Sinkronisasi Basis Data Lokal Offline-First',
              description:
                'Memastikan kinerja database SQLite lokal tetap cepat dan menjaga integritas data saat sinkronisasi periodik ke server.',
              severity: 'high',
            },
            {
              title: 'Integrasi Perangkat Keras Scanner Barcode',
              description:
                'Menangani stream data input scanner barcode serial dan USB HID secara andal di berbagai sistem operasi desktop.',
              severity: 'medium',
            },
          ],
          achievements: [
            { title: 'Membangun katalog desktop terstruktur mengindeks ribuan entri buku' },
            { title: 'Implementasi checkout barcode instan memangkas waktu tunggu antrean hingga 60%' },
            { title: 'Otomatisasi perhitungan denda dan ekspor rekapitulasi sirkulasi bulanan' },
          ],
          visualLogs: [
            {
              title: 'Manajemen Sirkulasi & Inventaris Buku',
              description: 'Jendela utama manajemen menampilkan pencarian katalog, ketersediaan buku, dan sirkulasi peminjaman.',
              tag: 'UI Desktop',
              image: '/projects-image/elibrary-desktop/elibrary-desktop.jpg',
            },
          ],
        },
        {
          slug: 'elibrary-mobile',
          name: 'Aplikasi Mobile E-Library',
          description:
            'Aplikasi mobile pendamping anggota perpustakaan untuk menjelajah koleksi digital, mereservasi buku fisik, dan menerima pengingat tenggat waktu.',
          longDescription:
            'E-Library Mobile adalah aplikasi pendamping ekosistem perpustakaan. Dibuat dengan Flutter, memungkinkan anggota mencari buku, membaca kutipan digital, melakukan reservasi buku fisik, dan menerima pemberitahuan otomatis masa pengembalian.',
          tags: ['Flutter', 'Mobile App', 'RESTful API', 'Push Notifications'],
          thumbnail: '/projects-image/elibrary-mobile/elibrary-mobile-thumbnail.jpg',
          year: '2024',
          role: 'Mobile Developer',
          missionStatus: 'completed',
          highlights: [
            'Klien mobile multiplatform dengan katalog buku digital yang intuitif',
            'Reservasi buku real-time dan notifikasi antrean pengambilan',
            'Kartu anggota digital terintegrasi dengan barcode & QR pass dinamis',
          ],
          challenges: [
            {
              title: 'Penguncian Reservasi Real-Time',
              description:
                'Mencegah race condition ketika banyak anggota mencoba mereservasi eksemplar fisik terakhir secara bersamaan.',
              severity: 'high',
            },
          ],
          achievements: [
            { title: 'Mengembangkan aplikasi pencarian dan reservasi mobile yang responsif' },
            { title: 'Mengimplementasikan push notification otomatis untuk jadwal pengambilan dan jatuh tempo' },
          ],
          visualLogs: [
            {
              title: 'Dashboard',
              description: 'Feed penjelajahan buku interaktif dengan pencarian, filter kategori, dan aksi reservasi langsung.',
              tag: 'Aplikasi Mobile',
              image: '/projects-image/elibrary-mobile/elibrary-mobile-dashboard.jpg',
            },
            {
              title: 'Input Buku Digital',
              description: 'Formulir tambah buku dengan validasi input real-time dan integrasi barcode scanner otomatis.',
              tag: 'Aplikasi Mobile',
              image: '/projects-image/elibrary-mobile/elibrary-mobile-addbook.jpg',
            },
          ],
        },
      ],
    },
    featured: {
      title: 'Terbaru',
      subtitle: 'Tulisan terkini dan karya pilihan.',
      viewAll: 'Lihat semua →',
    },
    contact: {
      title: 'Hubungi Saya',
      subtitle: 'Memiliki proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!',
      nameLabel: 'Nama Anda',
      emailLabel: 'Alamat Email',
      subjectLabel: 'Subjek',
      messageLabel: 'Pesan',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderSubject: 'Pertanyaan Proyek',
      placeholderMessage: 'Tuliskan pesan atau pertanyaan Anda...',
      sendButton: 'Kirim Pesan',
      directContact: 'Kontak Langsung',
      locationLabel: 'Lokasi',
      getInTouch: 'Hubungi Segera',
    },
    footer: {
      rights: 'Seluruh hak cipta dilindungi.',
      poweredBy: 'Ditenagai oleh Next.js',
    },
    posts: [
      {
        slug: 'shipping-ai-features-without-losing-your-mind',
        title: 'Merilis fitur AI tanpa kehilangan akal sehat',
        excerpt:
          'Panduan praktis untuk mengintegrasikan LLM ke aplikasi produksi — evaluasi, pengaman, dan menjaga latensi tetap terkendali.',
        category: 'Integrasi AI',
        date: '4 Agu 2026',
      },
      {
        slug: 'the-architecture-i-reach-for-first',
        title: 'Arsitektur yang saya pilih pertama kali',
        excerpt:
          'Mengapa saya cenderung memilih sistem yang sederhana dan mudah dirangkai, serta bagaimana sedikit primitif bisa berkembang lebih jauh daripada kebanyakan framework.',
        category: 'Pengembangan Perangkat Lunak',
        date: '22 Jul 2026',
      },
      {
        slug: 'debugging-is-a-search-problem',
        title: 'Debugging adalah masalah pencarian',
        excerpt:
          'Memperlakukan bug seperti pencarian biner atas asumsi Anda mengubah kepanikan menjadi proses yang tenang dan berulang.',
        category: 'Pemecahan Masalah',
        date: '9 Jul 2026',
      },
      {
        slug: 'the-coffee-driven-workflow',
        title: 'Alur kerja yang digerakkan kopi',
        excerpt:
          'Bagaimana saya menyusun blok kerja mendalam, menjaga fokus, dan memakai ritual kecil agar konsisten selama bertahun-tahun, bukan berminggu-minggu.',
        category: 'Produktivitas',
        date: '28 Jun 2026',
      },
    ],
    categories: [
      {
        name: 'Rekayasa',
        articles: [
          { title: 'Merancang API yang benar-benar nyaman digunakan', slug: 'designing-apis' },
          { title: 'Aman-tipe dari basis data hingga tombol', slug: 'type-safe-stack' },
          { title: 'Kapan menulis abstraksi (dan kapan tidak)', slug: 'abstractions' },
          { title: 'Server components mengubah cara saya memikirkan data', slug: 'server-components' },
        ],
      },
      {
        name: 'Pemecahan Masalah',
        articles: [
          { title: 'Lima-mengapa, tapi untuk tes yang tidak stabil', slug: 'flaky-tests' },
          { title: 'Membaca stack trace seperti seorang detektif', slug: 'stack-trace' },
          { title: 'Cara melepaskan diri dari kebuntuan dalam 20 menit', slug: 'unstick-yourself' },
          { title: 'Estimasi adalah keterampilan, bukan tebakan', slug: 'estimation' },
        ],
      },
      {
        name: 'Produktivitas',
        articles: [
          { title: 'Kalender adalah janji untuk diri Anda di masa depan', slug: 'calendar-promise' },
          { title: 'Jebakan inbox-zero bagi para insinyur', slug: 'inbox-zero-trap' },
          { title: 'Catatan yang bertumbuh sepanjang karier', slug: 'notes-that-compound' },
          { title: 'Berkata tidak adalah keputusan teknis', slug: 'saying-no' },
        ],
      },
    ],
  },
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'preferred-locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  // hydrate from a previously saved preference
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'id') {
      setLocaleState(saved)
    }
  }, [])

  // persist and reflect on <html lang>
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'id' ? 'id' : 'en'
  }, [locale])

  const setLocale = (next: Locale) => setLocaleState(next)
  const toggleLocale = () => setLocaleState((prev) => (prev === 'en' ? 'id' : 'en'))

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
