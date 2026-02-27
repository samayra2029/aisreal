export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 border-l-4 border-vsc-accent p-4">
      <p className="text-base font-medium text-vsc-blue">{children}</p>
    </div>
  );
}

export function HighlightList({ highlights }: { highlights: string[] }) {
  if (!highlights.length) return null;
  return (
    <details className="my-6 group">
      <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-vsc-text-muted hover:text-vsc-accent list-none">
        Key Highlights ›
      </summary>
      <div className="mt-3 space-y-2">
        {highlights.map((h, i) => (
          <Highlight key={i}>{h}</Highlight>
        ))}
      </div>
    </details>
  );
}
