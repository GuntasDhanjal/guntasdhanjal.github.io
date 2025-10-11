import { Heart, Linkedin } from "lucide-react";
import { SiKaggle, SiMedium } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Kaggle",
      href: "https://www.kaggle.com/guntasdhanjal",
      icon: SiKaggle,
    },
    {
      label: "Medium",
      href: "https://medium.com/@guntasdhanjal",
      icon: SiMedium,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guntasdhanjal",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Guntas Dhanjal. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for health equity
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/10"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a
              href="https://baghealthcare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Bag Healthcare
            </a>
            <span>•</span>
            <a
              href="https://apps.apple.com/us/developer/blue-and-gold-healthcare-inc/id1787426384"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              App Store Developer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
