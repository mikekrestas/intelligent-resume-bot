import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Star, Code2, TrendingUp } from "lucide-react";

const projects = [
  {
    icon: <Star className="w-7 h-7 text-primary" />,
    title: "Letterboxd-style Movie Recommender",
    description:
      "Built a Letterboxd-style web app with a custom ML movie recommendation system using PyTorch embeddings and semantic similarity.",
    tech: ["PyTorch", "React", "Python"]
  },
  {
    icon: <Code2 className="w-7 h-7 text-primary" />,
    title: "Map Pointer Detection & Segmentation",
    description:
      "Developed a solution to segment maps of image backgrounds, identify red pointer objects, and display their coordinates and bearing. (Numpy, Turtle, OpenCV)",
    tech: ["Numpy", "Turtle", "OpenCV"]
  },
  {
    icon: <Brain className="w-7 h-7 text-primary" />,
    title: "Kaggle House Prices Competition",
    description:
      "Participated in a Kaggle competition to predict house prices in Iowa. (XGBoost, Numpy, Pandas, Scikit-learn)",
    tech: ["XGBoost", "Numpy", "Pandas", "Scikit-learn"]
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-primary" />,
    title: "Stock Forecasting Web App (Final Year Project)",
    description:
      "Worked on a stock forecasting web application using Streamlit, trading data, and technical analysis indicators (MACD, RSI) to generate buy/sell signals for backtesting.",
    tech: ["Streamlit", "Python", "Pandas"]
  }
];

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-background">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-primary bg-clip-text text-transparent">
        Projects
      </h2>
      <p className="text-center text-muted-foreground mb-12 text-lg">
        Personal and university projects showcasing my technical skills
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in">
            <div className="flex items-start gap-4 mb-2">
              {proj.icon}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{proj.title}</h3>
                <p className="text-muted-foreground mb-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs px-3 py-1">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
