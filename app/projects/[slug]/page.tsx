'use client'

import { use, useState } from 'react'
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
  Swords,
  Trophy,
  Activity,
  Maximize2,
  X,
  FileText,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useLanguage, getProjectSlug, Project, ProjectChallenge, ProjectVisualLog } from '@/lib/i18n'

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
  const [selectedVisualLog, setSelectedVisualLog] = useState<ProjectVisualLog | null>(null)

  const projects = t.projectsSection.items
  const currentIndex = projects.findIndex((p) => getProjectSlug(p) === slug)
  const project: Project | undefined = projects[currentIndex]

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

  const missionStatusText =
    project.missionStatus === 'shipped'
      ? locale === 'id' ? 'Status Misi: Telah Dirilis' : 'Mission Status: Shipped'
      : project.missionStatus === 'completed'
        ? locale === 'id' ? 'Status Misi: Selesai' : 'Mission Status: Completed'
        : locale === 'id' ? 'Status Misi: Berjalan' : 'Mission Status: In-Progress'

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
            {locale === 'id' ? 'Kembali ke Daftar Proyek' : 'Return to Quest Log'}
          </Link>

          <span className="font-mono text-xs text-muted-foreground">
            LOG // {getProjectSlug(project)}
          </span>
        </div>

        {/* Hero Banner Section */}
        <header className="mt-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
              <Activity className="h-3.5 w-3.5" />
              <span>{missionStatusText}</span>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-mono text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-mono text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live System</span>
                </a>
              )}
            </div>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {project.name}
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Quick Metrics Bar */}
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

        {/* Hero Viewport / Visual Preview Frame */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-accent/5">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                PREVIEW // {getProjectSlug(project)}
              </span>
            </div>
          </div>

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
                    {locale === 'id' ? 'Pratinjau Sistem Terpadu' : 'Unified System Preview'}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground mt-1 block">
                    {project.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Two-Column Detail Layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Main Content (Left Column) */}
          <div className="space-y-12 lg:col-span-8">
            {/* Mission Briefing / Overview */}
            <section id="overview">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-card border border-border p-2">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {locale === 'id' ? 'Briefing Misi (Overview)' : 'Mission Briefing'}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.longDescription || project.description}
              </p>
            </section>

            {/* Boss Battles / Challenges Section */}
            {project.challenges && project.challenges.length > 0 && (
              <section id="challenges">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2 text-red-400">
                    <Swords className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      {locale === 'id' ? 'Tantangan Utama (Boss Battles)' : 'Boss Battles (Challenges)'}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      {locale === 'id' ? 'Hambatan arsitektur & rekayasa teknis' : 'Technical & architectural roadblocks solved'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge: ProjectChallenge, index: number) => (
                    <div
                      key={index}
                      className="group rounded-xl border border-border bg-card/70 p-5 transition-all hover:border-accent/40 hover:bg-card"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            challenge.severity === 'high' ? 'bg-red-500 animate-pulse' : 'bg-amber-500'
                          }`}
                        />
                        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements Unlocked Section */}
            {project.achievements && project.achievements.length > 0 && (
              <section id="achievements">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-2 text-yellow-400">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      {locale === 'id' ? 'Pencapaian (Achievements Unlocked)' : 'Achievements Unlocked'}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      {locale === 'id' ? 'Hasil akhir & kapabilitas yang terverifikasi' : 'Verified system outcomes & milestone deliveries'}
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.achievements.map((item, index) => {
                    const text = typeof item === 'string' ? item : item.title
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 transition-all hover:border-accent/40"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-sm leading-relaxed text-foreground/90 font-medium">{text}</span>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Visual Logs Section */}
            {project.visualLogs && project.visualLogs.length > 0 && (
              <section id="visual-logs">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-2 text-primary">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      {locale === 'id' ? 'Log Visual (Visual Logs)' : 'Visual Logs'}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground">
                      {locale === 'id' ? 'Tangkapan layar modul & alur kerja sistem' : 'Modular screenshots & architecture telemetry breakdown'}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.visualLogs.map((log: ProjectVisualLog, index: number) => (
                    <div
                      key={index}
                      onClick={() => setSelectedVisualLog(log)}
                      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
                    >
                      {/* Visual Header Mockup */}
                      <div className="relative aspect-video w-full overflow-hidden bg-muted/40 border-b border-border flex items-center justify-center">
                        {log.image ? (
                          <>
                            <Image
                              src={log.image}
                              alt={log.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-2 p-4 text-muted-foreground group-hover:text-accent transition-colors">
                            <div className="rounded-full bg-background p-3 shadow-inner border border-border group-hover:border-accent/40">
                              <Sparkles className="h-5 w-5 text-accent" />
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                              {log.tag || 'DIAGNOSTIC LOG'}
                            </span>
                          </div>
                        )}
                        <button
                          type="button"
                          className="absolute right-3 top-3 z-10 rounded-lg border border-border bg-background/80 p-1.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 hover:text-accent"
                          aria-label="Expand Log"
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {/* Log Info */}
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                            {log.title}
                          </h3>
                          {log.tag && (
                            <span className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                              {log.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {log.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6 lg:col-span-4">
            {/* Tech Stack Card */}
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

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  {locale === 'id' ? 'Ringkasan Rekayasa' : 'Engineering Highlights'}
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Action / Contact Card */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="font-semibold text-foreground">
                {locale === 'id' ? 'Tertarik dengan proyek ini?' : 'Interested in this project?'}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {locale === 'id'
                  ? 'Diskusikan arsitektur serupa atau integrasikan solusi khusus untuk sistem Anda.'
                  : 'Let’s discuss how similar distributed architectures or ML forecasting can solve your engineering problems.'}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-accent-foreground shadow-sm transition-all hover:bg-accent/90"
              >
                <span>{locale === 'id' ? 'Hubungi Saya' : 'Get in Touch'}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for Visual Log */}
        {selectedVisualLog && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedVisualLog(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase">{selectedVisualLog.tag}</span>
                  <h3 className="text-lg font-bold text-foreground">{selectedVisualLog.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedVisualLog(null)}
                  className="rounded-lg border border-border p-1.5 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/30 flex items-center justify-center">
                {selectedVisualLog.image ? (
                  <Image
                    src={selectedVisualLog.image}
                    alt={selectedVisualLog.title}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 p-6 text-center">
                    <div className="rounded-full bg-card p-4 border border-border">
                      <ImageIcon className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{selectedVisualLog.title}</span>
                    <span className="font-mono text-xs text-muted-foreground max-w-md">
                      {selectedVisualLog.description}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {selectedVisualLog.description}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setSelectedVisualLog(null)}
                  className="rounded-xl border border-border bg-secondary/50 px-4 py-2 text-xs font-mono text-foreground hover:border-accent"
                >
                  Close Log
                </button>
              </div>
            </div>
          </div>
        )}

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
