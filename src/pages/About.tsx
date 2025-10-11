import { Button } from "@/components/ui/button";
import { ExternalLink, Target, Rocket, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
            <p className="text-lg text-muted-foreground">
              Building the future of inclusive healthcare AI
            </p>
          </header>

          <div className="space-y-12">
            {/* Mission & Vision */}
            <section className="glass-card rounded-3xl p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Mission & Vision</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                I envision a world where AI systems in healthcare are accessible, ethical, and impactful — 
                not limited to major institutions but inclusive of under-resourced communities. By democratizing 
                medical AI through open competitions, research, and education, we can bridge the healthcare equity gap 
                and ensure that technological advancement benefits everyone, everywhere.
              </p>
            </section>

            {/* Background & Journey */}
            <section className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Background & Journey</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                I am a student and aspiring health tech entrepreneur passionate about the intersection of AI and global health. 
                My work spans authoring research, building open-source competitions on Kaggle, and leading community projects 
                that bridge technical innovation with real-world impact. I believe in the power of open science and collaborative 
                learning to solve the world's most pressing healthcare challenges.
              </p>
            </section>

            {/* Ventures */}
            <section className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Ventures</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card/80 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">Bag Healthcare</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Exploring digital tools to empower efficient, equitable care delivery
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="text-accent border-accent/30"
                    >
                      <a href="https://baghealthcare.com/" target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Community & Service */}
            <section className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Community & Service</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Beyond technology, I'm committed to community service and environmental stewardship. 
                I co-founded youth nonprofit initiatives focused on health education and led an Eagle Scout 
                environmental restoration project. These experiences have shaped my understanding that meaningful 
                change requires both innovation and grassroots community engagement.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
