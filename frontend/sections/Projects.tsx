export default function Projects() {
  const projects = [
    {
      title: "CodeCollab",
      desc: "Full-stack collaboration platform with task sharing, secure authentication, and real-time workflows. Built modular REST APIs and optimized database performance.",
      tech: "Node.js • Express • PostgreSQL • JWT • Docker",
      highlights: [
        "15+ REST APIs",
        "RBAC + JWT auth",
        "30–40% faster queries",
      ],
    },
    {
      title: "Lords Win Predictor",
      desc: "Machine learning-powered match outcome prediction platform. Predicts win / draw / loss outcomes through a production-ready API service.",
      tech: "FastAPI • Python • scikit-learn • PostgreSQL • React • Docker",
      highlights: [
        "ML prediction engine",
        "REST API deployment",
        "CI/CD ready architecture",
      ],
    },
    {
      title: "SimpleBank",
      desc: "Production-grade banking backend focused on secure transactions, account management, and robust API architecture.",
      tech: "Go • Gin • PostgreSQL • SQLC • JWT • bcrypt",
      highlights: [
        "20+ REST endpoints",
        "80%+ test coverage",
        "Type-safe SQL queries",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Projects
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Systems I’ve Built
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-8 bg-zinc-950 hover:border-gray-600 transition"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {project.desc}
              </p>

              <p className="mt-5 text-sm text-gray-500">
                {project.tech}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-300 border border-gray-800"
                  >
                    {item}
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