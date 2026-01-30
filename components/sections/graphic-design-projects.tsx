"use client";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";

// Placeholder data for Visual & Graphic Design projects
export const graphicDesignProjects = [
  {
    title: "Aquacoin Brand Identity",
    description:
      "A clean, modern brand identity and logo for Aquacoin, a fictional cryptocurrency project. Focused on aquatic color palettes and minimalism for strong digital presence.",
    banner: "/graphics/Aquacoin-design.webp",
    github: "#",
  },
  {
    title: "Bitstacks Brand Design",
    description:
      "Branding and visual system for Bitstacks, including logo, color scheme, and digital assets for a blockchain startup. Emphasizes trust and innovation.",
    banner: "/graphics/BitstacksBrand-design.webp",
    github: "#",
  },
  {
    title: "STXAI Visual Identity",
    description:
      "Logo and brand visuals for STXAI, an AI-powered platform on Stacks. Futuristic and tech-forward design language for web and print.",
    banner: "/graphics/STXAI-Brand-design.webp",
    github: "#",
  },
  {
    title: "Socials Poster Series",
    description:
      "A set of vibrant, eye-catching posters for social media campaigns. Designed to maximize engagement and brand recall across platforms.",
    banner: "/graphics/Socials-poster-design.webp",
    github: "#",
  },
  {
    title: "Thread Community Graphics",
    description:
      "Community-driven graphic assets for online discussion threads. Includes banners, avatars, and badges to foster engagement.",
    banner: "/graphics/Thread-designs.webp",
    github: "#",
  },
  {
    title: "X Header Design Collection",
    description:
      "A collection of header graphics for the X platform, blending bold typography with abstract backgrounds for a modern social look.",
    banner: "/graphics/X-header-designs.webp",
    github: "#",
  },
  {
    title: "Stackswars (Brand Identity Design)",
    description:
      "Architected the complete visual identity for a Web3 gaming ecosystem. Designed a scalable logo system, comprehensive brand guidelines, and curated moodboards to define the project's aesthetic. Delivered high-impact social graphics and cover imagery to ensure a cohesive brand presence across all platforms.",
    banner: "/graphics/Stackswars-brand-design.webp",
    github: "#",
  },
];

export function GraphicDesignProjects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardRefs.current) return;
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              i % 2 === 0 ? "slide-in-left" : "slide-in-right",
            );
            entry.target.classList.remove(
              "slide-out-left",
              "slide-out-right",
              "opacity-0",
              "-translate-x-12",
              "translate-x-12",
            );
          } else {
            entry.target.classList.remove("slide-in-left", "slide-in-right");
            entry.target.classList.add(
              i % 2 === 0 ? "slide-out-left" : "slide-out-right",
            );
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-18 mt-8">
      {graphicDesignProjects.map((project, idx) => (
        <Card
          key={project.title}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className={`w-full bg-primary/5 border border-primary/30 rounded-xl p-4 flex flex-col gap-3 opacity-0 ${
            idx % 2 === 0 ? "-translate-x-12" : "translate-x-12"
          } transition-all duration-1000`}
          style={{ transitionDelay: `${idx * 200}ms` }}
        >
          {/* Project Banner */}
          <div className="w-full aspect-[5/3] bg-primary/10 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
            {project.banner ? (
              <img
                src={project.banner}
                alt={project.title + " banner"}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <span className="text-muted-foreground text-xs">
                Project Banner
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold text-primary mb-1">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-1">
            {project.description}
          </p>
          <Button
            asChild
            variant="default"
            size={"lg"}
            className="mt-auto w-full flex items-center gap-auto "
          >
            <a
              href="https://www.behance.net/peteroluwaseyi1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More <ArrowRight className="size-4" />
            </a>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export function ViewAllGraphicsButton() {
  return (
    <div className="mt-12 text-center">
      <Button
        asChild
        size="lg"
        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
      >
        <a href="/projects/graphics">
          View All Graphics Projects <ArrowRight className="ml-2 size-4" />
        </a>
      </Button>
    </div>
  );
}
