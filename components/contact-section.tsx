'use client'

import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function XTwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function ContactSection() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'akmal-amilunnizar',
      url: 'https://linkedin.com',
      icon: LinkedinIcon,
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'GitHub',
      handle: 'akmalamilunnizar',
      url: 'https://github.com',
      icon: GithubIcon,
      color: 'hover:text-foreground hover:border-foreground/40',
    },
    {
      name: 'Instagram',
      handle: '@akmalamilunnizar',
      url: 'https://instagram.com',
      icon: InstagramIcon,
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    },
    {
      name: 'X (Twitter)',
      handle: '@akmalamilunnizar',
      url: 'https://x.com',
      icon: XTwitterIcon,
      color: 'hover:text-foreground hover:border-foreground/40',
    },
    {
      name: 'Email',
      handle: 'akmalamilunnizar@gmail.com',
      url: 'mailto:akmalamilunnizar@gmail.com',
      icon: Mail,
      color: 'hover:text-accent hover:border-accent/40',
    },
  ]

  return (
    <section id="contact" className="border-b border-border py-20 scroll-mt-16 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 mb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
        </div>

        {/* Social Media Links Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg ${social.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg border border-border bg-background p-3 text-muted-foreground transition-colors group-hover:text-current">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-current">
                      {social.name}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-current" />
              </a>
            )
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            {t.contact.getInTouch}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
