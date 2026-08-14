import { ArrowUpRight } from 'lucide-react'
import type { Post } from '@/lib/i18n'

export function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={`#${post.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent/60 hover:bg-secondary/40"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-accent">
            {post.category}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-pretty text-lg font-semibold leading-snug tracking-tight text-foreground">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
      </div>
      <time className="mt-6 font-mono text-xs text-muted-foreground">
        {post.date}
      </time>
    </a>
  )
}
