"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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
            Building Reliable Software Through Quality Engineering
          </h1>

          <p
            className="
mt-6

text-lg

text-gray-600

leading-relaxed
"
          >
            Experienced QA Engineer with 5+ years of experience in manual
            testing, automation testing, API testing, and banking digital
            platform quality assurance.
          </p>

          <div
            className="
flex
gap-4

mt-8
"
          >
            <a
              href="#contact"
              className="
rounded-full

bg-sky-500

text-white

px-7
py-3

font-semibold

hover:bg-sky-600

transition
"
            >
              Let's Connect
            </a>

            <a
              href="/cv.pdf"
              download
              className="
rounded-full

border

border-gray-300

px-7
py-3

font-semibold

text-gray-700

hover:bg-gray-100

transition
"
            >
              Download CV
            </a>
          </div>
        </motion.div>

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
relative

w-72
h-72

rounded-3xl

overflow-hidden

border

border-gray-200

shadow-2xl
"
          >
            <Image
              src="/images/profile.png"
              alt="Galang Eka Wiyono"
              fill
              className="
object-cover
"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
