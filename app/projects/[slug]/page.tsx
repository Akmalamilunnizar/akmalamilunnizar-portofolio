'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  User,
  Layers,
  Code2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ImageIcon,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useLanguage, getProjectSlug, Project } from '@/lib/i18n'

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = use(params)
  const { slug } = resolvedParams
  const { t, locale } = useLanguage()

  const projects = t.projectsSection.items
  const currentIndex = projects.findIndex(
    (p) => getProjectSlug(p) === slug
  )
  const project: Project | undefined = projects[currentIndex]

  // Next and Previous projects for footer navigation
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="rounded-2xl border border-dashed border-border p-12">
            <h1 className="text-2xl font-bold text-foreground">
              {locale === 'id' ? 'Proyek Tidak Ditemukan' : 'Project Not Found'}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {locale === 'id'
                ? `Proyek dengan slug "${slug}" tidak ditemukan.`
                : `The project with slug "${slug}" could not be located.`}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                {locale === 'id' ? 'Kembali ke Semua Proyek' : 'Back to All Projects'}
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'id' ? 'Kembali ke Proyek' : 'Back to Projects'}
          </Link>

          <span className="font-mono text-xs text-muted-foreground">
            PROJECT // {getProjectSlug(project)}
          </span>
        </div>

        {/* Project Header Hero */}
        <header className="mt-8 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FEATURED SHOWCASE</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {project.name}
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Metadata Pill Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 border-y border-border py-4 sm:grid-cols-4">
            {project.year && (
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-card border border-border p-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase">
                    {locale === 'id' ? 'Tahun' : 'Timeline'}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{project.year}</span>
                </div>
              </div>
            )}

            {project.role && (
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-card border border-border p-2 text-muted-foreground">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-muted-foreground uppercase">
                    {locale === 'id' ? 'Peran' : 'Role'}
                  </span>
                  <span className="text-xs font-semibold text-foreground">{project.role}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-card border border-border p-2 text-muted-foreground">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-muted-foreground uppercase">
                  {locale === 'id' ? 'Kategori' : 'Domain'}
                </span>
                <span className="text-xs font-semibold text-foreground">{project.tags[0] || 'Software'}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-card border border-border p-2 text-muted-foreground">
                <Code2 className="h-4 w-4 text-accent" />
              </div>
              <div>
                <span className="block font-mono text-[10px] text-muted-foreground uppercase">
                  {locale === 'id' ? 'Teknologi' : 'Stack Count'}
                </span>
                <span className="text-xs font-semibold text-foreground">{project.tags.length} Technologies</span>
              </div>
            </div>
          </div>
        </header>

        {/* Showcase Image / Visual Presentation Frame */}
        <section className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/5">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                https://portfolio.local/showcase/{getProjectSlug(project)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Media Viewport */}
          <div className="relative aspect-video w-full overflow-hidden bg-muted/40 flex items-center justify-center p-4 md:p-8">
            {typeof project.thumbnail === 'function' ? (
              (() => {
                const ThumbnailIcon = project.thumbnail as React.ComponentType<React.SVGProps<SVGSVGElement>>
                return (
                  <ThumbnailIcon
                    className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                    preserveAspectRatio="xMidYMid meet"
                  />
                )
              })()
            ) : project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-contain p-4 transition-transform duration-500 hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-12 text-center text-muted-foreground">
                <div className="rounded-full bg-card border border-border p-4 shadow-sm">
                  <ImageIcon className="h-10 w-10 text-accent/80" />
                </div>
                <div className="max-w-sm">
                  <span className="block font-semibold text-sm text-foreground">
                    {locale === 'id' ? 'Tampilan Pratinjau Proyek' : 'Project Architecture & Preview'}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground mt-1 block">
                    {project.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Detailed Content Grid */}
        <section className="mt-12 grid gap-10 md:grid-cols-12">
          {/* Main Content Column */}
          <div className="space-y-8 md:col-span-8">
            {/* Overview / Deep Dive */}
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                {locale === 'id' ? 'Gambaran Umum Proyek' : 'Project Overview'}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {locale === 'id' ? 'Fitur & Keunggulan Rekayasa' : 'Key Engineering Highlights'}
                </h2>
                <div className="mt-4 grid gap-3">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-accent/40"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-sm leading-relaxed text-foreground/90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6 md:col-span-4">
            {/* Tech Stack Box */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <Code2 className="h-4 w-4 text-accent" />
                <span>{locale === 'id' ? 'Teknologi Digunakan' : 'Technology Stack'}</span>
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent/60"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action / Contact card */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="font-semibold text-foreground">
                {locale === 'id' ? 'Tertarik dengan proyek ini?' : 'Interested in this work?'}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {locale === 'id'
                  ? 'Mari berdiskusi tentang bagaimana teknologi serupa dapat diterapkan pada kebutuhan sistem Anda.'
                  : 'Let’s discuss how similar distributed architectures or ML pipelines can solve your technical challenges.'}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90"
              >
                <span>{locale === 'id' ? 'Hubungi Saya' : 'Get in Touch'}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Next/Prev Project Navigation */}
        <section className="mt-16 border-t border-border pt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prevProject ? (
              <Link
                href={`/projects/${getProjectSlug(prevProject)}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  {locale === 'id' ? 'Proyek Sebelumnya' : 'Previous Project'}
                </span>
                <span className="mt-1 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/projects/${getProjectSlug(nextProject)}`}
                className="group flex flex-col items-end text-right rounded-xl border border-border bg-card p-4 transition-all hover:border-accent hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  {locale === 'id' ? 'Proyek Selanjutnya' : 'Next Project'}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="mt-1 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {nextProject.name}
                </span>
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
