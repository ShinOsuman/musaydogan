"use client";

import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Vérifier si on est proche du bas de la page
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop + winHeight) / docHeight;

      // Afficher la flèche si on n'est pas au bas (avec 5% de marge)
      setIsVisible(scrollPercent < 0.95);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-lg opacity-75"></div>
        <ChevronDown
          size={48}
          className="relative text-emerald-600 dark:text-emerald-400 drop-shadow-lg font-bold"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}
