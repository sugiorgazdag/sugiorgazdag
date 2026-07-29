"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const infoCardClass = `
    rounded-2xl
    bg-gray-50
    border
    border-gray-200
    p-6
    text-center
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-sky-300
    hover:shadow-xl
    hover:shadow-sky-100
  `;

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
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
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
            text-center
          "
        >
          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
              leading-relaxed
            "
          >
            Interested in collaborating on quality-driven software
            projects? Feel free to connect with me to discuss Quality
            Assurance, testing strategies, and opportunities to build
            reliable digital products.
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            {/* Download CV */}
            <a
              href="/documents/galangekw.pdf"
              download="Galang_Eka_Wiyono_CV.pdf"
              className={buttonClass}
            >
              <Download size={18} />
              Download CV
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/galangekw/"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/galangekawiyono"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <FaGithub size={18} />
              GitHub
            </a>

            {/* Email */}
            <a
              href="mailto:ggalangekawiyonoo@gmail.com"
              className={buttonClass}
            >
              <FaEnvelope size={18} />
              Email
            </a>
          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
            "
          >
            <div className={infoCardClass}>
              <p className="text-sm text-gray-600">
                Email
              </p>

              <p
                className="
                  mt-2
                  font-medium
                  text-gray-900
                  break-all
                "
              >
                ggalangekawiyonoo@gmail.com
              </p>
            </div>

            <div className={infoCardClass}>
              <p className="text-sm text-gray-600">
                Availability
              </p>

              <p
                className="
                  mt-2
                  font-medium
                  text-gray-900
                "
              >
                Open for QA Engineer Opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}