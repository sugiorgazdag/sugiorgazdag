"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    role: "Software Quality Assurance Engineer",
    period: "Aug 2024 – Present",
    desc: [
      "Contributed to the development of internal applications for Bank BRI’s Head Office and Branch Offices, focusing on the Merchant Management System (MMS) to support operational efficiency.",
      "Executed deployment processes for newly developed features and bug fixes, ensuring successful and stable rollout to staging and production environments.",
      "Performed comprehensive manual testing, including System Integration Testing (SIT), User Acceptance Testing (UAT), Functional Testing, Regression Testing, and End-to-End (E2E) Testing for features with cross-module or business-critical impact.",
      "Developed and maintained detailed test documentation, such as test scenarios, test cases, and technical notes to support quality assurance and continuous improvement.",
      "Participated in regular coordination and alignment meetings with developers, QA teams, and project stakeholders to plan and evaluate sprint activities.",
      "Utilized Agile methodologies throughout the development and QA lifecycle, ensuring iterative progress, early feedback, and collaborative team engagement."
    ]
  },

  {
    company: "ByteDance Technology Co., Ltd.",
    role: "Software Quality Assurance Tester",
    period: "Jan 2024 – Jun 2024",
    desc: [
      "Conducted data integration testing between Tokopedia applications and TikTok Shop to ensure seamless synchronization and data consistency across platforms.",
      "Performed functional and regression testing on delivery-related services such as BO/PLUS, free shipping vouchers, and visual delivery badges to verify correct implementation and user experience.",
      "Involved in the migration of several key features from the Tokopedia platform to TikTok Shop, ensuring feature parity, functionality, and usability post-migration.",
      "Utilized the Lark platform to create and manage test cases, maintain user story repositories, and track bugs or issues identified during the testing process.",
      "Developed a strong understanding of the TikTok Shop ecosystem, focusing on buyer experience workflows, UI/UX behavior, and end-to-end user journey validation."
    ]
  },

  {
    company: "PT GoTo Gojek Tokopedia Tbk (GoTo)",
    role: "Software Quality Assurance Tester",
    period: "Aug 2021 – Dec 2023",
    desc: [
      "Reviewed and analyzed Product Requirement Documents (PRD) and Business Requirement Documents (BRD) to develop and execute effective testing strategies.",
      "Designed and maintained detailed test documentation, including test cases, test scenarios, test plans, and execution reports tailored to project requirements.",
      "Conducted comprehensive manual testing for web-based applications (desktop), Mobile Lite, Android, and iOS platforms to ensure optimal functionality and user experience.",
      "Performed Smoke Testing, Regression Testing, and User Acceptance Testing (UAT) to validate product readiness and release quality.",
      "Identified, documented, and reported software defects while collaborating with Product Managers, Software Engineers, and Developers to resolve issues efficiently.",
      "Worked within Agile SDLC environments and utilized tools such as Jira, Confluence, Postman, Figma, Slack, Google Workspace, and Microsoft Office to support QA activities."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
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

        <div className="space-y-8">
          {experiences.map((item) => (
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
              transition={{
                duration: 0.5,
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
                  font-semibold
                  mt-2
                "
              >
                {item.role}
              </p>

              <p
                className="
                  text-sm
                  text-gray-500
                  mt-1
                "
              >
                {item.period}
              </p>

              <ul
                className="
                  mt-5
                  list-disc
                  pl-5
                  space-y-2
                  text-gray-600
                  leading-relaxed
                "
              >
                {item.desc.map((descItem, idx) => (
                  <li key={idx}>{descItem}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}