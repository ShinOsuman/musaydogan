"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cat, Database, Activity, Joystick, Euro } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "aniMate – Pet Care Management Platform",
    description:
      "Full-stack web application for pet owners, pet sitters, and veterinarians to manage pet care, appointments, and pet-sitting activities.",
    icon: Cat,
    stack: [
      "Spring Boot",
      "Spring Security",
      "Java",
      "MySQL",
      "Vue.js",
      "Pinia",
      "Rest API",
      "Amazon S3",
    ],
    features: [
      "JWT Authentication",
      "Pet Management",
      "Appointment Scheduling",
      "Pet-Sitting Services",
      "Veterinary Records",
    ],
  },
  {
    title: "SQL Trainer – Interactive Learning Platform",
    description:
      "Educational web application designed to help students practice SQL through real database queries and teacher-created exercises.",
    icon: Database,
    stack: [
      "ASP.NET",
      "C#",
      "Entity Framework",
      "Angular",
      "MySQL",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    features: [
      "Teachers can create quiz-based SQL exercises",
      "Students can practice SQL queries",
      "Real-time feedback on query results",
      "Secure authentication and role management",
    ],
  },
  {
    title: "MyPoll – Poll Management Application",
    description:
      "Academic project focused on designing and implementing a poll management system with participants, votes, comments, and business rules around simple and multiple-choice polls.",
    icon: Activity,
    stack: ["C#", "Entity Framework", "SQL Server", "LINQ"],
    features: [
      "Built the class model from a functional specification",
      "Implemented the database schema with Entity Framework",
      "Tested the model with seed data and multi-entity LINQ queries",
    ],
  },
  {
    title: "Farming Game – Grid-Based Desktop Application",
    description:
      "Academic project focused on the design and implementation of a small farming game prototype with player movement, tile interactions, and an extensible game board model.",
    icon: Joystick,
    stack: [
      "Java",
      "JavaFX",
      "MVVM",
      "Object-Oriented Design",
      "Event Handling",
    ],
    features: [
      "Designed an extensible model for grid cells and game elements",
      "Implemented player movement and tile interaction logic",
      "Handled keyboard and mouse events for real-time gameplay",
    ],
  },
  {
    title: "Tricount-like – Expense Sharing Web Application",
    description:
      "Responsive web application inspired by Tricount, allowing users to manage shared expenses, participants, and balances with complex business rules and weighted expense distribution.",
    icon: Euro,
    stack: [
      "PHP",
      "Javascript",
      "HTML",
      "Bootstrap",
      "MySQL",
      "MVC Architecture",
    ],
    features: [
      "User registration and authentication",
      "Expense management with support for multiple participants",
      "Balance calculation with weighted expense distribution",
      "Responsive design for mobile and desktop",
    ],
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`max-w-4xl mx-auto px-6 py-20 border-t border-emerald-200 dark:border-emerald-800 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-16 text-slate-900 dark:text-slate-50">
        Recent Projects
      </h2>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 via-teal-600 to-emerald-600"></div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, i) => {
            const Icon = project.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} gap-8 items-center animate-fadeIn`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="p-8 border border-emerald-200 dark:border-emerald-800 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-teal-500/20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex-shrink-0 group-hover:animate-pulse transition-transform group-hover:scale-110 flex items-center justify-center">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <ul className="space-y-2">
                        {project.features.map((feature, j) => (
                          <li
                            key={j}
                            className="text-slate-600 dark:text-slate-300 flex items-center gap-2"
                          >
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                              ✓
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full border-4 border-white dark:border-slate-950 shadow-lg"></div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            );
          })}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
