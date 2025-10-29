// --- Kaggle Projects Section (with 2-sentence summaries) ---

type KaggleMedal = 'gold' | 'silver' | 'bronze' | null;

type KaggleProject = {
  title: string;
  href: string;          // absolute Kaggle URL
  votes: number;
  medal: KaggleMedal;
  comments?: number;
  scoreHint?: string;    // optional score text (if shown on Kaggle card)
  blurb: string;         // NEW: 2-sentence summary (50% technical, 50% impact/learning)
  thumb: string;         // data:image/svg+xml...
};

// lightweight SVG generator (medium contrast, subtle gradient)
const makeThumb = (seed: number, label: string) => {
  const palettes = [
    ['#1F2937', '#6B7280'], // slate
    ['#0F766E', '#2DD4BF'], // teal
    ['#7C3AED', '#A78BFA'], // violet
    ['#9D174D', '#F472B6'], // rose
    ['#1E3A8A', '#60A5FA'], // indigo
    ['#065F46', '#34D399'], // emerald
    ['#7C2D12', '#F59E0B'], // amber
  ];
  const [a,b] = palettes[seed % palettes.length];
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${a}'/>
          <stop offset='100%' stop-color='${b}'/>
        </linearGradient>
      </defs>
      <rect width='640' height='360' fill='url(#g)'/>
      <g fill='rgba(255,255,255,0.85)'>
        <circle cx='540' cy='70' r='4'/><circle cx='560' cy='90' r='3'/><circle cx='520' cy='110' r='2'/>
        <circle cx='70' cy='290' r='3'/><circle cx='90' cy='270' r='2'/><circle cx='110' cy='310' r='4'/>
      </g>
      <text x='32' y='300' font-family='system-ui, -apple-system, Segoe UI, Roboto' font-size='22' fill='white' opacity='0.9'>
        ${label.replace(/&/g,'&amp;').replace(/</g,'&lt;')}
      </text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const kaggleProjects: KaggleProject[] = [
  // Votes 57
  {
    title: 'Grand X-Ray Slam: Division A - EDA',
    href: 'https://www.kaggle.com/code/guntasdhanjal/grand-x-ray-slam-division-a-eda',
    votes: 57, medal: 'bronze',
    blurb: 'Deep-dived chest X-ray data with visual profiling, class imbalance checks, and leakage scans to establish a clean training base. This EDA guided my preprocessing and augmentation choices for downstream CNN and ensemble models.',
    thumb: makeThumb(0,'Grand X-Ray Slam A - EDA')
  },
  // Votes 53
  {
    title: 'RSNA - Enhanced Ensemble Approach 69%',
    href: 'https://www.kaggle.com/code/guntasdhanjal/rsna-enhanced-ensemble-approach-69',
    votes: 53, medal: 'bronze', scoreHint: 'Score: 0.61',
    blurb: 'Built an ensemble pipeline for 3D CT aneurysm detection combining model diversity with robust validation. I learned how calibrated blending and fold stability improve sensitivity without overfitting.',
    thumb: makeThumb(1,'RSNA Ensemble 69%')
  },
  // Votes 48
  {
    title: 'ECG Digitization - Signal Smoothing Enhancement',
    href: 'https://www.kaggle.com/code/guntasdhanjal/ecg-digitization-signal-smoothing-enhancement',
    votes: 48, medal: 'silver', scoreHint: 'Score: 1.22',
    blurb: 'Implemented a digitization pipeline using CNN-based tracing with post-processing (Gaussian smoothing, peak correction) to clean ECG waveforms. This improved signal fidelity and taught me how image artefacts impact downstream feature extraction.',
    thumb: makeThumb(2,'ECG Smoothing')
  },
  // Votes 40
  {
    title: 'Build a Chatbot Using DeepSek LLM',
    href: 'https://www.kaggle.com/code/guntasdhanjal/build-a-chatbot-using-deepsek-llm',
    votes: 40, medal: 'bronze',
    blurb: 'Prototyped an LLM chatbot with prompt engineering, memory, and guardrails to handle multi-turn queries. I learned to balance creativity with reliable grounding for safer, more useful responses.',
    thumb: makeThumb(3,'DeepSek Chatbot')
  },
  // Votes 38
  {
    title: 'Simple CNN Baseline for Division A',
    href: 'https://www.kaggle.com/code/guntasdhanjal/simple-cnn-baseline-for-division-a',
    votes: 38, medal: 'bronze',
    blurb: 'Built a lightweight CNN baseline with normalized pipelines and early stopping for fast X-ray iteration. The model set a reproducible floor that helped me measure true gains from advanced tricks.',
    thumb: makeThumb(4,'CNN Baseline A')
  },
  // Votes 38
  {
    title: 'Image Classification with TensorFlow',
    href: 'https://www.kaggle.com/code/guntasdhanjal/image-classification-with-tensorflow',
    votes: 38, medal: 'bronze',
    blurb: 'Explored TensorFlow training loops, data augmentation, and learning-rate schedules on a clean image benchmark. This grounded my understanding of convergence behavior and validation drift.',
    thumb: makeThumb(5,'TF Image Classification')
  },
  // Votes 27
  {
    title: 'Fast & Efficient Math-Focused LLM Fine-Tuning',
    href: 'https://www.kaggle.com/code/guntasdhanjal/fast-efficient-math-focused-llm-fine-tuning',
    votes: 27, medal: null,
    blurb: 'Experimented with LoRA fine-tuning for math reasoning, focusing on tokenization choices and targeted curricula. I learned how prompt formats and short context help smaller models reason better.',
    thumb: makeThumb(6,'Math LLM Fine-Tuning')
  },
  // Votes 26
  {
    title: 'Grand X-Ray Slam: Division B - EDA',
    href: 'https://www.kaggle.com/code/guntasdhanjal/grand-x-ray-slam-division-b-eda',
    votes: 26, medal: null,
    blurb: 'Profiled Division B dataset quality, artifacts, and label distribution to design a fair beginner-friendly track. The analysis informed simplified baselines that emphasized learning over leaderboard chasing.',
    thumb: makeThumb(7,'Grand X-Ray Slam B - EDA')
  },
  // Votes 26
  {
    title: '🐭 MABe EDA: Behavior Analysis & Features',
    href: 'https://www.kaggle.com/code/guntasdhanjal/mabe-eda-behavior-analysis-features',
    votes: 26, medal: 'bronze',
    blurb: 'Explored mouse behavior signals and engineered interpretable features to support sequence models. I learned how temporal context and domain hints shape better feature sets.',
    thumb: makeThumb(8,'MABe EDA')
  },
  // Votes 22
  {
    title: '⚡ ECG Image Digitization - Complete EDA',
    href: 'https://www.kaggle.com/code/guntasdhanjal/ecg-image-digitization-complete-eda',
    votes: 22, medal: 'bronze',
    blurb: 'Mapped typical ECG image issues—skew, noise, contrast—and tested pre-processing to stabilize digitization. This EDA sped up iteration and reduced failure cases in the tracing stage.',
    thumb: makeThumb(9,'ECG Complete EDA')
  },
  // Votes 20
  {
    title: 'This EfficientNetB0 Will Surprise You',
    href: 'https://www.kaggle.com/code/guntasdhanjal/this-efficientnetb0-will-surprise-you',
    votes: 20, medal: null,
    blurb: 'Benchmarked EfficientNetB0 with carefully tuned augmentation and regularization on a compact dataset. The exercise reinforced that strong baselines plus tight CV can outperform heavier models.',
    thumb: makeThumb(10,'EfficientNetB0')
  },
  // Votes 19
  {
    title: 'Catch This: ~0.90 with ResNet-50 on Division B',
    href: 'https://www.kaggle.com/code/guntasdhanjal/catch-this-0-90-with-resnet-50-on-division-b',
    votes: 19, medal: null,
    blurb: 'Trained a ResNet-50 with harmonized transforms and mixed precision to push accuracy near 0.90. I learned how consistent preprocessing and LR schedules improve stability.',
    thumb: makeThumb(11,'ResNet-50 Div B')
  },
  // Votes 13
  {
    title: 'Simple-CNN-Baseline-for-Division-B',
    href: 'https://www.kaggle.com/code/guntasdhanjal/simple-cnn-baseline-for-division-b',
    votes: 13, medal: null,
    blurb: 'Created a minimal CNN starter with clean dataloaders and reproducible seeds for Division B. This helped newcomers focus on validation hygiene and principled iteration.',
    thumb: makeThumb(12,'CNN Baseline B')
  },
  // Votes 11
  {
    title: 'Mastering Restaurant Recommendations',
    href: 'https://www.kaggle.com/code/guntasdhanjal/mastering-restaurant-recommendations',
    votes: 11, medal: null,
    blurb: 'Implemented a hybrid recommendation approach blending content features and interaction signals. I learned how evaluation splits can dramatically affect perceived lift.',
    thumb: makeThumb(13,'Restaurant Recs')
  },
  // Votes 11
  {
    title: 'Traffic Sign Detection with YOLOv11',
    href: 'https://www.kaggle.com/code/guntasdhanjal/traffic-sign-detection-with-yolov11',
    votes: 11, medal: null,
    blurb: 'Experimented with YOLO-style detection on traffic sign datasets, tuning anchors and NMS thresholds. The project taught me to trade off recall vs. precision for different deployment needs.',
    thumb: makeThumb(14,'YOLOv11 Traffic')
  },
  // Votes 10
  {
    title: 'My Journey to 95%+ Accuracy',
    href: 'https://www.kaggle.com/code/guntasdhanjal/my-journey-to-95-accuracy',
    votes: 10, medal: null,
    blurb: 'Documented the step-by-step path to a strong accuracy milestone through ablations and error analysis. It reinforced the value of controlled experiments and disciplined logging.',
    thumb: makeThumb(15,'95%+ Accuracy')
  },
  // Votes 8
  {
    title: 'Fake vs Real News Analysis using NLP & ML',
    href: 'https://www.kaggle.com/code/guntasdhanjal/fake-vs-real-news-analysis-using-nlp-ml',
    votes: 8, medal: null,
    blurb: 'Built a text classification pipeline with tokenization, TF-IDF/BERT features, and calibrated classifiers. I learned about leakage traps in text processing and importance of robust baselines.',
    thumb: makeThumb(16,'Fake vs Real News')
  },
  // Votes 8
  {
    title: 'X-Ray Slam Division A: Week 2 Battle Report',
    href: 'https://www.kaggle.com/code/guntasdhanjal/x-ray-slam-division-a-week-2-battle-report',
    votes: 8, medal: null,
    blurb: 'Summarized week 2 leaderboard dynamics and shared learnings on augmentation and CV alignment. Writing these reports improved my ability to translate experiments into actionable steps.',
    thumb: makeThumb(17,'Div A Week 2')
  },
  // Votes 8
  {
    title: 'Netflix EDA: What People Watch and When',
    href: 'https://www.kaggle.com/code/guntasdhanjal/netflix-eda-what-people-watch-and-when',
    votes: 8, medal: null,
    blurb: 'Analyzed viewing trends, seasonal patterns, and content mix with tidy data workflows. I learned to design visuals that reveal timing effects without overfitting narrative.',
    thumb: makeThumb(18,'Netflix EDA')
  },
  // Votes 7
  {
    title: 'Credit Risk Analysis & Default Prediction',
    href: 'https://www.kaggle.com/code/guntasdhanjal/credit-risk-analysis-default-prediction',
    votes: 7, medal: null,
    blurb: 'Engineered financial features and benchmarked tree models for default risk classification. The project sharpened my understanding of class imbalance and threshold selection.',
    thumb: makeThumb(19,'Credit Risk')
  },
  // Votes 7
  {
    title: '🔬 Ultimate CAFA6 EDA | GO Beyond the Data',
    href: 'https://www.kaggle.com/code/guntasdhanjal/ultimate-cafa6-eda-go-beyond-the-data',
    votes: 7, medal: null,
    blurb: 'Explored protein function labels, sequence properties, and train/test overlap for CAFA6. I learned how biological context improves feature thinking for multi-label tasks.',
    thumb: makeThumb(20,'CAFA6 EDA')
  },
  // Votes 6
  {
    title: 'Division B Week 4: Halfway Point Reached',
    href: 'https://www.kaggle.com/code/guntasdhanjal/division-b-week-4-halfway-point-reached',
    votes: 6, medal: null,
    blurb: 'Tracked mid-competition progress and highlighted what worked vs. what didn’t for Division B. Regular reporting kept me honest about CV stability and reproducibility.',
    thumb: makeThumb(21,'Div B Week 4')
  },
  // Votes 5
  {
    title: 'X-Ray Division A: 25 Days Down, 25 To Go',
    href: 'https://www.kaggle.com/code/guntasdhanjal/x-ray-division-a-25-days-down-25-to-go',
    votes: 5, medal: null,
    blurb: 'Reflected on the first half of Division A, cataloging failed ideas and promising leads. This milestone post helped me prioritize approaches with the best ROI.',
    thumb: makeThumb(22,'Div A 25 Days')
  },
  // Votes 5
  {
    title: 'X-Ray Slam Division B: Week 2 Battle Report',
    href: 'https://www.kaggle.com/code/guntasdhanjal/grand-slam-competition-division-b-week-2-results',
    votes: 5, medal: null,
    blurb: 'Shared Division B leaderboard shifts and baseline improvements in a digestible recap. Writing in public strengthened my communication and community feedback loops.',
    thumb: makeThumb(23,'Div B Week 2')
  },
  // Votes 4
  {
    title: 'Division A Week 3: 158% Submission Surge',
    href: 'https://www.kaggle.com/code/guntasdhanjal/division-a-week-3-158-submission-surge',
    votes: 4, medal: null,
    blurb: 'Analyzed a spike in submissions and how it impacted leaderboard variance. I learned to separate hype cycles from true modeling gains.',
    thumb: makeThumb(24,'Div A Week 3')
  },
  // Votes 4
  {
    title: 'Spotify Tracks Analysis & Visual Insights',
    href: 'https://www.kaggle.com/code/guntasdhanjal/spotify-tracks-analysis-visual-insights',
    votes: 4, medal: null,
    blurb: 'Explored audio features, popularity distributions, and genre clusters with tidy pipelines. It taught me to pair clustering with human-interpretable plots.',
    thumb: makeThumb(25,'Spotify Insights')
  },
  // Votes 4
  {
    title: 'Global App Reviews: 24 Languages Analysis',
    href: 'https://www.kaggle.com/code/guntasdhanjal/global-app-reviews-24-languages-analysis',
    votes: 4, medal: null,
    blurb: 'Processed multilingual reviews with fastText/BERT features and sentiment heuristics. I learned to standardize text pipelines across scripts and encodings.',
    thumb: makeThumb(26,'Global App Reviews')
  },
  // Votes 3
  {
    title: 'Grand X-Ray Slam Division B - Final Report',
    href: 'https://www.kaggle.com/code/guntasdhanjal/grand-x-ray-slam-division-b-final-report',
    votes: 3, medal: null,
    blurb: 'Wrapped up Division B with final metrics, error breakdowns, and takeaways for beginners. Documenting the full journey helped others reproduce and iterate faster.',
    thumb: makeThumb(27,'Div B Final')
  },
  // Votes 2
  {
    title: 'Grand X-Ray Slam Div A - Final Report',
    href: 'https://www.kaggle.com/code/guntasdhanjal/grand-x-ray-slam-div-a-final-report',
    votes: 2, medal: null,
    blurb: 'Summarized Division A strategy, model evolution, and leaderboard performance with actionable tips. Closing the loop taught me how to communicate tradeoffs clearly.',
    thumb: makeThumb(28,'Div A Final')
  },
].sort((a,b) => b.votes - a.votes);

// Small medal chip
const MedalChip = ({ medal }: { medal: KaggleMedal }) => {
  if (!medal) return null;
  const map = { gold: '🥇 Gold', silver: '🥈 Silver', bronze: '🥉 Bronze' };
  return <span className="px-2 py-0.5 rounded-full text-xs bg-black/10">{map[medal]}</span>;
};

export const KaggleProjectsGrid = () => (
  <section className="max-w-6xl mx-auto px-4 md:px-6">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Kaggle Code Projects</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {kaggleProjects.map((p) => (
        <a key={p.href} href={p.href} target="_blank" rel="noreferrer"
           className="group rounded-2xl overflow-hidden border border-gray-200/70 hover:border-gray-400/60 transition">
          <div className="aspect-[16/9] bg-gray-100">
            <img src={p.thumb} alt={p.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-base font-semibold leading-snug flex-1">{p.title}</h3>
              <MedalChip medal={p.medal} />
            </div>
            <p className="text-sm text-gray-700 mb-3">{p.blurb}</p>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>👍 {p.votes}</span>
              {p.scoreHint && <span className="text-gray-500">{p.scoreHint}</span>}
            </div>
          </div>
          <div className="px-4 pb-4">
            <span className="text-xs text-gray-500">View on Kaggle →</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

// --- Usage inside Projects.tsx ---
// <main className="...">
//   <KaggleProjectsGrid />
//   <YourExistingGitHubGrid />
// </main>
