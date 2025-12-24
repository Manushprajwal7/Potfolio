"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Resume } from "@/components/resume";

const App = () => {
      
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default App;
