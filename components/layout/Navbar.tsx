"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },

  {
    name: "Experience",
    href: "#experience",
  },

  {
    name: "Skills",
    href: "#skills",
  },

  {
    name: "Projects",
    href: "#projects",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
fixed
top-0
left-0

w-full

z-50

transition-all
duration-300

${
  scrolled
    ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    : "bg-transparent"
}

`}
    >
      <nav
        className="
max-w-6xl
mx-auto

px-6
py-5

flex
items-center
justify-between
"
      >
        <h1
          className="
font-bold
text-xl
text-gray-900
"
        >
          Galang.dev
        </h1>

        <div
          className="
hidden
md:flex
gap-8
"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
text-gray-600

hover:text-sky-500

transition
"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
