import guntasPhoto from "@/assets/guntas.jpg";

const IntroSection = () => {
  return (
    <section className="py-20 neural-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Know Who <span className="text-accent">I'M</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hi Everyone, I am <span className="text-accent font-semibold">Guntas Dhanjal</span>, 
                a passionate <span className="text-accent">Data Scientist</span> and{" "}
                <span className="text-accent">Machine Learning Engineer</span> dedicated to building 
                AI solutions for healthcare and global impact.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in medical imaging AI, deep learning, and creating accessible 
                healthcare technologies. My work bridges the gap between cutting-edge AI research 
                and real-world healthcare applications.
              </p>
              
              <div className="space-y-3 pt-4">
                <p className="text-foreground/80">Apart from coding, I love to:</p>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">▹</span>
                    Leading open science initiatives
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">▹</span>
                    Writing about AI in healthcare
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">▹</span>
                    Community service and mentorship
                  </li>
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-accent pl-4 py-2 italic text-foreground/80 mt-6">
                "Building AI systems that democratize healthcare access and empower communities worldwide."
              </blockquote>
            </div>
            
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src={guntasPhoto}
                  alt="Guntas Dhanjal"
                  className="relative rounded-3xl w-full max-w-md shadow-2xl border-2 border-accent/20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
