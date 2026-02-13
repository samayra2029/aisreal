import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/chapters", label: "Chapters" },
  { href: "/morals", label: "Morals" },
  { href: "/story", label: "Story" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="border-b border-vsc-border bg-vsc-sidebar">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-vsc-blue"
        >
          AI is Real
        </Link>
        <nav className="flex gap-5 text-sm">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-vsc-text-muted transition-colors hover:text-vsc-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
