import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bioToText, formatDate, getArticleBySlug, type Article } from "@/lib/articles";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

const DEFAULT_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

// Deduplicate the Sanity fetch: called once in generateMetadata and once in Page.
const getArticle = cache(async (slug: string): Promise<Article | null> => {
  try {
    return await getArticleBySlug(slug);
  } catch (err) {
    console.error(`Failed to load article ${slug} from Sanity:`, err);
    return null;
  }
});

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found", robots: "noindex, nofollow" };

  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.excerpt || undefined;
  const image = article.featuredImage?.asset?.url;
  const canonical = article.canonicalUrl || `${SITE_URL}/blog/${slug}`;

  return {
    title,
    description,
    robots: article.robots || DEFAULT_ROBOTS,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
      publishedTime: article.publishedAt || undefined,
      modifiedTime: article.updatedAt || article.publishedAt || undefined,
    },
    twitter: { card: "summary_large_image", title, description, ...(image && { images: [image] }) },
  };
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const canonical = article.canonicalUrl || `${SITE_URL}/blog/${slug}`;
  const image = article.featuredImage?.asset?.url;
  const date = article.updatedAt || article.publishedAt;

  const schema = {
    "@context": "https://schema.org",
    "@type": article.schemaType || "Article",
    headline: article.title,
    description: article.metaDescription || article.excerpt || "",
    ...(image && { image }),
    url: canonical,
    datePublished: article.publishedAt || article.updatedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: { "@type": "Person", name: article.author?.name || "Dr. Fouzia Al Ali" },
    publisher: { "@type": "Person", name: "Dr. Fouzia Al Ali", url: SITE_URL },
    ...(article.faqs?.length && {
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: article.faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    }),
  };

  const blocks = article.body || [];
  // Insert the CTA at the section heading closest to the midpoint, so it never splits a heading from its text.
  const half = Math.floor(blocks.length / 2);
  const headings = blocks.flatMap((b, i) => (b.style === "h2" ? [i] : []));
  const mid = headings.length ? headings.reduce((a, b) => (Math.abs(b - half) < Math.abs(a - half) ? b : a)) : half;
  const bioText = bioToText(article.author?.bio);

  return (
    <main className="mx-auto w-[min(720px,92%)] py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-10">
        <p className="mb-3 text-[length:var(--step--1)] tracking-wide text-ink-muted uppercase">
          {article.readingTime || "Article"}
          {date ? ` · ${article.updatedAt ? "Updated " : ""}${formatDate(date)}` : ""}
        </p>
        <h1 className="mb-4 font-serif text-[length:var(--step-5)] leading-[1.05] text-ink">{article.title}</h1>
        {article.excerpt && <p className="text-[length:var(--step-1)] leading-snug text-ink-soft">{article.excerpt}</p>}
      </header>

      {image && (
        <figure className="mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={article.featuredImageAlt || article.title}
            className="aspect-[16/9] w-full rounded-[var(--radius)] object-cover object-center"
          />
        </figure>
      )}

      <div>
        <ArticleBody blocks={blocks.slice(0, mid)} />
        <aside className="my-10 rounded-[var(--radius)] bg-sky-light p-6">
          <p className="mb-3 font-serif text-[length:var(--step-1)] text-ink">Want personalised guidance?</p>
          <Link href="/contact" className="text-blue underline underline-offset-4 hover:text-blue-deep">
            Book a consultation →
          </Link>
        </aside>
        <ArticleBody blocks={blocks.slice(mid)} />
      </div>

      {article.author && (
        <section className="mt-14 flex gap-5 rounded-[var(--radius)] border border-line p-6">
          {article.author.image?.asset?.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.author.image.asset.url}
              alt={article.author.name}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-ink">
              {article.author.slug ? (
                <Link href={`/blog/author/${article.author.slug}`}>{article.author.name}</Link>
              ) : (
                article.author.name
              )}
            </p>
            {bioText && (
              <p className="mt-1 text-[15px] leading-[1.6] text-ink-soft">
                {bioText.slice(0, 120)}
                {bioText.length > 120 && "…"}
              </p>
            )}
            {!!article.author.socialLinks?.length && (
              <div className="mt-3 flex flex-wrap gap-4 text-[14px]">
                {article.author.socialLinks.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue capitalize">
                    {l.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {!!article.faqs?.length && (
        <section className="mt-14" aria-labelledby="article-faqs-heading">
          <h2 id="article-faqs-heading" className="mb-6 font-serif text-[length:var(--step-3)] text-ink">
            FAQs
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {article.faqs.map((faq, i) => (
              <details key={i} className="group py-4">
                <summary className="cursor-pointer font-semibold text-ink">{faq.question}</summary>
                <p className="mt-3 text-[16px] leading-[1.7] text-ink-soft">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <Link href="/blog" className="mt-14 inline-block text-blue underline underline-offset-4">
        ← All articles
      </Link>
    </main>
  );
}
