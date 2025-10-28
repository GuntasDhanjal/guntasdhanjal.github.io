// src/pages/Competitions.tsx
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/* -----------------------------
   UTF-8 safe SVG→Base64 helper
------------------------------ */
const svgToDataUrl = (svg: string) =>
  `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;

/* -----------------------------
   Medium-contrast pastel SVG fallbacks (inline, themed)
------------------------------ */
const FRAME = (a: string, b: string) => `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='${a}'/>
      <stop offset='100%' stop-color='${b}'/>
    </linearGradient>
  </defs>
  <rect width='640' height='360' rx='28' ry='28' fill='url(#g)'/>
  <rect x='18' y='18' width='604' height='324' rx='22' ry='22' fill='rgba(255,255,255,0.14)'/>
`;
const END = `</svg>`;

// Medical imaging (X-ray) — teal → steel
const FALLBACK_XRAY = svgToDataUrl(
  FRAME("#1fb6aa", "#3a6073") +
    `<g opacity=".55">
       <rect x="90" y="70" width="460" height="220" rx="18" fill="rgba(0,0,0,.25)"/>
       <rect x="110" y="90" width="420" height="180" rx="12" fill="rgba(255,255,255,.08)"/>
       <rect x="200" y="110" width="240" height="140" rx="8" fill="rgba(255,255,255,.16)"/>
       <circle cx="320" cy="180" r="62" fill="rgba(0,0,0,.25)"/>
       <rect x="160" y="260" width="320" height="10" rx="5" fill="rgba(255,255,255,.35)"/>
     </g>` +
    END
);

// Brain / RSNA — blue → navy
const FALLBACK_RSNA = svgToDataUrl(
  FRAME("#4f86ff", "#0a2540") +
    `<g opacity=".5">
       <circle cx="210" cy="170" r="62" fill="rgba(255,255,255,.10)"/>
       <circle cx="260" cy="170" r="70" fill="rgba(255,255,255,.12)"/>
       <circle cx="310" cy="170" r="78" fill="rgba(255,255,255,.14)"/>
       <circle cx="360" cy="170" r="70" fill="rgba(255,255,255,.12)"/>
       <circle cx="410" cy="170" r="62" fill="rgba(255,255,255,.10)"/>
       <rect x="140" y="250" width="360" height="8" rx="4" fill="rgba(255,255,255,.35)"/>
     </g>` +
    END
);

// EEG / HMS — violet → cyan
const FALLBACK_EEG = svgToDataUrl(
  FRAME("#6d5bd0", "#1ec8e1") +
    `<g stroke="rgba(255,255,255,.65)" stroke-width="3" fill="none" opacity=".8">
       <path d="M40,220 C90,160 140,280 190,200 C240,120 290,260 340,190 C390,120 440,260 490,190 C540,120 590,250 640,200" />
       <path d="M40,260 C90,200 140,300 190,220 C240,140 290,280 340,210 C390,140 440,280 490,210 C540,140 590,270 640,220" opacity=".6"/>
     </g>` +
    END
);

// Playground — sky → slate with bars
const FALLBACK_PLAYGROUND = svgToDataUrl(
  FRAME("#60a5fa", "#334155") +
    `<g opacity=".35">
       ${Array.from({ length: 8 })
         .map(
           (_, i) =>
             `<rect x="${60 + i * 60}" y="70" width="40" height="${80 + ((i % 3) * 30)}" rx="8" fill="rgba(255,255,255,.5)"/>`
         )
         .join("")}
       <rect x="60" y="240" width="520" height="10" rx="5" fill="rgba(255,255,255,.6)"/>
     </g>` +
    END
);

// NLP — beige → lavender
const FALLBACK_NLP = svgToDataUrl(
  FRAME("#d6c2a6", "#7c6f9f") +
    `<g fill="rgba(255,255,255,.6)" font-family="ui-monospace, SFMono-Regular, Menlo" font-size="20">
       <text x="80" y="150">{ text, label }</text>
       <text x="80" y="185">tokenize(…)</text>
       <text x="80" y="220">BERT → softmax</text>
     </g>` +
    END
);

// Space — midnight → plum with stars
const FALLBACK_SPACE = svgToDataUrl(
  FRAME("#0b1026", "#4b2a50") +
    `<g fill="rgba(255,255,255,.8)">
       ${Array.from({ length: 40 })
         .map(() => {
           const x = Math.floor(Math.random() * 620) + 10;
           const y = Math.floor(Math.random() * 340) + 10;
           const r = Math.random() * 1.8 + 0.6;
           return `<circle cx="${x}" cy="${y}" r="${r}"/>`;
         })
         .join("")}
     </g>
     <g opacity=".35" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="2">
       <circle cx="470" cy="180" r="60"/>
       <circle cx="470" cy="180" r="90" stroke-dasharray="8 10"/>
       <circle cx="470" cy="180" r="120" stroke-dasharray="5 12"/>
     </g>` +
    END
);

// Research ongoing — PhysioNet (teal-green)
const FALLBACK_PHYSIONET = svgToDataUrl(
  FRAME("#16a34a", "#0f766e") + // emerald → teal
    `<g opacity=".55">
       <rect x="100" y="90" width="440" height="180" rx="18" fill="rgba(255,255,255,.10)"/>
       <path d="M80 200 C140 160, 200 240, 260 190 C320 140, 380 260, 440 210 C500 160, 560 240, 620 200" stroke="rgba(255,255,255,.75)" stroke-width="3" fill="none"/>
     </g>` +
    END
);

// Research ongoing — CAFA6 (lavender → navy)
const FALLBACK_CAFA6 = svgToDataUrl(
  FRAME("#8b5cf6", "#1e3a8a") + // violet → navy
    `<g opacity=".5">
       <circle cx="320" cy="140" r="54" fill="rgba(255,255,255,.15)"/>
       <rect x="180" y="200" width="280" height="18" rx="9" fill="rgba(255,255,255,.35)"/>
       <rect x="220" y="230" width="200" height="12" rx="6" fill="rgba(255,255,255,.35)"/>
     </g>` +
    END
);

/* -----------------------------
   <img> with fallback
------------------------------ */
function ImgWithFallback({
  src,
  fallback,
  alt,
  className,
}: {
  src?: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallback)}
    />
  );
}

export default function Competitions() {
  /* -----------------------------
     🏆 Hosted Competitions
  ------------------------------ */
  const hosted = [
    {
      id: "xray-a",
      title: "Grand X-Ray Slam: Division A",
      role: "Organizer / Host",
      description:
        "Global medical imaging challenge advancing chest X-ray interpretation with curated data, fair metrics, and open resources.",
      prize: "$4,000",
      participants: "1,000+",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/48231/logos/thumb76_48231.png",
      fallback: FALLBACK_XRAY,
      link: "https://www.kaggle.com/competitions/grand-xray-slam-division-a",
    },
    {
      id: "xray-b",
      title: "Grand X-Ray Slam: Division B",
      role: "Organizer / Host",
      description:
        "Beginner-friendly division to broaden access to AI in radiology. Simplified datasets, step-by-step guidance, and education-first design.",
      prize: "$4,000",
      participants: "800+",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/48232/logos/thumb76_48232.png",
      fallback: FALLBACK_XRAY,
      link: "https://www.kaggle.com/competitions/grand-xray-slam-division-b",
    },
  ];

  /* -----------------------------
     ⚔️ Participated Competitions
     (Top two are ongoing with medals; then completed ones)
  ------------------------------ */
  const participated = [
    // Ongoing first
    {
      id: "physionet-ecg",
      title: "PhysioNet – Digitization of ECG Images",
      medalEmoji: "🥇",
      tags: ["Research", "Ongoing"],
      participants: "4,000+",
      description:
        "Deep learning to digitize ECG waveforms from scanned/photographed paper records for better clinical accessibility.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/57757/logos/thumb76_57757.png",
      fallback: FALLBACK_PHYSIONET,
      link: "https://www.kaggle.com/competitions/physionet-ecg-image-digitization/overview",
    },
    {
      id: "cafa6",
      title: "CAFA 6 – Protein Function Prediction",
      medalEmoji: "🥈",
      tags: ["Research", "Ongoing"],
      participants: "4,000+",
      description:
        "Predicting protein functions from sequence embeddings via multi-label learning to support functional genomics.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/57605/logos/thumb76_57605.png",
      fallback: FALLBACK_CAFA6,
      link: "https://www.kaggle.com/competitions/cafa-6-protein-function-prediction/overview",
    },

    // Completed (no category badges as requested)
    {
      id: "rsna",
      title: "RSNA Intracranial Aneurysm Detection",
      medalEmoji: undefined,
      tags: [],
      participants: "1,147",
      description:
        "3D-CT pipeline for aneurysm detection: robust preprocessing, augmentation, and ensemble modeling to improve sensitivity.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/52368/logos/thumb76_52368.png",
      fallback: FALLBACK_RSNA,
      link: "https://www.kaggle.com/competitions/rsna-intracranial-aneurysm-detection",
    },
    {
      id: "hms",
      title: "HMS – Harmful Brain Activity Classification",
      medalEmoji: undefined,
      tags: [],
      participants: "962",
      description:
        "EEG time-series modeling with 1D CNNs and temporal attention. Focus on denoising, channel features, and fold stability.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/52416/logos/thumb76_52416.png",
      fallback: FALLBACK_EEG,
      link: "https://www.kaggle.com/competitions/hms-harmful-brain-activity-classification",
    },
    {
      id: "play9",
      title: "Playground Series S5E9",
      medalEmoji: undefined,
      tags: [],
      participants: "872",
      description:
        "Structured data task with feature engineering and gradient boosting; careful regularization and CV alignment.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/54457/logos/thumb76_54457.png",
      fallback: FALLBACK_PLAYGROUND,
      link: "https://www.kaggle.com/competitions/playground-series-s5e9",
    },
    {
      id: "play8",
      title: "Playground Series S5E8",
      medalEmoji: undefined,
      tags: [],
      participants: "901",
      description:
        "Bank marketing classification with tuned tree ensembles; handled class imbalance and leakage checks.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/54175/logos/thumb76_54175.png",
      fallback: FALLBACK_PLAYGROUND,
      link: "https://www.kaggle.com/competitions/playground-series-s5e8",
    },
    {
      id: "fake-or-real",
      title: "Fake or Real: The Impostor Hunt",
      medalEmoji: undefined,
      tags: [],
      participants: "611",
      description:
        "NLP impostor detection with BERT; tokenization strategy and adversarial augmentation for robustness.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/51732/logos/thumb76_51732.png",
      fallback: FALLBACK_NLP,
      link: "https://www.kaggle.com/competitions/fake-or-real-the-impostor-hunt",
    },
    {
      id: "trojan-horse",
      title: "Trojan Horse Hunt in Space",
      medalEmoji: undefined,
      tags: [],
      participants: "564",
      description:
        "Spectral features + time-series forecasting to locate hidden anomalies; FFT filtering and dimensionality reduction.",
      kaggleImage:
        "https://storage.googleapis.com/kaggle-competitions/kaggle/53214/logos/thumb76_53214.png",
      fallback: FALLBACK_SPACE,
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
              Competitions I organized to advance open, ethical AI in medical imaging.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hosted.map((comp) => (
              <Card key={comp.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="relative h-40 bg-muted overflow-hidden">
                  <ImgWithFallback
                    src={comp.kaggleImage}
                    fallback={comp.fallback}
                    alt={`${comp.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-semibold mb-1">{comp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{comp.role}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-5">{comp.description}</p>
                  <div className="text-sm text-muted-foreground mb-4 space-y-1">
                    <p>Prize: {comp.prize}</p>
                    <p>Participants: {comp.participants}</p>
                  </div>
                  <Button asChild>
                    <a href={comp.link} target="_blank" rel="noopener noreferrer">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">⚔️ Participated Competitions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kaggle competitions I contributed to across medical imaging, EEG, NLP, and structured data.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participated.map((comp) => (
              <Card key={comp.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="relative h-40 bg-muted overflow-hidden">
                  <ImgWithFallback
                    src={comp.kaggleImage}
                    fallback={comp.fallback}
                    alt={`${comp.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-semibold mb-1 flex items-center flex-wrap gap-2">
                    {comp.title}
                    {comp.medalEmoji && <span className="text-base">{comp.medalEmoji}</span>}
                    {/* Tags (e.g., Research, Ongoing) */}
                    {comp.tags.map((t) => (
                      <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-5">{comp.description}</p>
                  <div className="text-sm text-muted-foreground mb-4">Participants: {comp.participants}</div>
                  <Button asChild>
                    <a href={comp.link} target="_blank" rel="noopener noreferrer">
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
