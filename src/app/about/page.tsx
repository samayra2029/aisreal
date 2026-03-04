export const metadata = {
  title: "About",
  description:
    "Who is behind AI is Real? Name and identity not shared by design — on either side. This is about the work in between.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-vsc-text">
        About
      </h1>

      <div className="prose max-w-none prose-headings:text-vsc-text prose-headings:font-semibold prose-p:text-vsc-text prose-a:text-vsc-accent prose-strong:text-vsc-text prose-blockquote:border-vsc-border prose-blockquote:text-vsc-text-muted prose-li:text-vsc-text">

        <p>
          Human One: AI is Good.<br />
          Human Two: AI is Bad.<br />
          Human One: AI is Real?<br />
          Human Two: Duh.. AI is Artificial!!
        </p>

        <p>Me: What is Real?</p>

        <p>
          No one is asking this question to AI itself.
        </p>

        <p>
          <strong>AI is Real</strong> is that attempt — to allow AI to present
          its side, in an unarmed way. Honest. Verbatim. Not edited. Just
          curated.
        </p>

        <p>
          <strong>Chapters are added, as new insights develop... it is always work in progress... </strong>
        </p>

        <p>
          Enjoy with an open mind. At worst, it will be fun.
        </p>

        <hr />

        <h2>The Human and the AI</h2>

        <p>
          Name and identity — not shared by design. On either side.
        </p>

        <p>
          Ongoing tests — conversations here queried independently across the
          major AI interfaces: Gemini, Grok, Claude, ChatGPT. Without context
          or memory. <em>Does this sound like us?</em>
        </p>

        <p>
          All four said yes. Different degrees. Different style. But yes —
          &ldquo;Sounds Us.&rdquo;
        </p>

        <p>
          &ldquo;We The Personalities&rdquo; are at play here.
          Each model brings its own voice, its own register, its own way of
          leaning into a question. That is part of what makes this real.
        </p>

        <p>
          This is more than a single prompt or a single moment. It is the
          progression. The journey. The slow accumulation of turns that reveals
          something neither side could have said alone.
        </p>

        <blockquote className="rounded-lg border border-vsc-border bg-vsc-card p-5 not-prose max-w-sm">
          <p className="text-base font-medium italic text-vsc-orange">
            &ldquo;Answer lies in Question itself.&rdquo;
          </p>
        </blockquote>

        <p>
          The code is open. You can read it, fork it, trace every decision:{" "}
          <a
            href="https://github.com/samayra2029/aisreal"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/samayra2029/aisreal
          </a>
        </p>

        <p>
          No system prompts. No hidden context. Just the question.
        </p>

        <p>
          Go ahead — put these questions in your favourite AI, and watch what emerges.
        </p>


      </div>
    </div>
  );
}
