export default function Navigation() {
  return (
    <nav className="border-b border-blue-200 dark:border-blue-800 sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Mustafa Aydogan
        </h2>
        <ul className="flex gap-8">
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
