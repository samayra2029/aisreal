"use client";

import { useEffect, useRef } from "react";

export function MarkdownContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const blockquotes = contentRef.current.querySelectorAll("blockquote");
      blockquotes.forEach((blockquote) => {
        const firstStrong = blockquote.querySelector("p strong:first-child");
        if (firstStrong) {
          const text = firstStrong.textContent?.trim();
          if (text === "Me:") {
            firstStrong.classList.add("conversation-me");
            blockquote.classList.add("blockquote-me");
          } else if (text === "AI:") {
            firstStrong.classList.add("conversation-ai");
            blockquote.classList.add("blockquote-ai");

            // Insert "AI continues..." only if the next sibling is a plain paragraph
            // (i.e. AI has continuation text, not just another blockquote or nothing)
            const next = blockquote.nextElementSibling;
            if (next && next.tagName === "P" && !next.classList.contains("conversation-continues")) {
              const label = document.createElement("p");
              label.textContent = "AI continues...";
              label.className = "conversation-continues";
              blockquote.insertAdjacentElement("afterend", label);
            }
          }
        }
      });
    }
  }, [html]);

  return (
    <div
      ref={contentRef}
      className="prose max-w-none prose-headings:text-vsc-text prose-headings:font-semibold prose-p:text-vsc-text prose-a:text-vsc-accent prose-strong:text-vsc-text prose-blockquote:border-vsc-border prose-blockquote:text-vsc-text prose-code:text-vsc-orange prose-li:text-vsc-text prose-th:text-vsc-text prose-td:text-vsc-text prose-th:border-vsc-border prose-td:border-vsc-border prose-hr:border-vsc-border prose-pre:bg-vsc-card prose-pre:text-vsc-text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
