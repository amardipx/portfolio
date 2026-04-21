export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
        Amardip Karn
      </h1>

      <p className="mt-6 text-lg md:text-2xl text-gray-400 max-w-2xl">
        Backend Developer • Problem Solver • Builder
      </p>

      <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
        Building strong systems, solving hard problems, and pursuing mastery in computer science.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
          View Projects
        </button>

        <button className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-900 transition">
          Contact
        </button>
      </div>
    </section>
  );
}