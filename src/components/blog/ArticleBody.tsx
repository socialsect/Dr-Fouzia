import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = value?.asset?.url;
      if (!url) return null;
      // eslint-disable-next-line @next/next/no-img-element
      return <img className="my-8 w-full rounded-[var(--radius)]" src={url} alt={value.alt || ""} loading="lazy" />;
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 font-serif text-[length:var(--step-3)] leading-tight text-ink">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-[length:var(--step-1)] font-semibold text-ink">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-5 text-[17px] leading-[1.75] text-ink-soft">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-blue pl-5 font-serif text-[length:var(--step-1)] leading-snug text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-5 list-disc space-y-2 pl-6 text-ink-soft">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[17px] leading-[1.7]">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="text-blue underline underline-offset-4 hover:text-blue-deep">
        {children}
      </a>
    ),
  },
};

export function ArticleBody({ blocks }: { blocks: PortableTextBlock[] }) {
  return <PortableText value={blocks} components={components} />;
}
