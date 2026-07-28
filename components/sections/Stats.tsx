export default function Stats() {
  const stats = [
    {
      label: "Years Experience",
      value: "5+",
    },
    {
      label: "Projects",
      value: "20+",
    },
    {
      label: "Companies",
      value: "3",
    },
    {
      label: "Testing Tools",
      value: "15+",
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="
              border
              border-zinc-800
              rounded-2xl
              p-6
              text-center
              "
            >
              <h3 className="text-4xl font-bold text-sky-400">
                {item.value}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}