// src/pages/AppDetails.tsx
import { useEffect, useMemo, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, ArrowLeft } from "lucide-react";

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
  contentAdvisoryRating?: string;
  advisories?: string[];
  screenshotUrls?: string[];
  ipadScreenshotUrls?: string[];
};

const KNOWN_APPS = new Set([
  6748453188, // Nurse AI
  6748384868, // Dr HealthAgent
  6740080563, // School Taskflow Task Manager
  6744159123, // School Shark Tank
]);

function deriveTags(app: AppleApp): string[] {
  const tags = new Set<string>();
  if (app.primaryGenreName) tags.add(app.primaryGenreName);
  if (app.contentAdvisoryRating) tags.add(app.contentAdvisoryRating);
  (app.advisories || []).forEach((a) => {
    const short = a.replace(/Infrequent\/Mild\s+|Frequent\/Intense\s+/gi, "");
    if (short.length <= 28) tags.add(short);
  });
  return Array.from(tags).slice(0, 4);
}

export default function AppDetails() {
  const { id } = useParams<{ id: string }>();
  const trackId = useMemo(() => Number(id), [id]);

  const [app, setApp] = useState<AppleApp | null>(null);
  const [error, setError] = useState<string | null>(null);

  const isKnown = KNOWN_APPS.has(trackId);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (!trackId || Number.isNaN(trackId)) {
          throw new Error("Invalid app ID.");
        }
        const res = await fetch(`https://itunes.apple.com/lookup?id=${trackId}`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Apple lookup failed: ${res.status}`);
        const data = await res.json();
        const r = (data.results || []).find((x: any) => x.wrapperType === "software");
        if (!r) throw new Error("App not found on the App Store.");

        const mapped: AppleApp = {
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
          screenshotUrls: r.screenshotUrls,
          ipadScreenshotUrls: r.ipadScreenshotUrls,
        };

        if (!cancelled) setApp(mapped);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load app details.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [trackId]);

  const img = app?.artworkUrl512 || app?.artworkUrl100;
  const price =
    app?.formattedPrice ??
    (typeof app?.price === "number" ? (app.price === 0 ? "Free" : `$${app.price.toFixed(2)}`) : undefined);
  const tags = app ? deriveTags(app) : [];

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <RouterLink to="/apps">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Apps
            </RouterLink>
          </Button>
        </div>

        {!app && !error && (
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Skeleton className="w-16 h-16 rounded-xl" />
              <div className="flex-1">
                <Skeleton className="h-6 w-56 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
              <Skeleton className="h-4 w-4/6 mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="w-full pb-[56%] rounded-lg" />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {error && (
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-destructive">Error</CardTitle>
            </CardHeader>
            <CardContent>{error}</CardContent>
          </Card>
        )}

        {app && (
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-4">
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

                <div className="mt-3">
                  <Button asChild>
                    <a href={app.trackViewUrl} target="_blank" rel="noopener noreferrer">
                      View on the App Store <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {app.description ? (
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-6">
                  {app.description}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground italic">No description provided.</p>
              )}

              <h2 className="text-xl font-semibold mt-8 mb-3">Screenshots</h2>
              {app.screenshotUrls && app.screenshotUrls.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {app.screenshotUrls.map((url, idx) => (
                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={url}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full rounded-lg border object-cover"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No iPhone screenshots available.</p>
              )}

              {app.ipadScreenshotUrls && app.ipadScreenshotUrls.length > 0 && (
                <>
                  <h3 className="text-lg font-medium mt-8 mb-3">iPad Screenshots</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {app.ipadScreenshotUrls.map((url, idx) => (
                      <a key={`ipad-${idx}`} href={url} target="_blank" rel="noopener noreferrer" className="block">
                        <img
                          src={url}
                          alt={`iPad Screenshot ${idx + 1}`}
                          className="w-full rounded-lg border object-cover"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {!isKnown && (
          <p className="text-xs text-muted-foreground mt-4">
            Tip: This page is intended for known apps. If you reached it via a direct URL, make sure the ID is valid.
          </p>
        )}
      </div>
    </main>
  );
}
