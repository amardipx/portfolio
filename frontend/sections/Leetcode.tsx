"use client";

import { useEffect, useState } from "react";

export default function Leetcode() {
  const [data, setData] = useState<any>(null);
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    fetch("https://portfolio-backend-f2m7.onrender.com/api/leetcode")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setUpdated(new Date().toLocaleTimeString());
      })
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <section id="leetcode" className="bg-black text-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold">Loading LeetCode Stats...</h2>
        </div>
      </section>
    );
  }

  const solved = data.solved;
  const contest = data.contest;

  const stats = [
    { label: "Problems Solved", value: solved.solvedProblem },
    { label: "Contest Rating", value: Math.round(contest.contestRating) },
    { label: "Medium Solved", value: solved.mediumSolved },
    { label: "Hard Solved", value: solved.hardSolved },
  ];

  return (
    <section id="leetcode" className="bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          LeetCode
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Live Competitive Stats
        </h2>

        <p className="mt-4 text-gray-500 text-sm">
          Updated on page load • Last checked at {updated}
        </p>

        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
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