'use client'

import { useEffect, useState } from 'react'
import { Coffee, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')
  const { locale, toggleLocale, t } = useLanguage()

  // Only the sections that actually exist on the page, in order.
  const navLinks = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.contact.title, id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav item for whichever section is in view.
  useEffect(() => {
    const ids = ['about', 'experience', 'projects', 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Trigger when a section reaches the upper third of the viewport.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Smoothly scroll to a section and move keyboard focus onto it.
  const goToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Focus without an extra jump so screen readers land on the section.
    el.focus({ preventScroll: true })
    setActiveId(id)
    // Keep the URL in sync without triggering a native jump.
    window.history.replaceState(null, '', `#${id}`)
  }

  const handleNavClick =
    (id: string, closeMenu = false) =>
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      if (closeMenu) setMenuOpen(false)
      goToSection(id)
    }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="group flex items-center gap-2">
          <Coffee className="h-5 w-5 text-accent" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Akmal Amilunnizar
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            — Code &amp; Coffee
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={cn(
                  'text-sm transition-colors hover:text-foreground',
                  activeId === link.id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#subscribe"
              className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.nav.subscribe}
            </a>
          </nav>

          <LanguageToggle locale={locale} onToggle={toggleLocale} label={t.langToggleLabel} />

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id, true)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={cn(
                    'block rounded-md px-2 py-2 text-sm transition-colors hover:bg-secondary hover:text-foreground',
                    activeId === link.id ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#subscribe"
                className="block rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.subscribe}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

function LanguageToggle({
  locale,
  onToggle,
  label,
}: {
  locale: 'en' | 'id'
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs"
    >
      <span
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          locale === 'en'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        EN
      </span>
      <span
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          locale === 'id'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        ID
      </span>
    </button>
  )
}
