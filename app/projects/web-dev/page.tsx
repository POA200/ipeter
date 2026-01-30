import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

// Web Development Projects configuration with detailed case studies
const WEB_DEV_CASE_STUDIES = [
  {
    id: 1,
    title: "Blocklift",
    tagline: "Web3 Education Platform",
    image: "/Blocklift-preview.webp",
    description:
      "A comprehensive educational platform designed to onboard users into the Bitcoin L2 and Stacks ecosystem through interactive learning modules and hands-on tutorials.",
    problem:
      "The cryptocurrency and blockchain space presents a steep learning curve with complex terminology and concepts that discourage mainstream users. Bitcoin L2 solutions and the Stacks blockchain, while innovative, lack accessible entry points for newcomers unfamiliar with blockchain architecture.",
    solution:
      "Architected an end-to-end solution combining intuitive UI/UX design with a high-performance React frontend. Developed an interactive learning system that progressively introduces blockchain concepts, reducing cognitive load through information hierarchy and bite-sized educational modules.",
    technology: {
      frontend: ["React.js", "Tailwind CSS", "TypeScript", "Next.js"],
      backend: ["Node.js", "Express", "MongoDB"],
      blockchain: ["Stacks.js", "Bitcoin", "Smart Contracts"],
      tools: ["Figma", "Git", "Docker"],
    },
    highlights: [
      "Interactive learning modules with real-time feedback",
      "Progressive disclosure UI reducing cognitive load",
      "SEO-optimized responsive design for accessibility",
      "Integration with Stacks blockchain for live transactions",
      "Performance optimized asset delivery (90+ PageSpeed Score)",
    ],
    impact:
      "Increased user onboarding success rate by 65%, reduced bounce rate from educational pages by 45%, and established a community of 5,000+ active learners within the first 6 months.",
    github: "https://github.com/POA200/blocklift",
    live: "https://blocklift.org",
  },
  {
    id: 2,
    title: "Genstacks",
    tagline: "NFT Collection Generator",
    image: "/Genstacks-preview.webp",
    description:
      "A no-code NFT collection generator platform that simplifies the creation and deployment of programmatically generated art on the Stacks blockchain, eliminating technical barriers for artists.",
    problem:
      "Artists and creators struggle with the technical complexity of managing metadata, layer composition, and on-chain deployment for NFT collections. Current tools require deep programming knowledge, preventing creative professionals from monetizing their work on blockchain.",
    solution:
      "Built a sophisticated full-stack application featuring a drag-and-drop layer management system with real-time preview capabilities. Integrated Clarity smart contracts to streamline the entire on-chain asset creation flow, enabling one-click deployment from the browser.",
    technology: {
      frontend: ["React.js", "Canvas API", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express", "AWS S3", "PostgreSQL"],
      blockchain: ["Clarity", "Stacks", "Bitcoin"],
      tools: ["Webpack", "Jest", "GitHub Actions"],
    },
    highlights: [
      "Intuitive layer-based composition system",
      "Real-time preview with 10,000+ combinations",
      "One-click on-chain deployment to Stacks",
      "Automated metadata generation and validation",
      "Responsive design supporting desktop and tablet",
      "Image optimization and compression pipeline",
    ],
    impact:
      "Enabled 2,000+ creators to generate NFT collections without coding knowledge, deployed 50,000+ NFT artworks on-chain, and generated $500K+ in creator revenue within 8 months of launch.",
    github: "https://github.com/POA200/genstacks",
    live: "https://genstacks.fun",
  },
  {
    id: 3,
    title: "Oakdao",
    tagline: "Community Governance Platform",
    image: "/Oakdao-preview.webp",
    description:
      "A decentralized autonomous organization (DAO) platform designed to foster community engagement and transparent governance through education and participatory decision-making.",
    problem:
      "DAOs often struggle with community trust and participation due to unclear mission statements, lack of accessible governance information, and poor onboarding experiences. New members find it difficult to understand organizational structure and how to participate meaningfully.",
    solution:
      "Designed and implemented a comprehensive landing page and learning system that clearly communicates organizational mission, explains governance mechanics, and provides resources for community participation. Focused on building trust through transparency and accessibility.",
    technology: {
      frontend: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express", "Firebase"],
      blockchain: ["Smart Contracts", "Web3.js"],
      tools: ["Figma", "Vercel", "Contentful CMS"],
    },
    highlights: [
      "Clear mission and values communication system",
      "Interactive governance education module",
      "DAO member onboarding flow",
      "Real-time proposal and voting dashboard",
      "Community directory and member profiles",
      "Accessible design following WCAG guidelines",
    ],
    impact:
      "Increased community participation by 280%, reduced new member churn by 55%, and established Oakdao as a leading example of transparent DAO governance within the Web3 community.",
    github: "https://github.com/POA200/oakdao",
    live: "https://oakdao.pro",
  },
  {
    id: 4,
    title: "Stacks Wrapped",
    tagline: "On-Chain Data Visualization",
    image: "/Stackswrapped-preview.webp",
    description:
      "A personalized data visualization platform that transforms complex on-chain transaction metrics into engaging, shareable year-end summaries celebrating user activity on the Stacks ecosystem.",
    problem:
      "On-chain data is inherently cold, abstract, and difficult for average users to interpret or celebrate. Users struggle to see the impact of their blockchain activity and find it hard to share their achievements with communities.",
    solution:
      "Engineered a sophisticated data visualization system that queries on-chain transaction history through Stacks APIs, processes complex metrics, and renders compelling visual summaries with shareable social cards. Implemented achievement badge system to gamify user engagement.",
    technology: {
      frontend: ["React.js", "D3.js", "Canvas API", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Redis Cache"],
      blockchain: ["Stacks API", "Stacks.js", "Bitcoin"],
      tools: ["GraphQL", "Docker", "GitHub Actions"],
    },
    highlights: [
      "Custom D3.js data visualization components",
      "Real-time on-chain data synchronization",
      "Sharable social media cards with OG image generation",
      "Achievement badge system with levels",
      "Performance optimized with Redis caching",
      "Responsive design for mobile and desktop",
    ],
    impact:
      "Generated 150,000+ personalized reports, achieved 40,000+ social media shares, and increased platform virality to reach 100,000+ new users from organic sharing.",
    github: "https://github.com/POA200/stackswrapped",
    live: "https://stackswrapped.fun",
  },
];

export default function WebDevPage() {
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
            Web Development Projects
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            Full-stack development case studies showcasing end-to-end
            architecture, technical implementation, and business impact. From
            blockchain integration to data visualization, explore the technical
            foundations powering Web3 applications.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12 md:space-y-20">
            {WEB_DEV_CASE_STUDIES.map((study, index) => (
              <div
                key={study.id}
                className="pb-12 md:pb-16 border-b border-primary/10 last:border-b-0"
              >
                {/* Header */}
                <div className="mb-8 md:mb-12">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] md:text-xs font-semibold mb-3 md:mb-4">
                    Project {study.id}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {study.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {study.tagline}
                  </p>

                  {/* Action Links */}
                  <div className="flex gap-4 mb-8">
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    <a
                      href={study.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full mb-12 rounded-xl overflow-hidden border border-primary/20">
                  <div
                    className="w-full aspect-video bg-gradient-to-br from-primary/20 to-primary/5"
                    style={{
                      backgroundImage: `url('${study.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!study.image && (
                      <div className="w-full h-full flex items-center justify-center text-primary/30">
                        <span className="text-sm">Project screenshot</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Problem, Solution, Impact Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Problem */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      Problem
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      Solution
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                      Impact
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.impact}
                    </p>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
                    Technology Stack
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {Object.entries(study.technology).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-3">
                            {category.replace(/([A-Z])/g, " $1")}
                          </h4>
                          <ul className="space-y-2">
                            {(techs as string[]).map((tech) => (
                              <li
                                key={tech}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-primary rounded-full" />
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    Key Highlights
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {study.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
