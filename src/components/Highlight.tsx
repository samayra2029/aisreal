export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 border-l-4 border-amber-400 bg-amber-50 p-4 dark:border-amber-500 dark:bg-amber-950/30">
      <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
        {children}
      </p>
    </div>
  );
}

export function HighlightList({ highlights }: { highlights: string[] }) {
  if (!highlights.length) return null;
  return (
    <div className="my-6 space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        Key Highlights
      </h3>
      {highlights.map((h, i) => (
        <Highlight key={i}>{h}</Highlight>
      ))}
    </div>
  );
}
