export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slideInLeft">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-pulse-glow">
            Creative & Innovative Developer
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            I craft modern and intuitive web experiences using the latest
            technologies. Let&apos;s build something amazing together.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Photo Section */}
        <div className="flex justify-center animate-slideInRight">
          <div className="relative w-full max-w-sm animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-30 animate-pulse-glow"></div>
            <img
              src="/photo.jpg"
              alt="Profile"
              className="relative w-full h-auto rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-slate-800 transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <p className="text-center mt-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
              Mustafa Aydogan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
