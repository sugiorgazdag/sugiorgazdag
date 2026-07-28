"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    label: "Years Experience",
  },

  {
    number: "1000+",
    label: "Test Cases Executed",
  },

  {
    number: "20+",
    label: "Features Tested",
  },

  {
    number: "10+",
    label: "QA Tools",
  },
];

export default function Stats() {
  return (
    <section
      className="
py-20
px-6
"
    >
      <div
        className="
max-w-6xl

mx-auto

grid

grid-cols-2

md:grid-cols-4

gap-6
"
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
rounded-2xl

bg-white

border
border-gray-200

shadow-lg

p-6

text-center

hover:-translate-y-2

transition
"
          >
            <h3
              className="
text-4xl

font-bold

text-sky-500
"
            >
              {item.number}
            </h3>

            <p
              className="
mt-3

text-gray-600
"
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
