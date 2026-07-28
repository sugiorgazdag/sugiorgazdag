"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "BRI",
    role: "Software Quality Assurance Engineer",
    desc: "Testing banking ecosystem including MMS, QRIS, EDC, API integration, regression testing and automation.",
  },

  {
    company: "E-Commerce Platform",
    role: "QA Engineer",
    desc: "Performed functional testing, API validation, UI testing and quality improvement for digital products.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
py-24
px-6
"
    >
      <div
        className="
max-w-5xl
mx-auto
"
      >
        <h2
          className="
text-4xl
font-bold
text-gray-900
mb-12
"
        >
          Experience
        </h2>

        <div
          className="
space-y-8
"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
relative

rounded-3xl

bg-white

border

border-gray-200

shadow-lg

p-8
"
            >
              <div
                className="
absolute

-left-3

top-8

w-6
h-6

rounded-full

bg-sky-500
"
              />

              <h3
                className="
text-2xl
font-bold
text-gray-900
"
              >
                {item.company}
              </h3>

              <p
                className="
text-sky-500

font-medium

mt-2
"
              >
                {item.role}
              </p>

              <p
                className="
mt-4

text-gray-600

leading-relaxed
"
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
