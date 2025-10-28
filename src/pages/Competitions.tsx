// src/pages/Competitions.tsx
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function Competitions() {
  const competitions = [
    {
      name: "Grand X-Ray Slam (Organizer)",
      rank: "Hosted 1000+ participants globally",
      link: "https://www.kaggle.com/competitions",
      description:
        "Designed healthcare AI challenges using real diagnostic data. Created datasets, scoring pipeline, and mentorship program.",
    },
    {
      name: "Wharton Data Science Competition",
      rank: "Top 5% out of 500+ teams",
      link: "https://globalyouth.wharton.upenn.edu/data-science-competition/",
      description:
        "Analyzed real-world business datasets using regression and ML to generate actionable insights.",
    },
    {
      name: "Blue Ocean Pitch Competition",
      rank: "Global Finalist",
      link: "https://blueoceancompetition.org/",
      description:
        "Pitched AI-driven healthcare platform; developed complete business model, valuation, and go-to-market plan.",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Competitions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of global competitions, rankings, and learning outcomes.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp) => (
            <Card key={comp.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{comp.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{comp.rank}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{comp.description}</p>
                <a
                  href={comp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View Competition →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
