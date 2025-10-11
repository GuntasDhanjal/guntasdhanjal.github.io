import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const badges = ["AI ✦ Health", "Medical Imaging", "Open Science"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="glass-card px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="w-3 h-3 mr-1 inline-block" />
                {badge}
              </Badge>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Guntas Dhanjal</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build AI and medical solutions for{" "}
            <span className="text-accent font-semibold">global health equity</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-2xl group ai-glow"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-card px-8 py-6 text-lg rounded-2xl hover:bg-accent/10 border-accent/30"
            >
              <Link to="/writing">Read Writing</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-accent/50 mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
