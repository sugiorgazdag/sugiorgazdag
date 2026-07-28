"use client";

import { Code2, Database, Bug, Settings, Terminal } from "lucide-react";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Quality Assurance",
    icon: Bug,
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "UAT Testing",
      "Test Case Design",
      "Defect Management",
    ],
  },

  {
    title: "Automation Testing",
    icon: Code2,
    skills: [
      "Selenium",
      "Playwright",
      "Cypress",
      "WebdriverIO",
      "Appium",
      "Katalon Studio",
      "Cypress TypeScript",
    ],
  },

  {
    title: "Tools & Framework",
    icon: Settings,
    skills: ["Jira", "Postman", "Git", "Node.js", "Cucumber", "Agile / Scrum"],
  },

  {
    title: "Database & Technical",
    icon: Database,
    skills: [
      "SQL Query",
      "Database Validation",
      "BRISpot Database",
      "API Response Analysis",
      "JSON Handling",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
py-24
px-6
"
    >
      <div
        className="
max-w-6xl
mx-auto
"
      >
        <h2
          className="
text-4xl
font-bold
text-center
mb-16
"
        >
          Skills & Expertise
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-8
"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
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
                  delay: index * 0.1,
                }}
                className="
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8

hover:border-sky-400/40
transition
"
              >
                <div
                  className="
flex
items-center
gap-4
mb-6
"
                >
                  <div
                    className="
p-3
rounded-xl
bg-sky-500/10
"
                  >
                    <Icon
                      className="
text-sky-400
"
                    />
                  </div>

                  <h3
                    className="
text-xl
font-semibold
"
                  >
                    {group.title}
                  </h3>
                </div>

                <div
                  className="
flex
flex-wrap
gap-3
"
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
px-4
py-2

rounded-full

bg-black/30

border
border-white/10

text-sm
text-gray-300

hover:text-white
hover:border-sky-400/50

transition
"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
