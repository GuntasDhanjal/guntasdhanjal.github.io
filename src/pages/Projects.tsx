import { ProjectCard } from "@/components/ProjectCard";
import xrayImg from "@/assets/xray-project.jpg";
import researchImg from "@/assets/research.jpg";
import appImg from "@/assets/app-mockup.jpg";

const projectsData = [
  {
    id: "xray-slam",
    title: "Grand X-Ray Slam",
    role: "Organizer / Lead",
    description: "Chest X-ray disease classification challenge on Kaggle with inclusive design and accessible starter kits.",
    date: "2025",
    tags: ["medical imaging", "AI", "competition", "open dataset"],
    coverImage: xrayImg,
    ctaLabel: "View on Kaggle",
    ctaHref: "https://www.kaggle.com/competitions/grand-xray-slam-division-a",
  },
  {
    id: "ai-global-health",
    title: "AI for Global Health (Research)",
    role: "Author / Researcher",
    description: "'Harnessing Artificial Intelligence for Global Health Advancement' — exploring AI's role in equity and challenges.",
    date: "2025",
    tags: ["research", "AI ethics", "healthcare"],
    coverImage: researchImg,
    ctaLabel: "Read Paper",
    ctaHref: "https://www.scirp.org/journal/papercitationdetails?JournalID=2425&paperid=140456",
  },
  {
    id: "gold-health-app",
    title: "Gold Health Care",
    role: "Contributor / Designer",
    description: "Mobile app for healthcare staffing to receive assignments & set availability.",
    date: "2024",
    tags: ["mobile", "healthcare", "app"],
    coverImage: appImg,
    ctaLabel: "View on App Store",
    ctaHref: "https://apps.apple.com/us/app/gold-health-care/id1643128314",
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected projects across medical imaging, research, and community initiatives
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
