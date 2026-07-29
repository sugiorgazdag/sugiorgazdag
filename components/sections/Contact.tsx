"use client";

import { motion } from "framer-motion";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              mt-5
              text-gray-600
              max-w-2xl
              mx-auto
            "
          >
            Interested in building reliable software with quality engineering?
            Let's connect and discuss how I can help improve your product
            quality.
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-8
            "
          >
            {/* Download CV */}

            <a
              href="/cv.pdf"
              download
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                px-6
                py-3
                hover:bg-sky-400
                hover:border-gray-50
                transition
              "
            >
              <Download size={18} />
              Download CV
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/galangekw/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                px-6
                py-3
                hover:bg-sky-400
                hover:border-gray-50
                transition
              "
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                px-6
                py-3
                hover:bg-sky-400
                hover:border-gray-50
                transition
              "
            >
              <FaGithub size={18} />
              GitHub
            </a>

            {/* Email */}

            <a
              href="mailto:ggalangekawiyonoo@gmail.com"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                px-6
                py-3
                hover:bg-sky-400
                hover:border-gray-50
                transition
              "
            >
              <FaEnvelope size={18} />
              Email
            </a>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
              mt-12
              text-left
            "
          >
            <div
              className="
rounded-3xl
bg-white
border
border-gray-100
shadow-xl
p-10
text-center
"
            >
              <p
                className="
                  text-gray-600
                  text-sm
                "
              >
                Email
              </p>

              <p
                className="
                  mt-2
                  font-medium
                  break-all
                "
              >
                ggalangekawiyonoo@gmail.com
              </p>
            </div>

            <div
              className="
rounded-3xl
bg-white
border
border-gray-100
shadow-xl
p-10
text-center
"
            >
              <p
                className="
                  text-gray-600
                  text-sm
                "
              >
                Availability
              </p>

              <p
                className="
                  mt-2
                  font-medium
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
