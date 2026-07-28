import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Work Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-900/50
              backdrop-blur-xl
              p-8
              "
            >
              <div className="flex flex-col md:flex-row md:justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="text-sky-400 mt-2">
                    {experience.company}
                  </p>

                </div>

                <span className="text-zinc-400">
                  {experience.period}
                </span>

              </div>

              <p className="text-zinc-400 mt-6">
                {experience.description}
              </p>

              <ul className="mt-6 space-y-3">

                {experience.achievements.map((item) => (
                  <li
                    key={item}
                    className="text-zinc-300"
                  >
                    • {item}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}