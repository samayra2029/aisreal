import Link from "next/link";
import { getChapters } from "@/lib/content";

export const metadata = { title: "Chapters — AI is Real" };

export default function ChaptersPage() {
  const chapters = getChapters();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
          Chapters
        </h1>
        <p className="mt-2 text-vsc-text-muted">
          Each chapter groups related conversations around a theme.
        </p>
      </div>

      <div className="space-y-6">
        {chapters.map((ch) => (
          <div
            key={ch.slug}
            className="rounded-lg border border-vsc-border bg-vsc-card p-6"
          >
            <Link href={`/chapters/${ch.slug}`}>
              <h2 className="text-xl font-semibold text-vsc-blue hover:text-vsc-accent-hover">
                {ch.title}
              </h2>
            </Link>
            <p className="mt-1 text-sm text-vsc-text-muted">
              {ch.description}
            </p>
            <div className="mt-4 space-y-2">
              {ch.conversations.map((conv) => (
                <Link
                  key={conv.slug}
                  href={`/chapters/${ch.slug}/${conv.slug}`}
                  className="block rounded border border-vsc-border px-4 py-2 text-sm transition-colors hover:bg-vsc-card-hover"
                >
                  <span className="font-medium text-vsc-text">
                    {conv.title}
                  </span>
                  <span className="ml-2 text-vsc-text-muted">{conv.date}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
