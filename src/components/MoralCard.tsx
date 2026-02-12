import Link from "next/link";

interface MoralCardProps {
  moral: string;
  title: string;
  chapterSlug: string;
  conversationSlug: string;
}

export function MoralCard({
  moral,
  title,
  chapterSlug,
  conversationSlug,
}: MoralCardProps) {
  return (
    <Link
      href={`/chapters/${chapterSlug}/${conversationSlug}`}
      className="block rounded-lg border border-zinc-200 p-5 transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <blockquote className="text-lg font-medium italic text-zinc-800 dark:text-zinc-200">
        &ldquo;{moral}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
        from &ldquo;{title}&rdquo;
      </p>
    </Link>
  );
}
