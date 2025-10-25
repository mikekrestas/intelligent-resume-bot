import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
  <Experience />
  <Projects />
  <Education />
      <Contact />
      <AIChat />
    </div>
  );
};

export default Index;
