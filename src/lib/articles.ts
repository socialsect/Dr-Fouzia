import type { PortableTextBlock } from "@portabletext/react";
import { sanity } from "./sanity";

export type SocialLink = { platform: string; url: string };

export type Author = {
  _id: string;
  name: string;
  slug: string | null;
  image: { asset: { url: string } } | null;
  bio: PortableTextBlock[] | null;
  socialLinks: SocialLink[] | null;
};

export type Article = {
  _id: string;
  title: string;
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  robots: string | null;
  excerpt: string | null;
  readingTime: string | null;
  schemaType: string | null;
  featuredImageAlt: string | null;
  publishedAt: string | null;
  updatedAt: string | null;
  slug: string;
  featuredImage: {
    alt?: string;
    asset: {
      _id: string;
      url: string;
      metadata: { dimensions: { width: number; height: number }; lqip: string };
    };
  } | null;
  author: Author | null;
  body: PortableTextBlock[] | null;
  faqs: { question: string; answer: string }[] | null;
};

const ARTICLE_FIELDS = `
  _id,
  title,
  metaTitle,
  metaDescription,
  canonicalUrl,
  robots,
  excerpt,
  readingTime,
  schemaType,
  featuredImageAlt,
  publishedAt,
  updatedAt,
  "slug": slug.current,
  "featuredImage": featuredImage{
    alt,
    asset->{
      _id,
      url,
      metadata{
        dimensions,
        lqip
      }
    }
  },
  "author": author->{
    _id,
    name,
    "image": image{ asset->{ url } },
    bio,
    "slug": slug.current,
    "socialLinks": socialLinks[]{
      platform,
      url
    }
  },
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url,
        metadata{
          dimensions,
          lqip
        }
      }
    }
  },
  faqs[]{
    question,
    answer
  }
`;

export function getArticles(): Promise<Article[]> {
  return sanity.fetch(
    `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc){${ARTICLE_FIELDS}}`,
  );
}

export function getArticleBySlug(slug: string): Promise<Article | null> {
  return sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{${ARTICLE_FIELDS}}`,
    { slug },
  );
}

export function getAuthorBySlug(slug: string): Promise<Author | null> {
  return sanity.fetch(
    `*[_type == "author" && slug.current == $slug][0]{
      _id,
      name,
      "image": image{ asset->{ url } },
      bio,
      "slug": slug.current,
      "socialLinks": socialLinks[]{
        platform,
        url
      }
    }`,
    { slug },
  );
}

export function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  return sanity.fetch(
    `*[_type == "post" && author->slug.current == $authorSlug] | order(coalesce(publishedAt, _createdAt) desc){${ARTICLE_FIELDS}}`,
    { authorSlug },
  );
}

export function getBlogSitemapEntries(): Promise<
  { slug: string; publishedAt: string | null; updatedAt: string | null; _updatedAt: string; robots: string | null }[]
> {
  return sanity.fetch(`*[_type == "post"] {
    "slug": slug.current,
    publishedAt,
    updatedAt,
    _updatedAt,
    robots
  }`);
}

export function getAuthorSlugs(): Promise<{ slug: string | null }[]> {
  return sanity.fetch(`*[_type == "author"] { "slug": slug.current }`);
}

export function bioToText(bio: PortableTextBlock[] | null | undefined): string {
  if (!bio) return "";
  return bio
    .map((b) =>
      b._type === "block" && Array.isArray(b.children)
        ? b.children.map((c) => (c as { text?: string }).text || "").join("")
        : "",
    )
    .join("\n")
    // The CMS author bio may still contain the retired service acronym.
    .replace(/\bCBT\b/gi, "Calm Mind Sessions");
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(iso));
}
