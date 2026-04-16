const skillsGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "VS Code", "Vercel"],
  },
  {
    category: "Other",
    skills: ["SEO", "Performance", "UX/UI", "Web Design"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-blue-200 dark:border-blue-800 animate-slideInUp"
    >
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-50">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsGroups.map((group, i) => (
          <div
            key={i}
            className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-200 dark:border-blue-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill, j) => (
                <li
                  key={j}
                  className="text-slate-600 dark:text-slate-300 transition-all hover:translate-x-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
