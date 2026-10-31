import type { Metadata } from "next";
import { getArticles, type Article } from "@/lib/articles";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on functional medicine, hormonal health, gut health, Calm Mind Sessions and healthy ageing from Dr Fouzia Al Ali, family physician in Dubai.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default async function BlogPage() {
  let articles: Article[] = [];
  try {
    articles = await getArticles();
  } catch (err) {
    console.error("Failed to load articles from Sanity:", err);
  }

  return (
    <main className="mx-auto w-[min(1100px,92%)] pt-36 pb-20 md:pt-40">
      <h1 className="mb-3 font-serif text-[length:var(--step-5)] leading-[1.05] text-ink">Blog</h1>
      <p className="mb-12 max-w-[60ch] text-[17px] leading-[1.7] text-ink-soft">
        Practical, root-cause thinking on health, from Dr Fouzia Al Ali.
      </p>
      {articles.length === 0 ? (
        <p className="text-ink-soft">No articles yet. Check back soon.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a._id} article={a} />
          ))}
        </div>
      )}
    </main>
  );
}
