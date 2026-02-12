import Link from "next/link";
import { getChapters, getAllMorals } from "@/lib/content";

export default function Home() {
  const chapters = getChapters();
  const morals = getAllMorals();

  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          AI is Real
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A curated collection of highlights from conversations with AI —
          organized into chapters, with morals and insights distilled from each
          exchange.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/chapters"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Start Reading
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            What is this?
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Chapters
        </h2>
        <div className="grid gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="group rounded-lg border border-zinc-200 p-5 transition-all hover:border-zinc-400 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <h3 className="font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                {ch.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {ch.description}
              </p>
              <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                {ch.conversations.length} conversation
                {ch.conversations.length !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {morals.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Recent Morals
          </h2>
          <div className="space-y-3">
            {morals.slice(0, 3).map((m, i) => (
              <Link
                key={i}
                href={`/chapters/${m.chapterSlug}/${m.conversationSlug}`}
                className="block rounded-lg border border-zinc-200 p-4 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <p className="italic text-zinc-700 dark:text-zinc-300">
                  &ldquo;{m.moral}&rdquo;
                </p>
                <p className="mt-2 text-xs text-zinc-500">{m.title}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/morals"
            className="inline-block text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            View all morals &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}
