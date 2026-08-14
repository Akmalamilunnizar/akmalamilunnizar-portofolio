'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useLanguage } from '@/lib/i18n'

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

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

        <header className="mt-8 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-mono text-accent mb-4">
            <MessageSquare className="h-3.5 w-3.5" />
            Get in Touch
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            {t.contact.subtitle}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">{t.contact.directContact}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-border bg-background p-3 text-accent shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-muted-foreground uppercase">Email</h3>
                    <a
                      href="mailto:akmalamilunnizar@gmail.com"
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      akmalamilunnizar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-border bg-background p-3 text-accent shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-muted-foreground uppercase">{t.contact.locationLabel}</h3>
                    <p className="text-sm font-medium text-foreground">Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-border bg-background p-3 text-accent shadow-sm">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-muted-foreground uppercase">Availability</h3>
                    <p className="text-sm font-medium text-foreground">Open for interesting problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-accent mb-3 animate-bounce" />
                  <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-foreground">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.placeholderName}
                        className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-foreground">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.placeholderEmail}
                        className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-foreground">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.placeholderSubject}
                      className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-foreground">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.placeholderMessage}
                      className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    {t.contact.sendButton}
                    <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}



