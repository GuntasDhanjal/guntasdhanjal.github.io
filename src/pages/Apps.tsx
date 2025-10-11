import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Brain, Stethoscope, Lightbulb, CheckSquare } from "lucide-react";
import goldHealthImg from "@/assets/gold-health-care.jpg";
import nurseAiImg from "@/assets/nurse-ai.jpg";
import drHealthAgentImg from "@/assets/dr-healthagent.jpg";
import schoolSharkTankImg from "@/assets/school-shark-tank.jpg";
import schoolTaskFlowImg from "@/assets/school-taskflow.jpg";

const appsData = [
  {
    id: "gold-health",
    name: "Gold Health Care",
    category: "Medical",
    icon: Stethoscope,
    status: "Live",
    description: "Receive assignment offers, manage availability, and streamline healthcare staffing workflows. Designed for healthcare professionals to efficiently coordinate their schedules and assignments.",
    features: [
      { label: "Assignment Management", desc: "View and accept healthcare assignments" },
      { label: "Availability", desc: "Set and update your work schedule" },
      { label: "Staffing", desc: "Streamline healthcare workforce coordination" }
    ],
    storeLink: "https://apps.apple.com/us/app/gold-health-care/id1643128314",
    image: goldHealthImg,
  },
  {
    id: "nurse-ai",
    name: "Nurse AI",
    category: "Medical",
    icon: Brain,
    status: "Live",
    description: "AI-powered nursing support and assistance for healthcare professionals. Provides intelligent decision support to aid in patient care and clinical workflows.",
    features: [
      { label: "AI Assistance", desc: "Intelligent nursing support powered by AI" },
      { label: "Decision Support", desc: "Clinical guidance for patient care" },
      { label: "Healthcare Tools", desc: "Essential tools for nursing professionals" }
    ],
    storeLink: "https://apps.apple.com/us/app/nurse-ai/id6479501538",
    image: nurseAiImg,
  },
  {
    id: "dr-healthagent",
    name: "Dr HealthAgent",
    category: "Medical",
    icon: Stethoscope,
    status: "Live",
    description: "Digital health assistant providing medical guidance and healthcare information through AI-driven tools. Your intelligent companion for health management.",
    features: [
      { label: "Health Guidance", desc: "AI-powered medical information" },
      { label: "Smart Assistant", desc: "Intelligent health companion" },
      { label: "Medical Tools", desc: "Comprehensive healthcare resources" }
    ],
    storeLink: "https://apps.apple.com/us/app/dr-healthagent/id6479501295",
    image: drHealthAgentImg,
  },
  {
    id: "school-shark-tank",
    name: "School Shark Tank",
    category: "Education",
    icon: Lightbulb,
    status: "Live",
    description: "Gamified entrepreneurship education for students. Simulate pitching and innovating in a 'Shark Tank'-style environment to develop business skills.",
    features: [
      { label: "Entrepreneurship", desc: "Learn business and innovation skills" },
      { label: "Pitch Simulation", desc: "Practice presenting ideas" },
      { label: "Gamified Learning", desc: "Engaging educational experience" }
    ],
    storeLink: "https://apps.apple.com/us/app/school-shark-tank/id6479498594",
    image: schoolSharkTankImg,
  },
  {
    id: "school-taskflow",
    name: "School TaskFlow",
    category: "Productivity",
    icon: CheckSquare,
    status: "Live",
    description: "Task management app designed for students. Organize schoolwork, manage schedules, and boost productivity with intelligent task tracking.",
    features: [
      { label: "Task Management", desc: "Organize and track schoolwork" },
      { label: "Schedule Planning", desc: "Manage your academic calendar" },
      { label: "Productivity", desc: "Boost efficiency and focus" }
    ],
    storeLink: "https://apps.apple.com/us/app/school-taskflow-task-manager/id6479498915",
    image: schoolTaskFlowImg,
  },
];

const Apps = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthcare Apps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Published applications under Blue and Gold Healthcare Inc
          </p>
          <Button
            asChild
            variant="outline"
            className="glass-card"
          >
            <a
              href="https://apps.apple.com/us/developer/blue-and-gold-healthcare-inc/id1787426384"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Developer Profile
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </header>

        <div className="max-w-6xl mx-auto space-y-12">
          {appsData.map((app, index) => (
            <article 
              key={app.id}
              className="glass-card rounded-3xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={app.image}
                    alt={`${app.name} interface`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <app.icon className="w-6 h-6 text-accent" />
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">{app.category}</Badge>
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                      {app.status}
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{app.name}</h2>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <p className="text-sm text-foreground/70">
                          <strong>{feature.label}:</strong> {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <a
                      href={app.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on App Store
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Apps;
