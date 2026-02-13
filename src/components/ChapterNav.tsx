import Link from "next/link";
import { ChapterMeta } from "@/lib/content";

export function ChapterNav({
  chapters,
  currentSlug,
}: {
  chapters: ChapterMeta[];
  currentSlug?: string;
}) {
  return (
    <nav className="flex flex-wrap gap-2">
      {chapters.map((ch) => (
        <Link
          key={ch.slug}
          href={`/chapters/${ch.slug}`}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            currentSlug === ch.slug
              ? "bg-vsc-accent text-white"
              : "bg-vsc-card text-vsc-text-muted hover:bg-vsc-card-hover hover:text-vsc-text"
          }`}
        >
          {ch.title}
        </Link>
      ))}
    </nav>
  );
}
