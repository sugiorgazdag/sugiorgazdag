"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const buttonClass = `
    flex
    items-center
    justify-center
    gap-2

    rounded-full

    bg-sky-500
    text-white
    border
    border-sky-500

    px-6
    py-3

    font-medium

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-105
    hover:bg-sky-600
    hover:border-sky-600
    hover:shadow-xl
    hover:shadow-sky-300/50
  `;

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        px-6
        pt-24
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p
            className="
              text-sky-500
              font-semibold
              mb-4
            "
          >
            Software Quality Assurance Engineer
          </p>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              text-gray-900
              leading-tight
            "
          >
            Galang Eka Wiyono
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              text-gray-600
              leading-8
              text-justify
            "
          >
            Software Quality Assurance Engineer with 5+ years of experience
            delivering reliable digital products across Banking and
            E-Commerce industries. Passionate about ensuring quality,
            improving user experience, and supporting teams in building
            scalable solutions.
          </p>

          <div
            className="
              flex
              mt-8
            "
          >
            <a
              href="#contact"
              className={buttonClass}
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            flex
            justify-center
          "
        >
          <div
            className="
              group
              relative

              w-full
              max-w-sm

              aspect-square

              overflow-hidden

              rounded-3xl

              border
              border-gray-200

              shadow-2xl

              transition-all
              duration-300

              hover:border-sky-400
              hover:shadow-xl
              hover:shadow-sky-300/40
            "
          >
            <Image
              src="/images/galangekw.png"
              alt="Galang Eka Wiyono"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              className="
                object-cover
                object-center

                transition-transform
                duration-500

                group-hover:scale-110
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}