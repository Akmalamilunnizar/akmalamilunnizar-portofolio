'use client'

import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* very dim geometric grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {t.hero.badge}
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {t.hero.bio}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.hero.viewProjects}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.hero.moreAbout}
          </a>
        </div>
      </div>
    </section>
  )
}
