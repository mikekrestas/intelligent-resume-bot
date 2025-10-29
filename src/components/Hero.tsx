import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            MICHAIL KRESTAS
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-4">
            Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Highly motivated software engineer with experience in designing and delivering reliable software solutions. 
            Strong foundation in Java and backend development using Spring Boot.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="#experience" className="flex items-center gap-2">
                View Experience
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://www.linkedin.com/in/michael-krestas-748971159/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/mikekrestas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:michaelkrestas1@gmail.com"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="tel:+447510728153"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
