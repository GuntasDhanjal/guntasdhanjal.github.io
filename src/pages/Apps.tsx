import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone } from "lucide-react";

type StoreApp = {
  id: number;
  name: string;
  description: string;
  image: string;
  storeLink: string;
  genre: string;
};

// Static list from Apple's developer page (Blue and Gold Healthcare Inc)
const appsData: StoreApp[] = [
  {
    id: 6740080563,
    name: "School TaskFlow - Task manager",
    genre: "Productivity",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e8/1f/6a/e81f6a3f-f64a-c19a-2a19-2627e9f10085/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    storeLink:
      "https://apps.apple.com/us/app/school-taskflow-task-manager/id6740080563",
    description:
      "Get your school life under control with School TaskFlow — the ultimate student app designed to help you plan smarter, study better, and never miss a deadline again.\n\nWhether you're in high school or college, staying organized can be overwhelming. Assignments pile up, exams sneak up, and to-do lists grow longer by the day. That’s where School TaskFlow comes in — a powerful yet simple homework planner, assignment tracker, and school calendar built for students who want clarity, structure, and results.\n\nWHAT MAKES SCHOOL TASKFLOW YOUR GO-TO STUDY APP?\n\nSMART HOMEWORK PLANNER\n\nEffortlessly add homework, tasks, and reminders in seconds. Stay ahead of your assignments with a clean, intuitive interface that makes tracking deadlines stress-free. You’ll always know what’s due, when it’s due, and what’s coming up next.\n\nASSIGNMENT TRACKER THAT WORKS\n\nTrack every school-related task with precision. Whether it’s a big essay or a daily reading, you can prioritize, categorize, and organize your schedule with ease. Built-in reminders make sure nothing slips through the cracks.\n\nALL-IN-ONE SCHOOL CALENDAR\n\nView all your classes, homework, and deadlines in a single, structured school calendar. The built-in timetable keeps your weekly routine clear, while daily views help you focus on the now.\n\nCUSTOMIZABLE TASK MANAGER\n\nTailor your workflow to how you study. With flexible organization options, School TaskFlow adapts to your needs — not the other way around. Sort by subject, priority, or deadline. Keep your academic life as structured as you want it to be.\n\nDESIGNED FOR STUDENTS\n\nThis isn’t just another task manager. School TaskFlow was made specifically for students — high schoolers, college students, and even graduate learners — who need more than just a basic to-do list. It's your school organizer, study app, and school assistant all in one.\n\nTRACK PROGRESS AND STAY FOCUSED\n\nUse visual cues and daily checklists to see what you’ve completed and what still needs attention. The smart tracker system ensures you always stay on top of your study goals.\n\nBoost Your Focus with the Proven Power of the Pomodoro Technique\n\nStaying focused during long study sessions can be tough — that’s why SchoolTaskFlow is built around the science-backed Pomodoro Technique. This simple yet powerful method breaks your workload into 25-minute study bursts followed by short breaks, helping you stay fresh, motivated, and productive.\n\n– Fight procrastination by focusing on just one task at a time\n\n– Prevent burnout with regular recovery breaks\n\n– Build study habits that actually stick\n\n– Make even the toughest assignments feel manageable\n\n– Stay consistent and track your completed \"\"\"\"pomodoros\"\"\"\" with pride\n\nWhether you're working on homework, prepping for an exam, or organizing your school schedule, the Pomodoro system helps you move through your to-do list with clarity and momentum. Combined with the app's structured layout and clean interface, it’s the ultimate study productivity boost for students who want results.\n\nWhy Students Choose School TaskFlow:\n\n– Built FOR STUDENTS – not business users\n\n– Combines TO DO LIST, CALENDAR, and planner features in one\n\n– Helps you stay focused, reduce stress, and beat every DEADLINE\n\n– Designed to boost academic productivity\n\n– Intuitive, fast, and distraction-free interface\n\n– Works seamlessly across your SCHOOL day\n\nWhether you're managing a packed class schedule, juggling extracurriculars, or just want more control over your school workload, School TaskFlow gives you the tools to thrive.\n\nDownload now and discover the only student app you'll ever need to stay organized, productive, and ahead of the curve.\n\nStart organizing your school life with confidence. Say goodbye to missed homework, forgotten deadlines, and cluttered planners. Say hello to School TaskFlow — your smart, simple, and powerful school productivity solution.",
  },
  {
    id: 6748384868,
    name: "Dr HealthAgent",
    genre: "Medical",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/29/21/74/2921744a-f5d6-5c88-261b-0e747bbc5242/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    storeLink: "https://apps.apple.com/us/app/dr-healthagent/id6748384868",
    description:
      "Take control of your healthcare journey with Dr. Health Agent — your intelligent, AI-powered health companion.\n\nDr. Health Agent helps you stay organized, informed, and empowered with an all-in-one mobile platform that brings together your fragmented medical data into a Unified Patient Record (UPR). Built with cutting-edge AI and real-world clinical logic, it eliminates bottlenecks, streamlines follow-ups, and improves clarity at every step of your care journey.\n\nKEY FEATURES\n\nUnified Patient Record\nSync and store your medical history, lab results, diagnoses, medications, and more—across multiple doctors and systems. No more hunting for scattered files.\n\nAI-Powered Report Summarization\nUpload any medical document (PDF, JPG, or scan), and Dr. Health Agent extracts key findings, explains them in simple language, and flags important follow-ups.\n\nVisual Health Tracker\nVisualize your health history with an interactive body map. Tag reports to specific body parts (like knee, chest, or stomach), track patterns over time, and filter reports by region for quick insights.\n\nPrescription & Scan History\nKeep track of your prescriptions and diagnostic scans with a clear timeline—organized by body part or whole-body view.\n\nMulti-Language Support\nChoose English or Spanish for a more personalized experience, with additional languages coming soon.\n\nPreventive Care Guidance\nFill out a short health form (age, gender, lifestyle factors), and receive tailored preventive care recommendations such as screenings, checkups, or lifestyle advice.\n\nHealth & Wellness Library\nExplore everyday health topics—from keeping your heart healthy to child wellness tips—with easy-to-read guides and trusted references.\n\nIDEAL FOR:\n\n• Patients managing chronic conditions (diabetes, hypertension, etc.)\n• Family caregivers coordinating multiple appointments and medications\n• Teens, young adults, and seniors trying to understand medical records\n• Anyone tired of fragmented health portals and endless paperwork\n\nCOMING SOON:\n\n• Apple HealthKit integration\n• Wearable syncing (heart rate, sleep, fitness)\n• Predictive health insights using AI\n• FHIR/HL7 integration with hospitals and providers\n\nStart managing your health like never before—with clarity, control, and confidence.",
  },
  {
    id: 6748453188,
    name: "Nurse AI",
    genre: "Medical",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/98/9b/8f/989b8f56-3fa1-59d7-17ae-17f42d94ee70/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg",
    storeLink: "https://apps.apple.com/us/app/nurse-ai/id6748453188",
    description:
      "NurseAI – Essential Nursing Tools in One App\n\nNurseAI is built for nurses, clinical staff, and community health workers who need quick, reliable answers during their workflow. In this first release, we’ve focused on the three features that make the most difference at the bedside and in the community.\n\n1. Drug Reference Guide\n\nSearch by generic or brand name to access trusted information on drug indications, standard dosing, contraindications, side effects, and nursing considerations.\n\n• Data Sources: FDA Open Data (Drug Labeling API) and RxNorm API.\n• Key Benefit: Instant, evidence-based medication lookups without flipping through manuals.\n• Offline Capability: Core drug data stored locally for faster, reliable access.\n\n2. SDOH Screening & Local Resource Finder\n\nIdentify patient needs beyond the clinic using a structured Social Determinants of Health (SDOH) questionnaire covering housing, food, transportation, safety, and more. NurseAI then recommends local resources based on the user’s ZIP code.\n\n•Screening Tool: CMS Accountable Health Communities (AHC) format.\n•Local Resource Finder: Integrated with findhelp.org and other directories.\n•Goal: Address non-medical barriers to health by connecting patients to real community support\n\nWhy Choose NurseAI?\n\n• Focused on workflow speed and accuracy.\n• Built on trusted data sources (FDA, RxNorm, CMS, findhelp.org).\n• Designed with a HIPAA-conscious architecture—local storage for PHI-sensitive tools.\n• Simple, clean interface with smart search functionality.\n\nComing Soon\nFuture updates will expand NurseAI’s capabilities, including features such as securely sending screening results to Dr. Health Agent for coordinated care.",
  },
  {
    id: 6744159123,
    name: "School Shark Tank",
    genre: "Education",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/23/db/6d23dbd7-9096-675b-dee6-8018d91bce65/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/512x512bb.jpg",
    storeLink: "https://apps.apple.com/us/app/school-shark-tank/id6744159123",
    description:
      "School SharkTank is an engaging platform that transforms student entrepreneurship competitions into dynamic, gamified experiences. Designed for middle school, high school, and college environments, this app allows users to participate in pitch competitions hosted by their schools or organizations. Users can log in using phone, email, or SnapChat, select their school, and join competitions using a secure invitation code.\n\nEach competition hosts a set of student startup pitches. Participants, judges, and general users are allocated virtual currency—ranging from $100K to $1M—to invest in the ideas they believe in. As users invest in different pitches, the app ranks pitches based on investment totals, promoting real-time excitement and competition.\n\nThe app also includes:\n\n- Role-based access (students, judges, coaches, admins)\n- Message boards for competitions and individual pitches\n- Photo sharing and moderated chat\n- Invite functionality for users outside the school (e.g., family and friends)\n- Investment dashboards showing user contributions and rankings\n- Pitch-specific profiles with videos, PDFs, and participant bios\n\nAdministrators can manage users, assign roles, monitor activity, and suspend users or pitches when necessary. Coaches and judges are given additional currency and permissions to mentor and vote.\n\nWhether you're a student innovator, a teacher mentor, or a judge seeking the next big idea, School SharkTank brings the startup spirit to your school in a vibrant, secure, and educational environment.",
  },
];

const Apps = () => {
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

        <div className="max-w-6xl mx-auto space-y-12">
          {appsData.map((app, index) => (
            <article 
              key={app.id}
              className="glass-card rounded-3xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={app.image}
                    alt={`${app.name} icon`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Smartphone className="w-6 h-6 text-accent" />
                    <Badge variant="secondary">iOS</Badge>
                    <Badge variant="secondary">{app.genre}</Badge>
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-400">
                      Live
                    </Badge>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{app.name}</h2>

                  <p className="text-foreground/80 mb-6 leading-relaxed whitespace-pre-line">
                    {app.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <a
                      href={app.storeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download on App Store
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
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
