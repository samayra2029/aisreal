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
      className="block rounded-lg border border-vsc-border bg-vsc-card p-5 transition-all hover:border-vsc-accent hover:bg-vsc-card-hover"
    >
      <blockquote className="text-base font-medium italic text-vsc-orange">
        &ldquo;{moral}&rdquo;
      </blockquote>
      <p className="mt-3 text-sm text-vsc-text-muted">
        from &ldquo;{title}&rdquo;
      </p>
    </Link>
  );
}
