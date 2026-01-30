"use client";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";

// Placeholder data for UI UX Design projects
export const uiuxProjects = [
  {
    title: "Blocklift UI Design",
    description: "Blocklift UI/UX design project.",
    github: "#",
    banner: "/UI/BlockliftUI-banner.webp",
  },
  {
    title: "POAP UI Design",
    description: "POAP UI/UX design project.",
    github: "#",
    banner: "/UI/POAP-UI.webp",
  },
  {
    title: "Stackswrapped UI Design",
    description: "Stackswrapped UI/UX design project.",
    github: "#",
    banner: "/UI/stackswrapped-UI-banner.webp",
  },
  {
    title: "iPeter UI Design",
    description: "iPeter UI/UX design project.",
    github: "#",
    banner: "/UI/IPETER-UI-banner.webp",
  },
  {
    title: "HNG LEARN UI Design",
    description: "HNG LEARN UI/UX design project.",
    github: "#",
    banner: "/UI/HNG-LEARN-UI-banner.webp",
  },
  {
    title: "Aquacoin UI Design",
    description: "Aquacoin UI/UX design project.",
    github: "#",
    banner: "/UI/AquacoinUI-banner.webp",
  },
  {
    title: "Bubblr UI Design",
    description: "Bubblr UI/UX design project.",
    github: "#",
    banner: "/UI/Bubblr-banner.webp",
  },
];

export function UiUxProjects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardRefs.current.length) return;
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "slide-out-left",
              "slide-out-right",
              "opacity-0",
            );
            entry.target.classList.add(
              i % 2 === 0 ? "slide-in-left" : "slide-in-right",
            );
          } else {
            entry.target.classList.remove("slide-in-left", "slide-in-right");
            entry.target.classList.add(
              "opacity-0",
              i % 2 === 0 ? "slide-out-left" : "slide-out-right",
            );
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-18 mt-8">
      {uiuxProjects.map((project, idx) => (
        <Card
          key={project.title}
          ref={(el) => {
            cardRefs.current[idx] = el;
          }}
          className={`w-full bg-primary/5 border border-primary/30 rounded-xl p-4 flex flex-col gap-3 opacity-0`}
        >
          {/* Banner Image */}
          <div className="w-full aspect-[5/3] bg-primary/10 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
            {project.banner ? (
              <img
                src={project.banner}
                alt={project.title + " banner"}
                className="object-cover w-full h-full rounded-lg"
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
              href="https://x.com/iPeter_crx"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire <ArrowRight className="size-4" />
            </a>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export function ViewAllUiUxButton() {
  return (
    <div className="mt-12 text-center">
      <Button
        asChild
        size="lg"
        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
      >
        <a href="/projects/uiux">
          View All UI/UX Case Studies <ArrowRight className="ml-2 size-4" />
        </a>
      </Button>
    </div>
  );
}
