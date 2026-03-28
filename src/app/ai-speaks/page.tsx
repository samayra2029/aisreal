import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata = { title: "AI Speaks" };

export default async function AiSpeaksPage() {
  const page = getPageContent("ai-speaks.md");
  const htmlContent = await markdownToHtml(page.content);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
        {page.data.title}
      </h1>
      <p className="text-vsc-text-muted">{page.data.description}</p>
      <div className="ai-speaks-content">
        <MarkdownContent html={htmlContent} />
      </div>
    </div>
  );
}
