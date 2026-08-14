'use client'

import { useLanguage } from '@/lib/i18n'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-border py-20 outline-none md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {t.about.title}
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2
              id="about-heading"
              className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {t.about.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {t.about.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.about.skillsLabel}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.about.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
