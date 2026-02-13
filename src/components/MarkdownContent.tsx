export function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose max-w-none prose-headings:text-vsc-text prose-headings:font-semibold prose-p:text-vsc-text prose-a:text-vsc-accent prose-strong:text-vsc-text prose-blockquote:border-vsc-border prose-blockquote:text-vsc-text-muted prose-code:text-vsc-orange prose-li:text-vsc-text prose-th:text-vsc-text prose-td:text-vsc-text prose-th:border-vsc-border prose-td:border-vsc-border prose-hr:border-vsc-border prose-pre:bg-vsc-card prose-pre:text-vsc-text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
