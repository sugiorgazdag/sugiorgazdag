"use client";

import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sky-400 mb-4">
          Hello, I'm
        </p>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-bold
          mb-6

          bg-gradient-to-r
          from-white
          via-sky-400
          to-white

          bg-clip-text
          text-transparent
          "
        >
          {personalInfo.name}
        </h1>

        <h2
          className="
          text-2xl
          md:text-4xl
          text-zinc-400
          mb-8
          "
        >
          {personalInfo.role}
        </h2>

        <div
          className="
          inline-flex
          items-center
          gap-2

          px-5
          py-3

          rounded-full

          border
          border-sky-500/30

          bg-sky-500/10

          mb-8
          "
        >
          🚀 {personalInfo.experience}
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

        <div className="flex justify-center flex-wrap gap-4">

          <a
            href={personalInfo.cvUrl}
            className="
            px-6
            py-3

            rounded-xl

            bg-sky-500

            hover:bg-sky-600

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

            border-emerald-500

            text-emerald-400

            hover:bg-emerald-500
            hover:text-black

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