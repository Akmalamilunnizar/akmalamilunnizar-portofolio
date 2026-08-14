'use client'

import { useLanguage } from '@/lib/i18n'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-t border-border py-20 outline-none md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="experience-heading"
          className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
        >
          {t.experience.title}
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {t.experience.subtitle}
        </p>

        <ol className="mt-10 flex flex-col">
          {t.experience.items.map((item, i) => (
            <li
              key={`${item.company}-${i}`}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <div className="font-mono text-xs text-muted-foreground">
                {item.period}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.role}{' '}
                  <span className="text-accent">· {item.company}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
