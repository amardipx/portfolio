export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            I build with discipline, logic, and intent.
          </h2>
        </div>

        <div>
          <p className="text-gray-400 text-lg leading-8">
            I’m a Computer Science student focused on backend engineering,
            algorithms, and building systems that solve real problems.
          </p>

          <p className="mt-6 text-gray-500 leading-8">
            My current focus is mastering data structures, scalable software,
            and creating projects that reflect depth rather than noise.
          </p>
        </div>
      </div>
    </section>
  );
}