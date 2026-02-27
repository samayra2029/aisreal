"use client";

import { useEffect, useRef } from "react";

export function MarkdownContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Find all blockquotes and style Me: and AI: labels
      const blockquotes = contentRef.current.querySelectorAll("blockquote");
      let lastAiBlockquote: Element | null = null;
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
            lastAiBlockquote = blockquote;
          }
        }
      });

      if (lastAiBlockquote) {
        const already = (lastAiBlockquote as Element).nextElementSibling;
        if (!already || !already.classList.contains("conversation-continues")) {
          const divider = document.createElement("p");
          divider.textContent = "AI continues...";
          divider.className = "conversation-continues";
          (lastAiBlockquote as Element).insertAdjacentElement("afterend", divider);
        }
      }
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
