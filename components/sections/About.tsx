import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div
          className="
          border
          border-zinc-800
          rounded-3xl
          p-8
          bg-zinc-900/50
          "
        >
          <p className="text-zinc-400 leading-relaxed text-lg">
            {personalInfo.description}
          </p>
        </div>

      </div>
    </section>
  );
}