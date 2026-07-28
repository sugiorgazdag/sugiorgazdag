"use client";

const menus = [
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
      backdrop-blur-xl
      bg-black/40
      border-b
      border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex justify-between items-center">

          <h1 className="font-bold text-xl">
            Galang
            <span className="text-sky-400">.</span>
          </h1>

          <nav className="hidden md:flex gap-8">

            {menus.map((menu) => (
              <a
                key={menu.label}
                href={menu.href}
                className="
                text-zinc-400
                hover:text-sky-400
                transition
                "
              >
                {menu.label}
              </a>
            ))}

          </nav>

        </div>

      </div>
    </header>
  );
}