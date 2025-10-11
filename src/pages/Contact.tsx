import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send } from "lucide-react";
import { SiKaggle, SiMedium } from "react-icons/si";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    toast.success("Thanks — I'll get back to you soon!");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      label: "Kaggle",
      href: "https://www.kaggle.com/guntasdhanjal",
      icon: SiKaggle,
      color: "hover:text-[#20BEFF]",
    },
    {
      label: "Medium",
      href: "https://medium.com/@guntasdhanjal",
      icon: SiMedium,
      color: "hover:text-[#00AB6C]",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guntasdhanjal",
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on AI + healthcare projects or research
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass-card resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-3xl p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-2xl font-bold mb-6">Connect</h2>
                
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:youremail@example.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm">youremail@example.com</span>
                  </a>
                </div>

                <h3 className="font-semibold mb-4 text-foreground/80">Social Media</h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 text-foreground/80 transition-colors group ${link.color}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center group-hover:bg-card/80 transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <strong className="text-foreground">Open to:</strong> Research collaborations, 
                  healthcare AI projects, speaking engagements, and consulting opportunities 
                  focused on global health equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
