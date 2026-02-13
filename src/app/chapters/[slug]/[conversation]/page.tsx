import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapter, getChapters, getConversation } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { HighlightList } from "@/components/Highlight";
import { MarkdownContent } from "@/components/MarkdownContent";

export async function generateStaticParams() {
  const chapters = getChapters();
  return chapters.flatMap((ch) =>
    ch.conversations.map((conv) => ({
      slug: ch.slug,
      conversation: conv.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; conversation: string }>;
}) {
  const { slug, conversation: convSlug } = await params;
  const conv = getConversation(slug, convSlug);
  return { title: conv ? `${conv.title} — AI is Real` : "Not Found" };
}

export default async function ConversationPage({
  params,
}: {
  params: Promise<{ slug: string; conversation: string }>;
}) {
  const { slug, conversation: convSlug } = await params;
  const conversation = getConversation(slug, convSlug);
  if (!conversation) notFound();

  const chapter = getChapter(slug);
  const htmlContent = await markdownToHtml(conversation.content);

  return (
    <article className="space-y-8">
      <div>
        <Link
          href={`/chapters/${slug}`}
          className="text-sm text-vsc-text-muted hover:text-vsc-accent"
        >
          &larr; {chapter?.title}
        </Link>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-vsc-text">
          {conversation.title}
        </h1>
        <p className="mt-1 text-sm text-vsc-text-muted">
          {conversation.date}
        </p>
      </div>

      <HighlightList highlights={conversation.highlights} />

      <MarkdownContent html={htmlContent} />

      <div className="rounded-lg border border-vsc-border bg-vsc-sidebar p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-vsc-text-muted">
          Moral of the Story
        </h3>
        <p className="mt-2 text-lg font-medium italic text-vsc-orange">
          &ldquo;{conversation.moral}&rdquo;
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {conversation.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-vsc-sidebar px-3 py-1 text-xs text-vsc-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
