'use client'

import { useLanguage } from '@/lib/i18n'
import { PostCard } from '@/components/post-card'

export function FeaturedPosts() {
  const { t } = useLanguage()

  return (
    <section id="latest" className="border-b border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {t.featured.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.featured.subtitle}</p>
          </div>
          <a
            href="#archive"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            {t.featured.viewAll}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
