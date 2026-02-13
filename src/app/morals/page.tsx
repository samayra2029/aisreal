import { getAllMorals, getPageContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { MoralCard } from "@/components/MoralCard";
import { MarkdownContent } from "@/components/MarkdownContent";

export const metadata = { title: "Morals — AI is Real" };

export default async function MoralsPage() {
  const morals = getAllMorals();
  const page = getPageContent("morals.md");
  const introHtml = await markdownToHtml(page.content);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
          {page.data.title}
        </h1>
        <div className="mt-4">
          <MarkdownContent html={introHtml} />
        </div>
      </div>

      <div className="grid gap-4">
        {morals.map((m, i) => (
          <MoralCard
            key={i}
            moral={m.moral}
            title={m.title}
            chapterSlug={m.chapterSlug}
            conversationSlug={m.conversationSlug}
          />
        ))}
      </div>
    </div>
  );
}
