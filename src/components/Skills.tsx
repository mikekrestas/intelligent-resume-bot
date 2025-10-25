import { Card } from "@/components/ui/card";
import { Code, Database, GitBranch, Cloud, TestTube, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Software Development",
    items: ["Java & Spring Boot", "React & TypeScript", "Test-Driven Development", "Full-Stack Development"]
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    items: ["Git, GitLab, GitHub", "Jenkins & Docker", "Maven Build Automation", "Agile Methodologies"]
  },
  {
    icon: Database,
    title: "Data Management",
    items: ["SQL & Oracle DB", "BigQuery (GCP)", "Tableau Dashboards", "E2E Testing"]
  },
  {
    icon: TestTube,
    title: "Backend Expertise",
    items: ["Microservices Architecture", "RESTful APIs", "JMeter Load Testing", "Circuit Breaker Pattern"]
  },
  {
    icon: Cloud,
    title: "Cloud & Monitoring",
    items: ["Cloud-based Solutions", "Kafka & Prometheus", "Grafana Dashboards", "ML-driven Observability"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Agile Team Collaboration", "Code Reviews", "Problem Solving", "Meeting Deadlines"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
          Key Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and expertise I bring to every project
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {skill.title}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
