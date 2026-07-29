"use client";

import { motion } from "framer-motion";


export default function About() {

  return (

    <section
      id="about"
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

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.5
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


          <h2
            className="
              text-4xl
              font-bold
              text-gray-900
            "
          >
            About Me
          </h2>

          <p
            className="
              mt-6

              text-gray-600

              leading-relaxed

              max-w-3xl
            "
          >

            Experienced Software Quality Assurance Engineer with 5+ years of experience in Manual Testing,
            Automation Testing, Software Development, and Quality Engineering for banking and digital payment systems.

            Specialized in improving Software Reliability, Test Strategy, Testing, and Agile
            Software Development Lifecycle.

          </p>

          <div
            className="
              grid

              md:grid-cols-3

              gap-6

              mt-10
            "
          >



            <div
              className="
                rounded-2xl

                bg-gray-50

                border
                border-gray-200

                p-6

                hover:-translate-y-2

                transition
              "
            >

              <h3
                className="
                  font-bold

                  text-gray-900
                "
              >
                Experience
              </h3>


              <p
                className="
                  mt-3

                  text-gray-600
                "
              >
                5+ Years in Software QA/QE Banking System & E-Commerce
              </p>

            </div>




            <div
              className="
                rounded-2xl

                bg-gray-50

                border
                border-gray-200

                p-6

                hover:-translate-y-2

                transition
              "
            >

              <h3
                className="
                  font-bold

                  text-gray-900
                "
              >
                Domain
              </h3>


              <p
                className="
                  mt-3

                  text-gray-600
                "
              >
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

                hover:-translate-y-2

                transition
              "
            >

              <h3
                className="
                  font-bold

                  text-gray-900
                "
              >
                Focus
              </h3>


              <p
                className="
                  mt-3

                  text-gray-600
                "
              >
                Software Quality Assurance Engineering
              </p>

            </div>



          </div>



        </motion.div>


      </div>


    </section>

  );

}