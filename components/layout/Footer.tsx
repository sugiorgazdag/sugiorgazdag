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
        border-gray-200
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

          text-center
          md:text-left
        "
      >
        <div
          className="
            text-center
            md:text-left
          "
        >
          <h3
            className="
              font-bold
              text-lg
              text-gray-900
            "
          >
            Galang Eka Wiyono
          </h3>

          <p
            className="
              text-sm
              text-gray-500
              mt-1
            "
          >
            Software Quality Assurance Engineer
          </p>
        </div>

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <a
            href="https://www.linkedin.com/in/galangekw/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-500
              transition-all
              duration-300
              hover:text-sky-500
              hover:-translate-y-1
            "
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/sugiorgazdag"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-500
              transition-all
              duration-300
              hover:text-sky-500
              hover:-translate-y-1
            "
          >
            <FaGithub size={22} />
          </a>
        </div>

        <p
          className="
            text-sm
            text-gray-500
            text-center
            md:text-right
          "
        >
          © {new Date().getFullYear()} Galang Eka Wiyono
        </p>
      </div>
    </footer>
  );
}