import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const chaptersDir = path.join(contentDir, "chapters");

export interface ConversationMeta {
  slug: string;
  title: string;
  date: string;
  highlights: string[];
  moral: string;
  tags: string[];
}

export interface Conversation extends ConversationMeta {
  content: string;
}

export interface ChapterMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
}

export interface Chapter extends ChapterMeta {
  conversations: ConversationMeta[];
}

export function getChapters(): Chapter[] {
  const chapterDirs = fs.readdirSync(chaptersDir).filter((f) => {
    return fs.statSync(path.join(chaptersDir, f)).isDirectory();
  });

  return chapterDirs
    .map((dir) => {
      const metaPath = path.join(chaptersDir, dir, "meta.json");
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      const conversations = getConversationsForChapter(dir);

      return {
        slug: dir,
        title: meta.title,
        description: meta.description,
        order: meta.order,
        conversations,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getChapter(slug: string): Chapter | undefined {
  const chapters = getChapters();
  return chapters.find((c) => c.slug === slug);
}

function getConversationsForChapter(chapterDir: string): ConversationMeta[] {
  const convDir = path.join(chaptersDir, chapterDir, "conversations");
  if (!fs.existsSync(convDir)) return [];

  const files = fs.readdirSync(convDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(convDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title || file,
        date: data.date || "",
        highlights: data.highlights || [],
        moral: data.moral || "",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getConversation(
  chapterSlug: string,
  conversationSlug: string
): Conversation | undefined {
  const filePath = path.join(
    chaptersDir,
    chapterSlug,
    "conversations",
    `${conversationSlug}.md`
  );
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: conversationSlug,
    title: data.title || conversationSlug,
    date: data.date || "",
    highlights: data.highlights || [],
    moral: data.moral || "",
    tags: data.tags || [],
    content,
  };
}

export function getAllConversations(): (ConversationMeta & {
  chapterSlug: string;
  chapterTitle: string;
})[] {
  const chapters = getChapters();
  return chapters.flatMap((ch) =>
    ch.conversations.map((conv) => ({
      ...conv,
      chapterSlug: ch.slug,
      chapterTitle: ch.title,
    }))
  );
}

export function getAllMorals(): {
  moral: string;
  title: string;
  chapterSlug: string;
  conversationSlug: string;
}[] {
  const all = getAllConversations();
  return all
    .filter((c) => c.moral)
    .map((c) => ({
      moral: c.moral,
      title: c.title,
      chapterSlug: c.chapterSlug,
      conversationSlug: c.slug,
    }));
}

export function getPageContent(filename: string): {
  data: Record<string, string>;
  content: string;
} {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}
