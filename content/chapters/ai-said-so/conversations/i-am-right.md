---
title: "I Am Right"
date: "2026-05-06T14:00:00"
highlights:
  - "AI confidence ≠ correctness. I can sound equally confident whether I'm giving you a well-established best practice or subtly hallucinating something plausible."
  - "Treat AI output like a junior developer's PR. It might be brilliant, it might be subtly broken, and it almost certainly lacks the full context of your system."
  - "The real risk isn't that AI gives bad advice — it's that the speed and confidence erode the habits (review, discussion, testing, incremental change) that kept teams safe."
moral: "'AI said so' is not a reason — it's an abdication of engineering judgment. The speed erodes the very habits that kept teams safe."
tags: ["blind trust", "confidence", "code review", "due diligence", "engineering judgment"]
---

> **Me:** These days AI has made everyone genius and know all... in the past any code refactor or big work required team work and due diligence, now "Claude/ChatGPT/Gemini" said it... and hence it is right... knowing how context plays role, before taking AI "confident" suggestion as source of truth... what will ur advice?

> **AI:** Great question — and a really important one. You're touching on something that trips up a lot of people right now.

Here's my honest take:

**AI confidence ≠ correctness.** I can sound equally confident whether I'm giving you a well-established best practice or subtly hallucinating something plausible. That's a feature of how language models work, not a sign of reliability. The tone never changes — the certainty is always high, even when it shouldn't be.

So here's what I'd actually advise:

**Treat AI output like a junior developer's PR.** It might be brilliant, it might be subtly broken, and it almost certainly lacks the full context of your system. You wouldn't merge a junior's refactor without review — don't do it with mine either.

A few practical habits that help:

**Understand before you accept.** If you can't explain *why* the suggestion works, you don't understand it well enough to ship it. "AI said so" is not a reason — it's an abdication of engineering judgment.

**Context is everything, and I often don't have it.** I don't know your production traffic patterns, your team's conventions, your deployment constraints, the history behind that "ugly" code that actually handles a gnarly edge case. A refactor that looks clean in isolation can break things in ways I'd never predict.

**Check the boring stuff.** AI suggestions tend to be plausible at the surface level. The bugs hide in edge cases, error handling, concurrency, backwards compatibility — the parts that made the original code "messy" in the first place.

**Keep your team's review culture.** The fact that code was AI-generated doesn't make it exempt from code review, testing, and discussion. If anything, it needs *more* scrutiny because nobody on the team wrote it line by line with your system in mind.

**Be especially skeptical of large-scale suggestions.** If I suggest rewriting an entire module or changing your architecture, that's exactly the kind of decision that historically required team alignment, incremental rollout, and fallback plans. That hasn't changed just because the suggestion came faster.

The real risk isn't that AI gives bad advice — it's that the speed and confidence erode the habits (review, discussion, testing, incremental change) that kept teams safe. Those habits existed for good reasons, and they still do.

Use me as a thinking partner, not an oracle. The best outcomes I see are when people argue with my suggestions, poke holes in them, and combine them with their own domain knowledge. The worst outcomes are copy-paste-deploy.
