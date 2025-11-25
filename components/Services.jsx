const services = [
  {
    title: "Web development",
    desc: "Creation of modern web applications to help our customers expand their business.",
  },
  {
    title: "UI/UX design",
    desc: "Bridging the gap between technology and users with easy-to-navigate interfaces.",
  },
  {
    title: "Mobile development",
    desc: "Ensuring smooth operation and native-like experience across platforms.",
  },
  {
    title: "Cloud / DevOps",
    desc: "Boosting delivery capabilities with CI/CD, automation and cloud-native stacks.",
  },
];

export default function Services() {
  return (
    <section className="bg-bg-dark py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 animate-fade-up">
          <h2 className="text-3xl font-semibold">Software development expertise</h2>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl">
            Our team has been delivering projects across the globe since 2015,
            gaining expertise in the most demanded aspects of software development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-card-dark/80 border border-white/5 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-blue-700/30 animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-3 h-9 w-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 text-lg">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
