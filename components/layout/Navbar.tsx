"use client";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-md
      bg-black/40
      border-b
      border-zinc-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          <h1 className="font-bold text-xl">
            Galang<span className="text-sky-400">.</span>
          </h1>

          <nav className="hidden md:flex gap-8">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                text-zinc-400
                hover:text-white
                transition
                "
              >
                {item.label}
              </a>
            ))}

          </nav>

        </div>

      </div>
    </header>
  );
}