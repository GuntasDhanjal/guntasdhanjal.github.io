// src/pages/Apps.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

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
};

const APP_IDS = [
  6748453188, // Nurse AI
  6748384868, // Dr HealthAgent
  6740080563, // School Taskflow
  6744159123, // School Shark Tank
];
const LOOKUP_URL = `https://itunes.apple.com/lookup?id=${APP_IDS.join(",")}&entity=software`;

export default function Apps() {
  const [apps, setApps] = useState<AppleApp[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(LOOKUP_URL, { cache: "no-store" });
        if (!res.ok) throw new Error(`Apple lookup failed: ${res.status}`);
        const data = await res.json();
        const items: AppleApp[] = (data.results || [])
          .filter((r: any) => r.wrapperType === "software")
          .map((r: any) => ({
            trackId: r.trackId,
            trackName: r.trackName,
            description: r.description || r.longDescription,
            formattedPrice: r.formattedPrice,
            price: r.price,
            averageUserRating: r.averageUserRating,
            userRatingCount: r.userRatingCount,
            primaryGenreName: r.primaryGenreName,
            sellerName: r.sellerName,
            artworkUrl100: r.artworkUrl100,
            artworkUrl512: r.artworkUrl512,
            trackViewUrl: r.trackViewUrl,
          }))
          .sort((a, b) => APP_IDS.indexOf(a.trackId) - APP_IDS.indexOf(b.trackId));

        setApps(items);
      } catch (e: any) {
        setError(e?.message || "Failed to load apps.");
      }
    })();
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Apps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore iOS apps by Blue and Gold Healthcare Inc.
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
          {apps?.map((app) => (
            <Card key={app.trackId} className="hover:shadow-lg transition-shadow">
              <Link to={`/apps/${app.trackId}`} className="flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  {app.artworkUrl512 ? (
                    <img
                      src={app.artworkUrl512}
                      alt={`${app.trackName} icon`}
                      className="w-16 h-16 rounded-xl object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-muted rounded-xl" />
                  )}
                  <div className="min-w-0">
                    <CardTitle className="truncate">{app.trackName}</CardTitle>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      {app.primaryGenreName && <Badge variant="secondary">{app.primaryGenreName}</Badge>}
                      {typeof app.averageUserRating === "number" && app.userRatingCount ? (
                        <span>
                          {app.averageUserRating.toFixed(1)} ★ ({app.userRatingCount.toLocaleString()})
                        </span>
                      ) : null}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground line-clamp-4">
                    {app.description || "No description available."}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <Button variant="secondary" asChild>
                      <Link to={`/apps/${app.trackId}`}>Details</Link>
                    </Button>
                    <Button asChild>
                      <a href={app.trackViewUrl} target="_blank" rel="noopener noreferrer">
                        App Store <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10 text-center">
          Data fetched from Apple’s iTunes Search API.
        </p>
      </div>
    </main>
  );
}
