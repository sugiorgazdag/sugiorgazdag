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
        pt-24
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Greeting */}
        <p className="text-sky-400 font-medium mb-4">
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          className="
            text-5xl
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

        {/* Role */}
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

        {/* Experience Badge */}
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

            text-sky-300

            mb-8
          "
        >
          🚀 {personalInfo.experience}
        </div>

        {/* Description */}
        <p
          className="
            max-w-3xl
            mx-auto

            text-zinc-400
            text-lg

            leading-relaxed

            mb-8
          "
        >
          {personalInfo.description}
        </p>

        {/* Summary */}
        <p
          className="
            max-w-3xl
            mx-auto

            text-zinc-500
            text-base

            leading-relaxed

            mb-10
          "
        >
          {personalInfo.summary}
        </p>

        {/* Expertise */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {personalInfo.expertise.map((item) => (
            <span
              key={item}
              className="
                px-4
                py-2

                rounded-full

                bg-zinc-900

                border
                border-sky-500/20

                text-sky-300
                text-sm

                hover:border-sky-400/40
                transition
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Company Experience */}
        <div className="mb-10">
          <p className="text-zinc-500 text-sm tracking-widest mb-4">
            EXPERIENCE WITH
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {personalInfo.companies.map((company) => (
              <span
                key={company}
                className="
                  px-4
                  py-2

                  rounded-full

                  border
                  border-white/10

                  bg-zinc-900/50

                  text-zinc-300
                  text-sm
                "
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center flex-wrap gap-4">

          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6
              py-3

              rounded-xl

              bg-sky-500

              hover:bg-sky-600

              transition
            "
          >
            View Resume
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
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