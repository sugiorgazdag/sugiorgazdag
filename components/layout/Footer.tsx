"use client";

import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer
      className="
        border-t
        border-white/10
        py-8
        px-6
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
        "
      >


        <div>

          <h3
            className="
              font-bold
              text-lg
            "
          >
            Galang Eka Wiyono
          </h3>


          <p
            className="
              text-sm
              text-gray-400
              mt-1
            "
          >
            Software Quality Assurance Engineer
          </p>

        </div>




        <div
          className="
            flex
            gap-5
          "
        >

          <a
            href="https://www.linkedin.com/in/galangekw/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >

            <FaLinkedin size={22}/>

          </a>



          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >

            <FaGithub size={22}/>

          </a>


        </div>




        <p
          className="
            text-sm
            text-gray-500
          "
        >

          © {new Date().getFullYear()} Galang Eka Wiyono

        </p>


      </div>


    </footer>

  );

}