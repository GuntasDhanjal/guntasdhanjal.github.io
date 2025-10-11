import { HeroSection } from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SkillsSection from "@/components/SkillsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import xrayImg from "@/assets/xray-project.jpg";
import researchImg from "@/assets/research.jpg";
import communityImg from "@/assets/community.jpg";
import goldHealthImg from "@/assets/gold-health-care.jpg";
import nurseAiImg from "@/assets/nurse-ai.jpg";
import appMockupImg from "@/assets/app-mockup.jpg";

const highlights = [
  {
    title: "Grand X-Ray Slam",
    description: "A global Kaggle competition to democratize chest X-ray AI.",
    image: xrayImg,
    link: "/projects",
  },
  {
    title: "Health AI Research",
    description: "Published research on AI for global health advancement.",
    image: researchImg,
    link: "/writing",
  },
  {
    title: "Gold Health Care App",
    description: "Mobile app for healthcare staffing to receive assignments & set availability.",
    image: goldHealthImg,
    link: "/apps",
  },
  {
    title: "Nurse AI Application",
    description: "AI-powered nursing support and assistance for healthcare professionals.",
    image: nurseAiImg,
    link: "/apps",
  },
  {
    title: "Behind the Dataset",
    description: "Technical insights into crafting the X-Ray Slam dataset.",
    image: xrayImg,
    link: "/writing",
  },
  {
    title: "Nonprofit & Community Work",
    description: "Initiatives in health tech access and environmental service.",
    image: communityImg,
    link: "/about",
  },
];

const Home = () => {
  return (
    <main>
      <HeroSection />
      
      <IntroSection />
      
      <SkillsSection />

      {/* Highlights Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging AI innovation with real-world healthcare impact
            </p>
          </div>

          <div className="overflow-hidden pb-8">
            <div className="flex gap-6 animate-scroll-slow hover:pause-animation">
              {[...highlights, ...highlights].map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-[320px] md:w-[380px] flex-shrink-0"
                >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">{item.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-accent hover:text-accent/80 p-0 h-auto font-medium group/link"
                  >
                    <Link to={item.link} className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-12 border-y border-border/30 overflow-hidden">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 text-muted-foreground font-medium">
              <span>Computer Vision</span>
              <span>•</span>
              <span>Ethical AI</span>
              <span>•</span>
              <span>Healthcare Access</span>
              <span>•</span>
              <span>Open Datasets</span>
              <span>•</span>
              <span>Kaggle</span>
              <span>•</span>
              <span>Medical Imaging</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
