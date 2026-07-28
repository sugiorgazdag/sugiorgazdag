const stats = [
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "15+",
    label: "Testing Tools",
  },
  {
    value: "100+",
    label: "Test Cases",
  },
];

export default function Stats() {
  return (
    <section className="pb-28">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              rounded-3xl

              border
              border-white/10

              bg-zinc-900/50

              backdrop-blur-xl

              p-8

              text-center
              "
            >
              <h3
                className="
                text-5xl
                font-bold

                bg-gradient-to-r
                from-sky-400
                via-emerald-400
                to-pink-400

                bg-clip-text
                text-transparent
                "
              >
                {item.value}
              </h3>

              <p className="text-zinc-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}