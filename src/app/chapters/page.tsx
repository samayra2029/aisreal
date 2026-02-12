import Link from "next/link";
import { getChapters } from "@/lib/content";

export const metadata = { title: "Chapters — AI is Real" };

export default function ChaptersPage() {
  const chapters = getChapters();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Chapters
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Each chapter groups related conversations around a theme.
        </p>
      </div>

      <div className="space-y-6">
        {chapters.map((ch) => (
          <div
            key={ch.slug}
            className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <Link href={`/chapters/${ch.slug}`}>
              <h2 className="text-xl font-semibold text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300">
                {ch.title}
              </h2>
            </Link>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {ch.description}
            </p>
            <div className="mt-4 space-y-2">
              {ch.conversations.map((conv) => (
                <Link
                  key={conv.slug}
                  href={`/chapters/${ch.slug}/${conv.slug}`}
                  className="block rounded border border-zinc-100 px-4 py-2 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                >
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">
                    {conv.title}
                  </span>
                  <span className="ml-2 text-zinc-400 dark:text-zinc-500">
                    {conv.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
