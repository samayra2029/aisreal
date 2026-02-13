export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 border-l-4 border-vsc-accent bg-vsc-highlight/40 p-4">
      <p className="text-sm font-medium text-vsc-blue">{children}</p>
    </div>
  );
}

export function HighlightList({ highlights }: { highlights: string[] }) {
  if (!highlights.length) return null;
  return (
    <div className="my-6 space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-vsc-text-muted">
        Key Highlights
      </h3>
      {highlights.map((h, i) => (
        <Highlight key={i}>{h}</Highlight>
      ))}
    </div>
  );
}
