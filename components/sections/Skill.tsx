import { skillCategories } from "@/data/skill";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-900/50
              backdrop-blur-xl
              p-8
              "
            >
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-sky-500/30
                    bg-sky-500/10
                    text-sky-300
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}