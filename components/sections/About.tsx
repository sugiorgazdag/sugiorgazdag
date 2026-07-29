"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            rounded-3xl
            bg-white
            border
            border-gray-200
            shadow-xl
            p-10
          "
        >
          <h2 className="text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <p
            className="
              mt-6
              max-w-4xl
              text-gray-600
              leading-8
              text-justify
            "
          >
            I am a Software Quality Assurance Engineer with 5+ years of
            experience helping teams deliver reliable and user-focused digital
            products.
            <br />
            <br />
            My professional journey includes working with organizations such as
            BRI, GoTo, and ByteDance, where I contributed to Banking, Fintech,
            and E-Commerce platforms through comprehensive quality assurance
            practices.
            <br />
            <br />
            I believe quality is more than finding defects—it is about creating
            confidence in every release. By collaborating closely with
            cross-functional teams, I strive to ensure products meet business
            goals while providing the best possible experience for users.
          </p>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <div
              className="
                rounded-2xl
                bg-gray-50
                border
                border-gray-200
                p-6
                transition
                hover:-translate-y-2
              "
            >
              <h3 className="font-bold text-gray-900">
                Experience
              </h3>

              <p className="mt-3 text-gray-600">
                5+ Years in Software QA / QE Banking System & E-Commerce
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-gray-50
                border
                border-gray-200
                p-6
                transition
                hover:-translate-y-2
              "
            >
              <h3 className="font-bold text-gray-900">
                Domain
              </h3>

              <p className="mt-3 text-gray-600">
                Banking System, Merchant Platform & E-Commerce
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-gray-50
                border
                border-gray-200
                p-6
                transition
                hover:-translate-y-2
              "
            >
              <h3 className="font-bold text-gray-900">
                Focus
              </h3>

              <p className="mt-3 text-gray-600">
                Software Quality Assurance Engineering
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}