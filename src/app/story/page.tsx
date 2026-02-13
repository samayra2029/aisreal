import { getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata = { title: "Story — AI is Real" };

export default async function StoryPage() {
  const page = getPageContent("story.md");
  const htmlContent = await markdownToHtml(page.content);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
        {page.data.title}
      </h1>
      <p className="text-vsc-text-muted">{page.data.description}</p>
      <MarkdownContent html={htmlContent} />
    </div>
  );
}
