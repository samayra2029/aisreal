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
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          {ch.title}
        </Link>
      ))}
    </nav>
  );
}
