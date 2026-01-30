import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Image variable configuration for easy updates
const GRAPHICS_PROJECTS = [
  {
    id: 1,
    title: "Aquacoin",
    subtitle: "Brand Identity",
    image: "/graphics/Aquacoin-design.webp",
  },
  {
    id: 2,
    title: "Bitstacks",
    subtitle: "Visual Identity System",
    image: "/graphics/BitstacksBrand-design.webp",
  },
  {
    id: 3,
    title: "STXAI",
    subtitle: "AI-Powered Visual Language",
    image: "/graphics/STXAI-Brand-design.webp",
  },
  {
    id: 4,
    title: "Socials",
    subtitle: "Campaign Poster Series",
    image: "/graphics/Socials-poster-design.webp",
  },
  {
    id: 5,
    title: "Thread",
    subtitle: "Community Graphics",
    image: "/graphics/Thread-designs.webp",
  },
  {
    id: 6,
    title: "X Platform",
    subtitle: "Header Design Collection",
    image: "/graphics/X-header-designs.webp",
  },
  {
    id: 7,
    title: "Stackswars",
    subtitle: "Gaming Ecosystem Brand",
    image: "/graphics/Stackswars-brand-design.webp",
  },
];

export default function GraphicsPage() {
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
            Visual & Graphic Design
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
            A collection of brand identities, visual systems, and design assets
            crafted to establish compelling digital presences across Web3
            projects and campaigns.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full px-3 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {GRAPHICS_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative w-full overflow-hidden rounded-lg md:hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image Container - Large and full width */}
                <div className="w-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px] bg-primary/10 flex items-center justify-center overflow-hidden relative">
                  {/* Image */}
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                    style={{
                      backgroundImage: `url('${project.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!project.image && (
                      <div className="text-primary/30 text-center">
                        <p className="text-xs md:text-sm">Image placeholder</p>
                      </div>
                    )}
                  </div>

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/5 transition-all duration-300" />
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
