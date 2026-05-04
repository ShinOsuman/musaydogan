import { Download } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="border-b border-emerald-200 dark:border-emerald-800 sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Mustafa Aydogan
        </h2>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8">
            <li>
              <a
                href="#projects"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/Mustafa_Aydogan_Resume.pdf"
            download
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300 inline-flex items-center gap-2 group whitespace-nowrap"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
