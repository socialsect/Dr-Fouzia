"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

/**
 * Renders the main-site chrome (Navigation + Footer) for every route
 * EXCEPT the Meta campaign landing page, which has its own chrome.
 * On normal routes the rendered output is identical to having
 * Navigation/Footer directly in the root layout.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLanding = pathname === "/consultation";

  if (isLanding) return <>{children}</>;

  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
