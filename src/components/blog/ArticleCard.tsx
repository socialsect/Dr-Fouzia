import Link from "next/link";
import { formatDate, type Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  const img = article.featuredImage?.asset?.url;
  const date = article.updatedAt || article.publishedAt;
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-line bg-white">
      {img && (
        <Link href={`/blog/${article.slug}`} className="block aspect-[16/9] overflow-hidden bg-sky-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img}
            alt={article.featuredImageAlt || article.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-[length:var(--step--1)] tracking-wide text-ink-muted uppercase">
          {article.readingTime || "Article"}
          {date ? ` · ${formatDate(date)}` : ""}
        </p>
        <h2 className="mb-3 font-serif text-[length:var(--step-2)] leading-tight text-ink">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="mb-5 flex-1 text-[15.5px] leading-[1.65] text-ink-soft">
          {article.excerpt || article.metaDescription}
        </p>
        <Link href={`/blog/${article.slug}`} className="text-blue underline underline-offset-4 hover:text-blue-deep">
          Read article →
        </Link>
      </div>
    </article>
  );
}
