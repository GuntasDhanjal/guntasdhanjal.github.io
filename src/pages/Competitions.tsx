import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Competitions() {
  const hosted = [
    {
      id: "xray-a",
      title: "Grand X-Ray Slam: Division A",
      role: "Organizer / Host",
      description:
        "A global healthcare AI competition focused on improving chest X-ray interpretation. Designed datasets, evaluation metrics, and participant resources for 1,000+ teams.",
      prize: "$4,000",
      participants: "1,000+",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/48231/logos/thumb76_48231.png",
      link: "https://www.kaggle.com/competitions/grand-xray-slam-division-a",
    },
    {
      id: "xray-b",
      title: "Grand X-Ray Slam: Division B",
      role: "Organizer / Host",
      description:
        "Second division of the Grand X-Ray Slam series, created for beginners to experiment with medical imaging AI. Featured simplified datasets and open-ended exploration tracks.",
      prize: "$4,000",
      participants: "800+",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/48232/logos/thumb76_48232.png",
      link: "https://www.kaggle.com/competitions/grand-xray-slam-division-b",
    },
  ];

  const participated = [
    {
      id: "rsna",
      title: "RSNA Intracranial Aneurysm Detection",
      category: "Featured",
      rank: "264 / 1147",
      description:
        "Developed 3D CNN models to detect intracranial aneurysms from head CT scans, focusing on data preprocessing and ensemble learning for higher sensitivity.",
      participants: "1,147",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/52368/logos/thumb76_52368.png",
      link: "https://www.kaggle.com/competitions/rsna-intracranial-aneurysm-detection",
    },
    {
      id: "hms",
      title: "HMS – Harmful Brain Activity Classification",
      category: "Featured",
      rank: "318 / 962",
      description:
        "Built deep learning models using EEG data to classify seizure-like brain activity. Experimented with 1D CNNs and temporal transformers for signal analysis.",
      participants: "962",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/52416/logos/thumb76_52416.png",
      link: "https://www.kaggle.com/competitions/hms-harmful-brain-activity-classification",
    },
    {
      id: "play9",
      title: "Playground Series S5E9",
      category: "Playground",
      rank: "118 / 872",
      description:
        "Explored structured data modeling with gradient boosting and feature engineering to optimize accuracy across multiple folds.",
      participants: "872",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/54457/logos/thumb76_54457.png",
      link: "https://www.kaggle.com/competitions/playground-series-s5e9",
    },
    {
      id: "play8",
      title: "Playground Series S5E8",
      category: "Playground",
      rank: "142 / 901",
      description:
        "Implemented tree-based ensemble models to predict bank term deposit subscriptions, tuning regularization for better generalization.",
      participants: "901",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/54175/logos/thumb76_54175.png",
      link: "https://www.kaggle.com/competitions/playground-series-s5e8",
    },
    {
      id: "fake-or-real",
      title: "Fake or Real: The Impostor Hunt",
      category: "Community",
      rank: "221 / 611",
      description:
        "Built a BERT-based NLP classifier to detect impostor text samples. Focused on tokenization, fine-tuning, and adversarial data augmentation.",
      participants: "611",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/51732/logos/thumb76_51732.png",
      link: "https://www.kaggle.com/competitions/fake-or-real-the-impostor-hunt",
    },
    {
      id: "trojan-horse",
      title: "Trojan Horse Hunt in Space",
      category: "Community",
      rank: "183 / 564",
      description:
        "Applied time-series forecasting to identify hidden signal anomalies in astronomical datasets. Used FFT-based filtering and feature reduction techniques.",
      participants: "564",
      image:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/53214/logos/thumb76_53214.png",
      link: "https://www.kaggle.com/competitions/trojan-horse-hunt-in-space",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 neural-pattern">
      <div className="container mx-auto px-4">
        {/* Hosted Competitions */}
        <section className="mb-16">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">🏆 Hosted Competitions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Competitions I’ve organized to advance open, ethical AI in medical imaging and healthcare innovation.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosted.map((comp) => (
              <Card
                key={comp.id}
                className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                <div className="relative h-40 bg-muted overflow-hidden">
                  {comp.image ? (
                    <img
                      src={comp.image}
                      alt={`${comp.title} logo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-semibold mb-1">
                    {comp.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{comp.role}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-5">
                    {comp.description}
                  </p>
                  <div className="text-sm text-muted-foreground mb-4 space-y-1">
                    <p>Prize: {comp.prize}</p>
                    <p>Participants: {comp.participants}</p>
                  </div>
                  <Button asChild>
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Kaggle <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Participated Competitions */}
        <section>
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              ⚔️ Participated Competitions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kaggle competitions I’ve contributed to, applying deep learning, data analysis, and AI ethics across diverse domains.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participated.map((comp) => (
              <Card
                key={comp.id}
                className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                <div className="relative h-40 bg-muted overflow-hidden">
                  {comp.image ? (
                    <img
                      src={comp.image}
                      alt={`${comp.title} logo`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500" />
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-semibold mb-1 flex items-center flex-wrap gap-2">
                    {comp.title}
                    <Badge variant="secondary">{comp.category}</Badge>
                    <span className="text-sm text-muted-foreground">🏅 {comp.rank}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-5">
                    {comp.description}
                  </p>
                  <div className="text-sm text-muted-foreground mb-4">
                    Participants: {comp.participants}
                  </div>
                  <Button asChild>
                    <a
                      href={comp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Kaggle <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-sm text-muted-foreground">
          See more on{" "}
          <a
            href="https://www.kaggle.com/guntasdhanjal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Kaggle → Guntas Dhanjal
          </a>
        </footer>
      </div>
    </main>
  );
}
