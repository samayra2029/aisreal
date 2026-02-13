export const metadata = { title: "About — AI is Real" };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
        About
      </h1>

      <div className="prose max-w-none prose-headings:text-vsc-text prose-headings:font-semibold prose-p:text-vsc-text prose-a:text-vsc-accent prose-strong:text-vsc-text prose-blockquote:border-vsc-border prose-blockquote:text-vsc-text-muted prose-li:text-vsc-text">
        <p>
          <strong>AI is Real</strong> is a collection of curated highlights from
          real conversations with AI. Not tutorials. Not hype. Just the moments
          that mattered — the insights, the surprises, and the lessons learned.
        </p>

        <h2>Why this exists</h2>
        <p>
          Hundreds of hours of AI conversations produce moments of genuine
          insight — but they get lost in chat logs. This site captures those
          moments, organizes them into chapters, and distills the wisdom into
          morals you can actually use.
        </p>

        <h2>How it works</h2>
        <ul>
          <li>
            <strong>Conversations</strong> are real exchanges with AI, edited
            for clarity and brevity
          </li>
          <li>
            <strong>Highlights</strong> call out the key insights from each
            conversation
          </li>
          <li>
            <strong>Morals</strong> distill each conversation into a single
            takeaway
          </li>
          <li>
            <strong>Chapters</strong> group related conversations by theme
          </li>
          <li>
            <strong>The Story</strong> ties everything together into a
            coherent narrative
          </li>
        </ul>

        <h2>The name</h2>
        <p>
          &ldquo;AI is Real&rdquo; — not in the science fiction sense. In the
          practical, everyday sense. The insights are real. The mistakes are
          real. The impact is real. It&rsquo;s time we treated it that way.
        </p>
      </div>
    </div>
  );
}
