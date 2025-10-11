import { ArticleCard } from "@/components/ArticleCard";

const articles = [
  {
    id: "grand-xray-slam-article",
    title: "The Grand X-Ray Slam: Democratizing Medical AI",
    date: "2025-08-22",
    summary: "How the competition makes medical AI accessible across the globe through inclusive design and educational resources.",
    link: "https://medium.com/grand-x-ray-slam-on-kaggle/the-grand-x-ray-slam-democratizing-medical-ai-through-inclusive-competition-design-3c775109733a",
  },
  {
    id: "behind-dataset",
    title: "Behind the Scenes: Crafting the X-Ray Slam Dataset",
    date: "2025-08-21",
    summary: "Technical and methodological considerations in constructing a balanced, representative chest X-ray dataset.",
    link: "https://medium.com/@guntasdhanjal",
  },
  {
    id: "harnessing-ai-global-health",
    title: "Harnessing Artificial Intelligence for Global Health Advancement",
    date: "2025-01-01",
    summary: "A research piece exploring AI's transformative role in global health, addressing equity challenges and opportunities.",
    link: "https://www.scirp.org/journal/papercitationdetails?JournalID=2425&paperid=140456",
  },
];

const Writing = () => {
  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Writing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research papers, articles, and insights on AI, healthcare, and equity
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Writing;
