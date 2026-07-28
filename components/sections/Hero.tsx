"use client";

import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sky-400 font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {personalInfo.name}
        </h1>

        <h2 className="text-2xl md:text-4xl text-zinc-400 mb-6">
          {personalInfo.role}
        </h2>

        <div
          className="
            inline-flex
            items-center
            gap-2
            bg-zinc-900
            border
            border-zinc-800
            rounded-full
            px-4
            py-2
            mb-8
          "
        >
          <span>🚀</span>
          <span>{personalInfo.experience}</span>
        </div>

        <p
          className="
            max-w-3xl
            mx-auto
            text-zinc-400
            text-lg
            leading-relaxed
            mb-10
          "
        >
          {personalInfo.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href={personalInfo.cvUrl}
            className="
              px-6
              py-3
              rounded-xl
              bg-sky-600
              hover:bg-sky-700
              transition
            "
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="
              px-6
              py-3
              rounded-xl
              border
              border-zinc-700
              hover:border-zinc-500
              transition
            "
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}