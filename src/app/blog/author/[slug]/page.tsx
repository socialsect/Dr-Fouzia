import { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  bioToText,
  getArticlesByAuthor,
  getAuthorBySlug,
  type Article,
  type Author,
} from "@/lib/articles";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

const getAuthor = cache(async (slug: string): Promise<Author | null> => {
  try {
    return await getAuthorBySlug(slug);
  } catch (err) {
    console.error(`Failed to load author ${slug} from Sanity:`, err);
    return null;
  }
});

export async function generateMetadata({ params }: PageProps<"/blog/author/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthor(slug);
  if (!author) return { title: "Author not found", robots: "noindex, nofollow" };

  const description = bioToText(author.bio).slice(0, 160) || `Articles written by ${author.name}.`;
  const url = `${SITE_URL}/blog/author/${slug}`;
  return {
    title: `${author.name} | Blog`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      title: `${author.name} | Blog`,
      description,
      url,
      ...(author.image?.asset?.url && {
        images: [{ url: author.image.asset.url, width: 400, height: 400, alt: author.name }],
      }),
    },
  };
}

export default async function AuthorPage({ params }: PageProps<"/blog/author/[slug]">) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  if (!author) notFound();

  let articles: Article[] = [];
  try {
    articles = await getArticlesByAuthor(slug);
  } catch (err) {
    console.error(`Failed to load articles for author ${slug}:`, err);
  }
  const bioText = bioToText(author.bio);

  return (
    <main className="mx-auto w-[min(1100px,92%)] py-20">
      <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
        {author.image?.asset?.url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={author.image.asset.url} alt={author.name} className="h-28 w-28 rounded-full object-cover" />
        )}
        <div className="max-w-[60ch]">
          <h1 className="mb-3 font-serif text-[length:var(--step-4)] leading-none text-ink">{author.name}</h1>
          {bioText && <p className="text-[17px] leading-[1.7] text-ink-soft">{bioText}</p>}
          {!!author.socialLinks?.length && (
            <div className="mt-4 flex flex-wrap gap-4 text-[14px]">
              {author.socialLinks.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="text-blue capitalize">
                  {l.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {articles.length === 0 ? (
        <p className="text-ink-soft">No articles yet.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a._id} article={a} />
          ))}
        </div>
      )}

      <Link href="/blog" className="mt-14 inline-block text-blue underline underline-offset-4">
        ← All articles
      </Link>
    </main>
  );
}
