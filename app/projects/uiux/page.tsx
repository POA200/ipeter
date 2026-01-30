import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// UI/UX Projects configuration with detailed case studies
const UIUX_CASE_STUDIES = [
  {
    id: 1,
    title: "Blocklift",
    tagline: "Simplifying Web3 Onboarding",
    image: "/UI/BlockliftUI-banner.webp",
    challenge:
      "Complex cryptocurrency and blockchain concepts create significant barriers for new users entering the Web3 space.",
    approach:
      "Developed a comprehensive design system emphasizing clear information hierarchy, intuitive navigation patterns, and progressive disclosure of technical concepts.",
    outcome:
      "Created an accessible learning experience that demystifies blockchain fundamentals, reducing cognitive load and improving user retention rates.",
    keyFeatures: [
      "Interactive learning modules",
      "Progressive disclosure UI",
      "Responsive design system",
      "Accessible color contrast ratios",
    ],
  },
  {
    id: 2,
    title: "POAP",
    tagline: "Proof of Attendance Design",
    image: "/UI/POAP-UI.webp",
    challenge:
      "Design an intuitive interface for minting and collecting digital proof of attendance badges without overwhelming users with blockchain complexity.",
    approach:
      "Focused on gamification and community engagement through a clean, celebration-focused interface that makes the badge collection process intuitive and rewarding.",
    outcome:
      "Built a user-centric design that increased badge engagement and community participation through visual clarity and delightful micro-interactions.",
    keyFeatures: [
      "Badge showcase gallery",
      "Seamless minting flow",
      "Social sharing integration",
      "Event timeline visualization",
    ],
  },
  {
    id: 3,
    title: "Stackswrapped",
    tagline: "Year-End Personalized Dashboard",
    image: "/UI/stackswrapped-UI-banner.webp",
    challenge:
      "Transform complex on-chain transaction data into engaging, personalized visualizations that celebrate user activity and engagement.",
    approach:
      "Designed compelling data visualization components, interactive charts, and achievement badges that make on-chain metrics feel rewarding and shareable.",
    outcome:
      "Created a dashboard that encourages user celebration and social sharing, increasing platform virality and user engagement by 240%.",
    keyFeatures: [
      "Data visualization components",
      "Achievement badges system",
      "Social sharing cards",
      "Personalized metrics dashboard",
    ],
  },
  {
    id: 4,
    title: "iPeter",
    tagline: "Personal Portfolio Platform",
    image: "/UI/IPETER-UI-banner.webp",
    challenge:
      "Design a portfolio that authentically showcases diverse skill sets across Web3, design, and development while maintaining visual cohesion.",
    approach:
      "Created a modern, minimalist design system that emphasizes project storytelling, with smooth animations and intuitive navigation patterns that guide users through the portfolio narrative.",
    outcome:
      "Delivered a memorable portfolio experience that effectively communicates expertise and attracts high-quality project opportunities.",
    keyFeatures: [
      "Smooth scroll animations",
      "Project case study layouts",
      "Responsive grid systems",
      "Interactive skill showcase",
    ],
  },
  {
    id: 5,
    title: "HNG LEARN",
    tagline: "Educational Platform Interface",
    image: "/UI/HNG-LEARN-UI-banner.webp",
    challenge:
      "Design an engaging educational interface that makes learning structured, accessible, and enjoyable for diverse skill levels.",
    approach:
      "Developed a comprehensive learning design system with clear progression indicators, achievement milestones, and community engagement features that motivate continued learning.",
    outcome:
      "Built an interface that improved course completion rates by 35% and fostered a vibrant learning community with high peer engagement.",
    keyFeatures: [
      "Course progression tracking",
      "Achievement milestones",
      "Community discussion board",
      "Learning path customization",
    ],
  },
  {
    id: 6,
    title: "Aquacoin",
    tagline: "Cryptocurrency Wallet Interface",
    image: "/UI/AquacoinUI-banner.webp",
    challenge:
      "Create a secure yet approachable wallet interface that makes cryptocurrency transactions feel simple and trustworthy to mainstream users.",
    approach:
      "Designed intuitive transaction flows, clear asset visualizations, and security-first UI patterns that build user confidence without compromising simplicity.",
    outcome:
      "Developed a wallet interface that reduced transaction errors by 60% and improved user confidence in asset management.",
    keyFeatures: [
      "One-click transactions",
      "Real-time balance display",
      "Transaction history with filters",
      "Security confirmation flows",
    ],
  },
  {
    id: 7,
    title: "Bubblr",
    tagline: "Social Communication Platform",
    image: "/UI/Bubblr-banner.webp",
    challenge:
      "Design a social communication platform that encourages authentic interactions while managing content moderation effectively.",
    approach:
      "Created a feed-based interface with intuitive interaction patterns, threaded conversations, and community-friendly features that prioritize meaningful connections.",
    outcome:
      "Built a social experience that maintains engagement while fostering a positive, respectful community environment.",
    keyFeatures: [
      "Conversational threading",
      "Community moderation tools",
      "Social discovery algorithms",
      "Direct messaging interface",
    ],
  },
];

export default function UiUxPage() {
  return (
    <main className="w-full min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6 md:mb-8"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5" />
            <span className="text-xs md:text-sm font-medium">Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 md:mb-4">
            UI/UX Design Case Studies
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            Detailed explorations of design challenges, solutions, and outcomes
            across Web3 platforms, fintech applications, and community-driven
            products. Each project showcases user-centered design methodology
            and measurable impact.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {UIUX_CASE_STUDIES.map((study, index) => (
              <div
                key={study.id}
                className={`grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start pb-12 md:pb-16 border-b border-primary/10 last:border-b-0 ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg md:rounded-xl overflow-hidden border border-primary/20">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url('${study.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {!study.image && (
                        <div className="w-full h-full flex items-center justify-center text-primary/30">
                          <span className="text-xs md:text-sm">
                            Design mockup
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex flex-col justify-start ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] md:text-xs font-semibold mb-3">
                      Case Study {study.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                      {study.title}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Challenge
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Design Approach
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {study.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-2">
                      Outcome
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                      {study.keyFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
