export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 border-t border-blue-200 dark:border-blue-800 animate-slideInUp"
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-50">
        Let's Work Together
      </h2>
      <div className="space-y-4">
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Have an exciting project? Let's discuss and bring your ideas to life.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:contact@example.com"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300"
          >
            Email
          </a>
          <a
            href="#"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
