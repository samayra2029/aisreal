import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata = { title: "Summary — AI is Real" };

export default async function SummaryPage() {
  const page = getPageContent("summary.md");
  const htmlContent = await markdownToHtml(page.content);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {page.data.title}
      </h1>
      <MarkdownContent html={htmlContent} />
    </div>
  );
}
