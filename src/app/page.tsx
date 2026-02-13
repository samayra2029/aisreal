import Link from "next/link";
import { getChapters, getAllMorals } from "@/lib/content";

export default function Home() {
  const chapters = getChapters();
  const morals = getAllMorals();

  return (
    <div className="space-y-12">
      <section className="space-y-4 pt-8">
        <h1 className="text-4xl font-bold tracking-tight text-vsc-blue">
          AI is Real
        </h1>
        <p className="text-lg leading-relaxed text-vsc-text-muted">
          A curated collection of highlights from conversations with AI —
          organized into chapters, with morals and insights distilled from each
          exchange.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/chapters"
            className="rounded-full bg-vsc-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-vsc-accent-hover"
          >
            Start Reading
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-vsc-border px-5 py-2 text-sm font-medium text-vsc-text transition-colors hover:bg-vsc-card"
          >
            What is this?
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-vsc-text">Chapters</h2>
        <div className="grid gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="group rounded-lg border border-vsc-border bg-vsc-card p-5 transition-all hover:border-vsc-accent hover:bg-vsc-card-hover"
            >
              <h3 className="font-semibold text-vsc-blue group-hover:text-vsc-accent-hover">
                {ch.title}
              </h3>
              <p className="mt-1 text-sm text-vsc-text-muted">
                {ch.description}
              </p>
              <p className="mt-2 text-xs text-vsc-text-muted">
                {ch.conversations.length} conversation
                {ch.conversations.length !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {morals.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-vsc-text">
            Recent Morals
          </h2>
          <div className="space-y-3">
            {morals.slice(0, 3).map((m, i) => (
              <Link
                key={i}
                href={`/chapters/${m.chapterSlug}/${m.conversationSlug}`}
                className="block rounded-lg border border-vsc-border bg-vsc-card p-4 transition-all hover:border-vsc-accent hover:bg-vsc-card-hover"
              >
                <p className="italic text-vsc-orange">
                  &ldquo;{m.moral}&rdquo;
                </p>
                <p className="mt-2 text-xs text-vsc-text-muted">{m.title}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/morals"
            className="inline-block text-sm font-medium text-vsc-accent hover:text-vsc-accent-hover"
          >
            View all morals &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}
