"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, Share2, Code2 } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`max-w-4xl mx-auto px-6 py-20 border-t border-blue-200 dark:border-blue-800 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-slate-50">
        Let&apos;s Work Together
      </h2>
      <div className="space-y-4">
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Have an exciting project? Let&apos;s discuss and bring your ideas to
          life.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:mus.aydogan@outlook.com"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300 inline-flex items-center gap-2 group"
          >
            <Mail size={20} className="group-hover:animate-bounce" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/musaydogan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300 inline-flex items-center gap-2 group"
          >
            <Share2 size={20} className="group-hover:animate-bounce" />
            LinkedIn
          </a>
          <a
            href="tel:+32487351571"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300 inline-flex items-center gap-2 group"
          >
            <Phone size={20} className="group-hover:animate-bounce" />
            +32 487 35 15 71
          </a>
          <a
            href="https://github.com/ShinOsuman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition transform hover:-translate-y-0.5 hover:scale-105 duration-300 inline-flex items-center gap-2 group"
          >
            <Code2 size={20} className="group-hover:animate-bounce" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
