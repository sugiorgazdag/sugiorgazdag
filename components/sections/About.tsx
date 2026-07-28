import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div
          className="
          bg-zinc-900/50

          border
          border-white/10

          backdrop-blur-xl

          rounded-3xl

          p-10
          "
        >
          <p
            className="
            text-zinc-400
            leading-relaxed
            text-lg
            "
          >
            {personalInfo.description}
          </p>
        </div>

      </div>
    </section>
  );
}