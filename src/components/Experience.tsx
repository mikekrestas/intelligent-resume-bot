import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Sky, UK",
    period: "August 2025 - Present",
    current: true,
    highlights: [
      "Designing and developing backend services in Java with focus on scalability and performance",
      "Implemented health-check monitoring system using Kafka and Prometheus metrics",
      "Performing QA testing activities including regression testing and load validation",
      "Reviewing push/merge requests to ensure code quality across the team"
    ]
  },
  {
    title: "Technology Graduate - Associate Software Engineer",
    company: "Sky, UK",
    period: "September 2024 - August 2025",
    highlights: [
      "Developed test-driven backend microservices using Java Spring Boot",
      "Applied TDD with JUnit, integration testing, and Cucumber acceptance testing",
      "Collaborated on RESTful APIs design improving transaction processing speed",
      "Contributed to One-Touch-Switch project for Broadband team (Ofcom initiative)"
    ]
  },
  {
    title: "Technology Graduate - Data Analyst",
    company: "Sky, UK",
    period: "March 2024 - September 2024",
    highlights: [
      "Conducted in-depth SQL analyses in BigQuery (GCP)",
      "Built interactive Tableau dashboards for stakeholder insights",
      "Delivered actionable recommendations saving £264k annually for the business"
    ]
  },
  {
    title: "Technology Graduate - Software Developer/SRE",
    company: "Sky, UK",
    period: "September 2023 - March 2024",
    highlights: [
      "Delivered ML-driven observability solutions",
      "Designed Grafana dashboards with proactive alerts",
      "Contributed to front-end development using React JS"
    ]
  },
  {
    title: "Investment Banking and Asset Management Virtual Internship",
    company: "Bright Network, UK",
    period: "June 2022 – June 2022",
    current: false,
    highlights: [
      "Conducted an M&A analysis on potential low-cost carrier airlines of Eastern Europe for British Airways",
      "Peer reviewed other interns’ analyses and presentations"
    ]
  },
  {
    title: "Web Developer Internship",
    company: "Oktabit, Athens",
    period: "July 2021 - August 2021",
    highlights: [
      "Developed and optimised web applications",
      "Designed product management application automating workflows",
      "Demonstrated full-stack development practices"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My professional journey in software engineering
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary md:block hidden" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card md:ml-16 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 relative">
                  {/* Absolutely positioned Briefcase icon for timeline */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 -ml-32 bg-primary/10 rounded-full border-4 border-background">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 md:ml-8">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge 
                        variant={exp.current ? "default" : "secondary"}
                        className="flex items-center gap-1"
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground flex items-center gap-2">
                          <span className="text-primary">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
