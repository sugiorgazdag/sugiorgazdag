import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="space-y-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-zinc-900/50
                backdrop-blur-xl
                p-8
              "
            >
              <div className="mb-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-sky-400 mt-2">
                  {project.company}
                </p>

              </div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">

                <h4 className="font-semibold mb-3">
                  Key Contributions
                </h4>

                <ul className="space-y-2">

                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-zinc-300"
                    >
                      • {item}
                    </li>
                  ))}

                </ul>

              </div>

              <div className="flex flex-wrap gap-3">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-2

                      rounded-full

                      bg-sky-500/10

                      border
                      border-sky-500/20

                      text-sky-300
                      text-sm
                    "
                  >
                    {tech}
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