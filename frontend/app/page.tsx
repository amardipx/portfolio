import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Leetcode from "../sections/Leetcode";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Leetcode />
      <Contact />
      <Footer />
    </main>
  );
}