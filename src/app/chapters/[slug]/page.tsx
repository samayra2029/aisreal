import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, getChapters } from "@/lib/content";
import { ChapterNav } from "@/components/ChapterNav";

export async function generateStaticParams() {
  return getChapters().map((ch) => ({ slug: ch.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  return { title: chapter ? `${chapter.title} — AI is Real` : "Not Found" };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const chapters = getChapters();

  return (
    <div className="space-y-8">
      <ChapterNav chapters={chapters} currentSlug={slug} />

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {chapter.title}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {chapter.description}
        </p>
      </div>

      <div className="space-y-3">
        {chapter.conversations.map((conv) => (
          <Link
            key={conv.slug}
            href={`/chapters/${slug}/${conv.slug}`}
            className="block rounded-lg border border-zinc-200 p-5 transition-all hover:border-zinc-400 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {conv.title}
            </h3>
            <p className="mt-1 text-sm italic text-zinc-500 dark:text-zinc-400">
              &ldquo;{conv.moral}&rdquo;
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {conv.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
