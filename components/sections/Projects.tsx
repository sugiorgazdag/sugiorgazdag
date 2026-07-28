"use client";

import { motion } from "framer-motion";
import { CreditCard, Smartphone, Database, TestTube2 } from "lucide-react";

const projects = [
  {
    title: "BRI Merchant Management System (MMS)",
    role: "Software Quality Assurance Engineer",
    description:
      "Enterprise merchant platform supporting merchant onboarding, QRIS management, EDC lifecycle, and digital payment ecosystem.",

    scope: [
      "Merchant Onboarding",
      "QRIS Dynamic",
      "EDC Lifecycle",
      "Merchant Data Management",
    ],

    testing: [
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Database Validation",
    ],

    tools: ["Jira", "Postman", "SQL", "Cypress"],

    icon: CreditCard,
  },

  {
    title: "QRIS Merchant Platform",
    role: "QA Engineer",

    description:
      "Quality assurance for QRIS payment services ensuring transaction reliability, data consistency, and business flow validation.",

    scope: [
      "QRIS Registration",
      "Merchant Validation",
      "Transaction Flow",
      "Settlement Checking",
    ],

    testing: [
      "API Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Smoke Testing",
    ],

    tools: ["Postman", "SQL", "Jira", "BRISpot DB"],

    icon: Smartphone,
  },

  {
    title: "Automation Testing Framework",

    role: "Automation QA Engineer",

    description:
      "Developing and maintaining automated test scenarios to improve regression efficiency and software reliability.",

    scope: ["Web Automation", "API Automation", "Regression Suite"],

    testing: ["Selenium", "Playwright", "Cypress", "WebdriverIO"],

    tools: ["TypeScript", "Node.js", "Git"],

    icon: TestTube2,
  },

  {
    title: "Database Validation & Data Migration",

    role: "QA Engineer",

    description:
      "Validating database integrity, migration process, and ensuring application data consistency.",

    scope: [
      "Data Verification",
      "Query Validation",
      "Historical Data Checking",
    ],

    testing: ["SQL Testing", "Data Comparison", "Backend Validation"],

    tools: ["SQL", "BRISpot Database", "API Response"],

    icon: Database,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-8
"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
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

hover:-translate-y-2

hover:border-sky-400/50

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

                  <div>
                    <h3
                      className="
text-xl
font-bold
"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
text-sm
text-gray-400
"
                    >
                      {project.role}
                    </p>
                  </div>
                </div>

                <p
                  className="
text-gray-300
mb-6
"
                >
                  {project.description}
                </p>

                <h4
                  className="
font-semibold
mb-3
"
                >
                  Scope
                </h4>

                <div
                  className="
flex
flex-wrap
gap-2
mb-6
"
                >
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="
px-3
py-1
rounded-full
bg-black/30
text-sm
text-gray-300
"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h4
                  className="
font-semibold
mb-3
"
                >
                  Testing Coverage
                </h4>

                <ul
                  className="
text-gray-400
space-y-2
mb-6
"
                >
                  {project.testing.map((test) => (
                    <li key={test}>✓ {test}</li>
                  ))}
                </ul>

                <h4
                  className="
font-semibold
mb-3
"
                >
                  Tools
                </h4>

                <div
                  className="
flex
flex-wrap
gap-2
"
                >
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="
px-3
py-1
rounded-full
border
border-white/10
text-sm
"
                    >
                      {tool}
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
