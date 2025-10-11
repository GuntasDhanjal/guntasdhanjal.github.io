import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone } from "lucide-react";

type StoreApp = {
  id: number;
  name: string;
  description: string;
  image: string;
  storeLink: string;
  genre?: string;
};

const developerLookupUrl =
  "https://itunes.apple.com/lookup?id=1787426384&entity=software";

const Apps = () => {
  const [apps, setApps] = useState<StoreApp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchApps() {
      try {
        const res = await fetch(developerLookupUrl);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        const results: any[] = Array.isArray(data?.results) ? data.results : [];
        const mapped: StoreApp[] = results
          .filter((r) => r?.wrapperType === "software" || r?.kind === "software")
          .map((r) => ({
            id: r.trackId,
            name: r.trackName,
            description: r.description ?? "",
            image: r.artworkUrl512 ?? r.artworkUrl100 ?? r.artworkUrl60,
            storeLink: r.trackViewUrl,
            genre: r.primaryGenreName || (Array.isArray(r.genres) ? r.genres[0] : undefined),
          }));
        if (isMounted) setApps(mapped);
      } catch (e: any) {
        if (isMounted) setError(e?.message || "Failed to load apps");
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchApps();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthcare Apps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Published applications under Blue and Gold Healthcare Inc
          </p>
          <Button
            asChild
            variant="outline"
            className="glass-card"
          >
            <a
              href="https://apps.apple.com/us/developer/blue-and-gold-healthcare-inc/id1787426384"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Developer Profile
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </header>

        {error && (
          <div className="max-w-3xl mx-auto text-center text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="max-w-6xl mx-auto space-y-12">
          {(loading ? Array.from({ length: 4 }) : apps).map((app: any, index: number) => (
            <article 
              key={app?.id ?? index}
              className="glass-card rounded-3xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-muted">
                  {loading ? (
                    <div className="w-full h-full animate-pulse bg-foreground/10" />
                  ) : (
                    <img
                      src={app.image}
                      alt={`${app.name} icon`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Smartphone className="w-6 h-6 text-accent" />
                    <Badge variant="secondary">iOS</Badge>
                    {!loading && app?.genre && (
                      <Badge variant="secondary">{app.genre}</Badge>
                    )}
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                      Live
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{loading ? "" : app.name}</h2>

                  <p className="text-foreground/80 mb-6 leading-relaxed whitespace-pre-line">
                    {loading ? "" : app.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {loading ? (
                      <span>Loading...</span>
                    ) : (
                      <a
                        href={app.storeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      Download on App Store
                      <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Apps;
