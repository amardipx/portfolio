export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <a
            href="#home"
            className="text-xl font-bold tracking-wide hover:text-gray-300 transition">AK</a>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#leetcode" className="hover:text-white transition">LeetCode</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}