'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight, ImageIcon, Search, X, Layers, Code, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useLanguage, getProjectSlug } from '@/lib/i18n'

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const projects = t.projectsSection.items

  // Filter categories
  const categories = ['All', 'Machine Learning', 'IoT', 'Web App', 'Mobile']

  // Filter projects by search query and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : selectedCategory === 'Machine Learning'
          ? project.tags.some((t) => ['Machine Learning', 'Deep Learning', 'Flask', 'Python'].includes(t))
          : selectedCategory === 'IoT'
            ? project.tags.some((t) => ['IoT', 'Mamdan'].includes(t))
            : selectedCategory === 'Mobile'
              ? project.tags.includes('Flutter')
              : project.tags.some((t) => ['Laravel', 'Node.js', 'RESTful API', 'MySQL'].includes(t))

    return matchesSearch && matchesCategory
  })

  // Stack calculation
  const popularStack = Array.from(
    new Set(filteredProjects.flatMap((p) => p.tags))
  ).slice(0, 3).join(', ') || 'Go, Python, Laravel'

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero Banner Section */}
        <header className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.projectsSection.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.projectsSection.subtitle}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card/50 p-4 sm:grid-cols-4">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted-foreground">TOTAL SHIPPED</span>
              <span className="mt-1 text-2xl font-bold text-foreground">{projects.length}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted-foreground">CORE DOMAINS</span>
              <span className="mt-1 text-2xl font-bold text-foreground">4</span>
            </div>
            <div className="col-span-2 sm:col-span-2 flex flex-col justify-center">
              <span className="font-mono text-xs text-muted-foreground">TOP TECHNOLOGIES</span>
              <span className="mt-1 truncate font-mono text-xs text-accent">{popularStack}</span>
            </div>
          </div>
        </header>

        {/* Search and Category Filter Section */}
        <section className="mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, description, or stack (e.g., Laravel, IoT, Python)..."
              className="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2 font-mono text-xs text-muted-foreground">
              <Layers className="h-3.5 w-3.5" />
              <span>CATEGORY:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Project Cards (Featured Browser-Style Preview Layout) */}
        <div className="space-y-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Link
                key={project.name}
                href={`/projects/${getProjectSlug(project)}`}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {/* Browser Frame Top Bar */}
                <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-destructive/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                      PREVIEW FRAME // {getProjectSlug(project)}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>

                <div className="grid gap-6 p-6 md:grid-cols-12 md:p-8">
                  {/* Left Column: Image Stock / Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/50 md:col-span-5 flex items-center justify-center p-2">
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
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-muted-foreground bg-secondary/20">
                        <div className="rounded-full bg-background p-3 shadow-sm border border-border">
                          <ImageIcon className="h-7 w-7 text-accent" />
                        </div>
                        <div>
                          <span className="block font-semibold text-xs text-foreground">
                            Thumbnail Placeholder
                          </span>
                          <span className="font-mono text-[11px] text-muted-foreground">
                            Pass custom image URL in i18n
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Project Info */}
                  <div className="flex flex-col justify-between md:col-span-7">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground mb-3">
                        <Code className="h-3.5 w-3.5 text-accent" />
                        <span>TECHNOLOGY STACK</span>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-accent/40"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-16 text-center">
              <Search className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
              <h3 className="text-base font-semibold text-foreground">No matching projects found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search query or filter categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="mt-4 rounded-full border border-border px-4 py-1.5 text-xs font-mono text-accent hover:border-accent"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}


