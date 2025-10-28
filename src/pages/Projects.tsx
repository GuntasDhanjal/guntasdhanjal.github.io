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
  rank?: string;
  image?: string;
  link: string;
  updated?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 🧱 Static fallback
  const staticProjects: Project[] = [
    {
      id: "nurse-ai",
      title: "Nurse AI",
      platform: "GitHub",
      description:
        "iOS app providing AI-powered assistance for nurses — GPT-based summarization, FHIR data, and HealthKit integration.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a8/35/f0/a835f0b9-5c14-7bda-fc36-1de83b9fda7f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/nurse-ai/id6748453188",
    },
    {
      id: "dr-healthagent",
      title: "Dr HealthAgent",
      platform: "GitHub",
      description:
        "AI health companion app integrating unified patient records and proactive health insights.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a2/f2/43/a2f2432e-e28c-2a05-317f-3a0eb3f2d6c5/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/dr-healthagent/id6748384868",
    },
    {
      id: "school-taskflow",
      title: "School TaskFlow Task Manager",
      platform: "GitHub",
      description:
        "Task management app for students with scheduling, focus timers, and intelligent task insights.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b2/14/7b/b2147b20-7a4a-1c8e-06e2-03ac680c44b3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/school-taskflow-task-manager/id6740080563",
    },
    {
      id: "school-shark-tank",
      title: "School Shark Tank",
      platform: "GitHub",
      description:
        "Gamified entrepreneurship app that lets students pitch startup ideas and earn virtual investments.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2a/3a/ab/2a3aab47-780b-09d3-bfc7-b24880bbde95/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
      link: "https://apps.apple.com/us/app/school-shark-tank/id6744159123",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        // Fetch from Kaggle and GitHub in parallel
        const [kaggleRes, githubRes] = await Promise.allSettled([
          fetch("https://www.kaggle.com/api/v1/users/guntasdhanjal/kernels", {
            headers: { Accept: "application/json" },
          }),
          fetch("https://api.github.com/users/GuntasDhanjal/repos?sort=updated&per_page=10"),
        ]);

        // 🧠 Kaggle projects
        const kaggleProjects: Project[] =
          kaggleRes.status === "fulfilled" && kaggleRes.value.ok
            ? ((await kaggleRes.value.json()) || []).map((k: any) => ({
                id: `kaggle-${k.ref}`,
                title: k.title,
                platform: "Kaggle" as const,
                medal: k.currentMedal || undefined,
                rank: k.totalVotes ? `${k.totalVotes} votes` : undefined,
                description: k.subtitle || "Kaggle notebook or dataset project.",
                image:
                  k.thumbnailUrl ||
                  "https://storage.googleapis.com/kaggle-competitions/kaggle/50738/logos/thumb76_50738.png",
                link: `https://www.kaggle.com/${k.authorName}/code/${k.ref}`,
                updated: k.updated || k.creationTime,
              }))
            : [];

        // 🧩 GitHub projects
        const githubProjects: Project[] =
          githubRes.status === "fulfilled" && githubRes.value.ok
            ? ((await githubRes.value.json()) || []).map((g: any) => ({
                id: `github-${g.id}`,
                title: g.name,
                platform: "GitHub" as const,
                description: g.description || "Open-source project on GitHub.",
                image:
                  g.owner?.avatar_url ||
                  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                link: g.html_url,
                updated: g.updated_at,
              }))
            : [];

        // 🧮 Merge & sort by updated date
        const all = [...kaggleProjects, ...githubProjects];
        const sorted =
          all.length > 0
            ? all.sort(
                (a, b) => new Date(b.updated || 0).getTime() - new Date(a.updated || 0).getTime()
              )
            : staticProjects;

        setProjects(sorted);
      } catch (err) {
        console.error("Error loading projects", err);
        setError("Could not fetch live projects. Showing static list instead.");
        setProjects(staticProjects);
      }
    })();
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified view of Kaggle notebooks and GitHub code projects —
            blending data science, AI, and app development.
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
                  {proj.rank && <span>{proj.rank}</span>}
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
