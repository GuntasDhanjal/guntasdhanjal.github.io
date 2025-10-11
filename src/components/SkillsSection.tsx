import { 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn,
  SiKeras,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiFastapi,
  SiReact,
  SiTypescript,
  SiKaggle
} from "react-icons/si";
import { Brain, Database, BarChart3, Stethoscope } from "lucide-react";

const skills = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
  { icon: SiKeras, name: "Keras", color: "#D00000" },
  { icon: Brain, name: "Deep Learning", color: "#22D3EE" },
  { icon: SiOpencv, name: "OpenCV", color: "#5C3EE8" },
  { icon: SiNumpy, name: "NumPy", color: "#013243" },
  { icon: SiPandas, name: "Pandas", color: "#150458" },
  { icon: BarChart3, name: "Data Analysis", color: "#22D3EE" },
  { icon: Stethoscope, name: "Medical AI", color: "#7C3AED" },
  { icon: SiKaggle, name: "Kaggle", color: "#20BEFF" },
];

const tools = [
  { icon: SiJupyter, name: "Jupyter", color: "#F37626" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: Database, name: "Databases", color: "#22D3EE" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 neural-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Professional Skillset */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Professional <span className="text-accent">Skillset</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 
                           hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <skill.icon 
                    className="w-16 h-16 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-center text-foreground/80">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-accent">Tools</span> I Use
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 
                           hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <tool.icon 
                    className="w-16 h-16 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: tool.color }}
                  />
                  <span className="text-sm font-medium text-center text-foreground/80">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
