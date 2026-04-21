export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Contact
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Let’s Build Something Serious
        </h2>

        <p className="mt-6 text-gray-400 leading-8 max-w-2xl mx-auto">
          Open to internships, engineering roles, collaborations, and
          ambitious technical projects.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:karnamardip@gmail.com"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/amardipx"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-zinc-900 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/_amardipkarn"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-zinc-900 transition"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}