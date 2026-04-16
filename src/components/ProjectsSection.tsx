const projects = [
  {
    title: "E-commerce Application",
    description: "Modern online sales platform built with Next.js",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: ["Product catalog", "Shopping cart", "Payment integration"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data management interface",
    stack: ["React", "Chart.js", "Node.js", "MongoDB"],
    features: ["Real-time metrics", "Data visualization", "Export reports"],
  },
  {
    title: "Personal Portfolio",
    description: "Showcase website with smooth animations",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: ["Responsive design", "Dark mode", "Smooth animations"],
  },
  {
    title: "SaaS Landing Page",
    description: "High-conversion product presentation",
    stack: ["React", "Tailwind CSS", "Vercel", "SEO optimization"],
    features: ["Conversion optimized", "Mobile first", "Fast loading"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-blue-200 dark:border-blue-800 animate-slideInUp"
    >
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-slate-50">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-indigo-500/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group animate-fadeIn"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg mb-4 group-hover:animate-pulse transition-transform group-hover:scale-110"></div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>

            {/* Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <ul className="space-y-1 text-sm">
                {project.features.map((feature, j) => (
                  <li key={j} className="text-slate-600 dark:text-slate-300">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
