export default function Leetcode() {
  const stats = [
    { label: "Global Rank", value: "Top 1.3%" },
    { label: "Problems Solved", value: "430+" },
    { label: "Contest Rating", value: "1560" },
  ];

  return (
    <section
      id="leetcode"
      className="min-h-screen bg-black text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          LeetCode
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Competitive Problem Solving
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl leading-8">
          Strong algorithmic foundation built through consistent practice in
          data structures, optimization, and contest-style problem solving.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-zinc-950 p-8"
            >
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="mt-3 text-3xl font-semibold">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}