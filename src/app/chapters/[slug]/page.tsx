import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, getChapters } from "@/lib/content";

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
          {chapter.title}
        </h1>
        <p className="mt-2 text-vsc-text-muted">{chapter.description}</p>
      </div>

      <div className="space-y-3">
        {chapter.conversations.map((conv) => (
          <Link
            key={conv.slug}
            href={`/chapters/${slug}/${conv.slug}`}
            className="block rounded-lg border border-vsc-border bg-vsc-card p-5 transition-all hover:border-vsc-accent hover:bg-vsc-card-hover"
          >
            <h3 className="font-semibold text-vsc-text">{conv.title}</h3>
            <p className="mt-1 text-sm italic text-vsc-orange">
              &ldquo;{conv.moral}&rdquo;
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {conv.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-vsc-sidebar px-2.5 py-0.5 text-xs text-vsc-text-muted"
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
