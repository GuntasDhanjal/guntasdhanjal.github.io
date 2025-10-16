// src/pages/Apps.tsx
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

/** === Apple iTunes Lookup ===
 * We query ONLY the four apps requested via their IDs.
 * Apple API docs: https://itunes.apple.com/lookup?id=ID[,ID2,...]
 */
const APP_IDS = [
  6748453188, // Nurse AI
  6748384868, // Dr HealthAgent
  6740080563, // School Taskflow Task Manager
  6744159123, // School Shark Tank
];

const LOOKUP_URL = `https://itunes.apple.com/lookup?id=${APP_IDS.join(",")}&entity=software`;

type AppleApp = {
  trackId: number;
  trackName: string;
  description?: string;
  formattedPrice?: string;
  price?: number;
  averageUserRating?: number;
  userRatingCount?: number;
  primaryGenreName?: string;
  sellerName?: string;
  artworkUrl100?: string;
  artworkUrl512?: string;
  trackViewUrl: string;
  contentAdvisoryRating?: string; // e.g., "17+"
  advisories?: string[];          // e.g., ["Infrequent/Mild Medical/Treatment Information"]
};

function deriveTags(app: AppleApp): string[] {
  const tags = new Set<string>();
  if (app.primaryGenreName) tags.add(app.primaryGenreName);
  if (app.contentAdvisoryRating) tags.add(app.contentAdvisoryRating);
  (app.advisories || []).forEach((a) => {
    // pick a couple of short advisories as tags
    const short = a.replace(/Infrequent\/Mild\s+/i, "").replace(/Frequent\/Intense\s+/i, "");
    if (short.length <= 28) tags.add(short);
  });
  return Array.from(tags).slice(0, 3);
}

function AppCard({ app }: { app: AppleApp }) {
  const img = app.artworkUrl512 || app.artworkUrl100;
  const price =
    app.formattedPrice ??
    (typeof app.price === "number" ? (app.price === 0 ? "Free" : `$${app.price.toFixed(2)}`) : undefined);
  const tags = deriveTags(app);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        {img ? (
          <img
            src={img}
            alt={`${app.trackName} icon`}
            className="w-16 h-16 rounded-xl object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-16 h-16 rounded-xl bg-muted" />
        )}
        <div className="min-w-0">
          <CardTitle className="truncate">{app.trackName}</CardTitle>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
            {typeof app.averageUserRating === "number" && app.userRatingCount ? (
              <span>
                {app.averageUserRating.toFixed(1)} ★ ({app.userRatingCount.toLocaleString()})
              </span>
            ) : null}
            {price && <span>• {price}</span>}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {app.description ? (
          <p className="text-sm text-muted-foreground line-clamp-5 whitespace-pre-line">
            {app.description}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground italic">No description available.</p>
        )}

        <div className="mt-4">
          <Button asChild>
            <a href={app.trackViewUrl} target="_blank" rel="noopener noreferrer">
              View on the App Store <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Apps() {
  const [apps, setApps] = useState<AppleApp[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Minimal seed so the page isn’t blank before fetch returns
  const seed = useMemo<AppleApp[]>(
    () => [
      {
        trackId: 6748453188,
        trackName: "Nurse AI",
        description: "AI-powered nursing assistant for documentation and patient communication.",
        primaryGenreName: "Medical",
        trackViewUrl: "https://apps.apple.com/us/app/nurse-ai/id6748453188",
      } as AppleApp,
      {
        trackId: 6748384868,
        trackName: "Dr HealthAgent",
        description: "Your AI health companion for unified records and proactive care.",
        primaryGenreName: "Medical",
        trackViewUrl: "https://apps.apple.com/us/app/dr-healthagent/id6748384868",
      } as AppleApp,
      {
        trackId: 6740080563,
        trackName: "School Taskflow Task Manager",
        description: "Plan school work with Pomodoro timers, focus blocks, and simple task flows.",
        primaryGenreName: "Productivity",
        trackViewUrl: "https://apps.apple.com/us/app/school-taskflow-task-manager/id6740080563",
      } as AppleApp,
      {
        trackId: 6744159123,
        trackName: "School Shark Tank",
        description: "Run student pitch competitions with live voting and simple event tools.",
        primaryGenreName: "Education",
        trackViewUrl: "https://apps.apple.com/us/app/school-shark-tank/id6744159123",
      } as AppleApp,
    ],
    []
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(LOOKUP_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`Apple lookup failed: ${res.status}`);
        const data = await res.json();

        // Apple returns the four software items; map only the fields we use.
        const items: AppleApp[] = (data.results || [])
          .filter((r: any) => r.wrapperType === "software")
          .map((r: any) => ({
            trackId: r.trackId,
            trackName: r.trackName,
            description: r.description || r.longDescription || r.shortDescription,
            formattedPrice: r.formattedPrice,
            price: r.price,
            averageUserRating: r.averageUserRating,
            userRatingCount: r.userRatingCount,
            primaryGenreName: r.primaryGenreName,
            sellerName: r.sellerName,
            artworkUrl100: r.artworkUrl100,
            artworkUrl512: r.artworkUrl512,
            trackViewUrl: r.trackViewUrl,
            contentAdvisoryRating: r.contentAdvisoryRating,
            advisories: r.advisories,
          }))
          // Ensure order matches APP_IDS (optional, just for consistency)
          .sort((a, b) => APP_IDS.indexOf(a.trackId) - APP_IDS.indexOf(b.trackId));

        if (!cancelled) setApps(items);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load apps.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const list = apps && apps.length > 0 ? apps : seed;

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Apps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            iOS apps by Blue and Gold Healthcare Inc.
          </p>
        </header>

        {error && (
          <div className="max-w-3xl mx-auto mb-8 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-destructive">
            {error}
          </div>
        )}

        {!apps && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={`skeleton-${i}`}>
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
          {list.map((app) => (
            <AppCard key={app.trackId} app={app} />
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10 text-center">
          Data fetched from Apple’s iTunes Search API at runtime. Keywords are not exposed by the public API; tags are derived from genre/advisories.
        </p>
      </div>
    </main>
  );
}
