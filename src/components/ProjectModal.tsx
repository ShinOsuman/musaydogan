"use client";

import { X } from "lucide-react";
import React from "react";

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  stack: string[];
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header avec bouton fermer */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
              <Icon size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-50">
              Description
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-50">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-50">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
