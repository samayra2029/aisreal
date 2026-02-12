export function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-blockquote:border-zinc-300 prose-blockquote:font-normal dark:prose-blockquote:border-zinc-700"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
