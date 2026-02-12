import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/morals", label: "Morals" },
  { href: "/summary", label: "Summary" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          AI is Real
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
