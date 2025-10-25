import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
          Education & Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Academic background and professional qualifications
        </p>

        <div className="space-y-6">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Bachelor of Science (BSc Hons) in Computer Science
                    </h3>
                    <p className="text-lg text-primary font-medium">University of Essex, UK</p>
                    <p className="text-muted-foreground">September 2019 – July 2022</p>
                  </div>
                  <Badge variant="default" className="text-lg px-4 py-2">
                    First Class Honours
                  </Badge>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Placed in the Faculty of Science and Health Dean's List for academic years 2020, 2021, and 2022</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  IT Skills & Certifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>CCNA Routing and Switching: Introduction to Networks Certificate</span>
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>Switching, Routing and Wireless Essentials CCNAv7 Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="text-base px-4 py-2">
                    Greek (Native)
                  </Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">
                    English (Professional)
                  </Badge>
                  <Badge variant="outline" className="text-base px-4 py-2">
                    German (Advanced)
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
