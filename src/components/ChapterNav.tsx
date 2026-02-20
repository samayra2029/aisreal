"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChapterMeta } from "@/lib/content";

export function ChapterNav({ chapters }: { chapters: ChapterMeta[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2">
      {chapters.map((ch) => {
        const isActive = pathname.startsWith(`/chapters/${ch.slug}`);
        return (
          <Link
            key={ch.slug}
            href={`/chapters/${ch.slug}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-vsc-accent text-white"
                : "bg-vsc-card text-vsc-text-muted hover:bg-vsc-card-hover hover:text-vsc-text"
            }`}
          >
            {ch.title}
          </Link>
        );
      })}
    </nav>
  );
}
