import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's connect and discuss opportunities
        </p>

        <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-3 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="mailto:michaelkrestas1@gmail.com">
                <Mail className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">michaelkrestas1@gmail.com</p>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-3 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="tel:+447510728153">
                <Phone className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+44 751 072 8153</p>
                </div>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 flex flex-col items-center gap-3 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/michael-krestas-748971159/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
