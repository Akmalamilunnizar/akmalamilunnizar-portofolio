'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import * as projects from '@/public/projects/projects'

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
      readLatest: 'Read the latest',
      moreAbout: 'More about me',
    },
    about: {
      title: 'About',
      heading: 'Engineer at heart, writer by habit.',
      paragraphs: [
        'I have spent the last decade building products that people rely on every day — from high-traffic APIs to AI-powered tools that turn messy data into clear decisions.',
        'My focus is on reliability and clarity: systems that are simple to reason about, easy to extend, and calm to operate. When I am not shipping, I am writing about the craft or mentoring other engineers.',
      ],
      skillsLabel: 'Tools I reach for',
      skills: ['Docker', 'Golang', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'REST APIs', 'MySQL' , 'Flutter' , 'n8n' , 'Github' , 'Flask' , 'Tensorflow' , 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Machine Learning'],
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
          thumbnail: '',
          year: '2025',
          role: 'Fullstack & ML Engineer',
          highlights: [
            'Architected microservice sync between Laravel & Python Flask API',
            'Implemented SARIMAX statistical modeling for sales forecasting',
            'Integrated real-time IoT hardware telemetry & automated payment gateways',
            'Constructed robust RESTful API with tokenized authentication',
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
          highlights: [
            'Built Mamdani Fuzzy Logic inference engine for real-time water scoring',
            'Engineered low-latency telemetry ingestion pipeline with Node.js & MQTT',
            'Developed cross-platform Flutter companion app with live alerts',
            'Designed Laravel administrative portal with multi-pond analytics',
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
          thumbnail: '',
          year: '2024',
          role: 'Backend & ML Engineer',
          highlights: [
            'Trained LSTM and Facebook Prophet models on historical transactional datasets',
            'Engineered high-throughput Laravel e-commerce catalog and ordering engine',
            'Built automated data preprocessing and scheduled retraining pipelines',
            'Delivered interactive visualization dashboard for business forecasts',
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
          thumbnail: '',
          year: '2024',
          role: 'Mobile & Backend Developer',
          highlights: [
            'Developed Flutter mobile app with interactive menu & cart experience',
            'Engineered real-time order state management with Laravel & WebSockets',
            'Optimized relational MySQL schema for high concurrent table orders',
            'Integrated receipt generation and thermal printer dispatch support',
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
      bio: 'Saya membangun sistem yang andal dan menulis tentang keahlian di baliknya — mulai dari merilis fitur AI yang tahan di produksi hingga kebiasaan tenang yang menjadikan rekayasa perangkat lunak sebagai permainan jangka panjang. Seimbang antara kode dan kopi.',
      readLatest: 'Baca yang terbaru',
      moreAbout: 'Selengkapnya tentang saya',
    },
    about: {
      title: 'Tentang',
      heading: 'Insinyur sejati, penulis karena kebiasaan.',
      paragraphs: [
        'Selama satu dekade terakhir saya membangun produk yang diandalkan orang setiap hari — mulai dari API berlalu lintas tinggi hingga alat bertenaga AI yang mengubah data berantakan menjadi keputusan yang jelas.',
        'Fokus saya adalah keandalan dan kejelasan: sistem yang mudah dipahami, mudah dikembangkan, dan tenang untuk dioperasikan. Saat tidak sedang merilis, saya menulis tentang keahlian ini atau membimbing insinyur lain.',
      ],
      skillsLabel: 'Alat yang saya andalkan',
      skills: ['Docker', 'Golang', 'PHP', 'Laravel', 'Vue.js', 'Nuxt.js', 'REST APIs', 'MySQL' , 'Flutter' , 'n8n' , 'Github' , 'Flask' , 'Tensorflow' , 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Machine Learning'],
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
            'Citra Media adalah solusi e-commerce dan peramalan inventaris menyeluruh. Dibangun dengan arsitektur microservice terdistribusi, menghubungkan Laravel untuk transaksi bisnis dan Python/Flask untuk pemodelan statistik SARIMAX dalam memprediksi permintaan stok.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API'],
          thumbnail: '',
          year: '2025',
          role: 'Fullstack & ML Engineer',
          highlights: [
            'Merancang sinkronisasi microservice antara Laravel & Python Flask API',
            'Mengimplementasikan model statistik SARIMAX untuk peramalan penjualan',
            'Integrasi telemetri perangkat keras IoT & gerbang pembayaran otomatis',
            'Membangun RESTful API tangguh dengan autentikasi berbasis token',
          ],
        },
        {
          slug: 'sanke-intelligence-system',
          name: 'SANKE Intelligence System',
          description:
            'Sistem pemantauan kualitas air berbasis IoT untuk kolam Koi. Dibuat dengan Node.js dan Laravel, memanfaatkan Logika Fuzzy Mamdani untuk mengevaluasi metrik lingkungan secara otomatis.',
          longDescription:
            'SANKE Intelligence System adalah solusi cerdas pemantauan akuakultur kolam ikan Koi. Mengambil telemetri dari sensor IoT (pH, suhu, DO) dan menjalankan mesin inferensi Logika Fuzzy Mamdani pada Node.js/Laravel untuk mengevaluasi kesehatan air.',
          tags: ["Node.js", "Laravel", "Flutter", "IoT"],
          thumbnail: projects.SankeIntellegenceSystem,
          year: '2025',
          role: 'IoT & Backend Lead',
          highlights: [
            'Membangun mesin inferensi Logika Fuzzy Mamdani untuk skor kualitas air realtime',
            'Merancang pipeline telemetri latensi rendah dengan Node.js & MQTT',
            'Mengembangkan aplikasi mobile Flutter dengan notifikasi peringatan instan',
            'Membuat portal admin Laravel dengan analisis multi-kolam',
          ],
        },
        {
          slug: 'masroster-ecommerce-and-forecasting',
          name: 'MASROSTER Ecommerce and Forecasting',
          description:
            'Backend e-commerce tingkat enterprise terintegrasi dengan pipeline data prediktif LSTM dan Facebook Prophet untuk peramalan inventaris yang akurat.',
          longDescription:
            'MASROSTER menggabungkan workflow e-commerce enterprise dengan analitik prediktif deep learning. Memanfaatkan jaringan saraf berulang LSTM dan model Facebook Prophet untuk memprediksi fluktuasi permintaan musiman.',
          tags: ['Laravel', 'Python', 'Flask', 'Machine Learning', 'RESTful API', 'Deep Learning'],
          thumbnail: '',
          year: '2024',
          role: 'Backend & ML Engineer',
          highlights: [
            'Melatih model LSTM dan Facebook Prophet pada dataset transaksi historis',
            'Membangun katalog dan mesin pemesanan e-commerce Laravel berkecepatan tinggi',
            'Membuat pipeline prapemrosesan data otomatis dan pelatihan ulang terjadwal',
            'Menyajikan dashboard visualisasi interaktif untuk peramalan bisnis',
          ],
        },
        {
          slug: 'restorant',
          name: 'RestoranT',
          description:
            'Sistem pemesanan dua platform yang menghubungkan aplikasi klien Flutter dengan dashboard administrasi Laravel.',
          longDescription:
            'RestoranT memodernisasi pemesanan restoran dan alur kerja dapur. Pelanggan memesan melalui aplikasi Flutter yang intuitif, sementara staf dapur mengelola status pesanan secara langsung melalui dashboard Laravel.',
          tags: ["Flutter", "Laravel", "MySQL"],
          thumbnail: '',
          year: '2024',
          role: 'Mobile & Backend Developer',
          highlights: [
            'Mengembangkan aplikasi mobile Flutter dengan antarmuka menu & keranjang interaktif',
            'Membangun manajemen status pesanan realtime dengan Laravel & WebSockets',
            'Optimasi skema relasional MySQL untuk volume pesanan tinggi',
            'Integrasi pencetakan struk dan dukungan thermal printer',
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
