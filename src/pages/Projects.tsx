import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type Project = {
  id: string;
  title: string;
  description: string;
  platform: "Kaggle" | "GitHub";
  medal?: string;
  image?: string;
  link: string;
  updated?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 🧱 Static Kaggle projects
  const kaggleProjects: Project[] = [
    {
      id: "grand-xray-slam",
      title: "Grand X-Ray Slam: AI Imaging Competition",
      description:
        "Organized a global healthcare AI competition with 1,000+ participants. Designed datasets, scoring pipelines, and educational resources.",
      medal: "Organizer / Lead",
      platform: "Kaggle",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/48231/logos/thumb76_48231.png",
      link: "https://www.kaggle.com/competitions/grand-xray-slam-division-a",
    },
    {
      id: "ai-for-global-health",
      title: "AI for Global Health Equity",
      description:
        "Published peer-reviewed research analyzing the ethical and social implications of AI in global healthcare systems.",
      medal: "Gold Notebook",
      platform: "Kaggle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Artificial_intelligence_in_healthcare_logo.png",
      link: "https://www.kaggle.com/guntasdhanjal/code",
    },
    {
      id: "sdoh-dashboard",
      title: "SDOH Environmental Dashboard",
      description:
        "Built an interactive dashboard linking environmental factors to Social Determinants of Health using Python and Plotly.",
      platform: "Kaggle",
      image:
        "https://storage.googleapis.com/kaggle-datasets-images/1029124/1731580/f15c1b75f14f4c812ea80b7a3ce23805/dataset-card.jpg",
      link: "https://www.kaggle.com/guntasdhanjal",
    },
  ];

  // 🧩 Live GitHub fetch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/GuntasDhanjal/repos?sort=updated&per_page=10"
        );
        if (!res.ok) throw new Error("GitHub fetch failed");
        const data = await res.json();

        const githubProjects: Project[] = data.map((g: any) => ({
          id: `github-${g.id}`,
          title: g.name,
          platform: "GitHub" as const,
          description: g.description || "Open-source project on GitHub.",
          image:
            g.owner?.avatar_url ||
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          link: g.html_url,
          updated: g.updated_at,
        }));

        // 🧮 Combine Kaggle + GitHub, sort by date if available
        const allProjects = [
          ...kaggleProjects,
          ...githubProjects.sort(
            (a, b) =>
              new Date(b.updated || 0).getTime() - new Date(a.updated || 0).getTime()
          ),
        ];
        setProjects(allProjects);
      } catch (err) {
        console.error("Project fetch failed:", err);
        setError("Could not fetch GitHub data. Showing Kaggle only.");
        setProjects(kaggleProjects);
      }
    })();
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mixed portfolio of Kaggle data science notebooks and GitHub software projects.
          </p>
        </header>

        {!projects && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-xl" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-40 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-4/6" />
                  <div className="mt-4">
                    <Skeleton className="h-10 w-36 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((proj) => (
            <Card
              key={proj.id}
              className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative h-40 bg-muted overflow-hidden">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={`${proj.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold mb-1">{proj.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{proj.platform}</Badge>
                  {proj.medal && (
                    <Badge className="bg-yellow-200 text-yellow-800">{proj.medal}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  {proj.description}
                </p>
                <Button asChild>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {error && (
          <p className="text-center text-sm text-muted-foreground mt-10">{error}</p>
        )}
      </div>
    </main>
  );
}
