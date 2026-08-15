'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { useLanguage, getProjectSlug } from '@/lib/i18n'

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-border py-20 outline-none md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              id="projects-heading"
              className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {t.projectsSection.title}
            </h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {t.projectsSection.subtitle}
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex text-red-400 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            {t.projectsSection.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projectsSection.items.map((project) => (
            <Link
              key={project.name}
              href={`/projects/${getProjectSlug(project)}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* Thumbnail Container / Image Stock Placeholder */}
              <div className="relative aspect-video w-full overflow-hidden bg-muted/60 border-b border-border flex items-center justify-center p-2">
                {typeof project.thumbnail === 'function' ? (
                  (() => {
                    const ThumbnailIcon = project.thumbnail as React.ComponentType<React.SVGProps<SVGSVGElement>>
                    return <ThumbnailIcon className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" preserveAspectRatio="xMidYMid meet" />
                  })()
                ) : project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground bg-secondary/30">
                    <div className="rounded-full bg-background/80 p-3 shadow-inner">
                      <ImageIcon className="h-6 w-6 text-accent/70" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/80">
                      Thumbnail Placeholder
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

