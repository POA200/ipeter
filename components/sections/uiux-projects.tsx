"use client";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";

// Placeholder data for UI UX Design projects
export const uiuxProjects = [
  {
    title: "UI UX Project 1",
    description: "Placeholder for a UI/UX design project.",
    github: "#",
  },
  {
    title: "UI UX Project 2",
    description: "Placeholder for a UI/UX design project.",
    github: "#",
  },
];

export function UiUxProjects() {
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
              i % 2 === 0 ? "slide-in-left" : "slide-in-right"
            );
            entry.target.classList.remove(
              "slide-out-left",
              "slide-out-right",
              "opacity-0",
              "-translate-x-12",
              "translate-x-12"
            );
          } else {
            entry.target.classList.remove("slide-in-left", "slide-in-right");
            entry.target.classList.add(
              i % 2 === 0 ? "slide-out-left" : "slide-out-right"
            );
          }
        },
        { threshold: 0.2 }
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
          className={`w-full bg-primary/5 border border-primary/30 rounded-xl p-4 flex flex-col gap-3 opacity-0 ${
            idx % 2 === 0 ? "-translate-x-12" : "translate-x-12"
          } transition-all duration-1000`}
          style={{ transitionDelay: `${idx * 200}ms` }}
        >
          {/* Banner Placeholder */}
          <div className="w-full aspect-[5/3] bg-primary/10 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
            <span className="text-muted-foreground text-xs">
              Project Banner
            </span>
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
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="size-4" />
            </a>
          </Button>
        </Card>
      ))}
    </div>
  );
}
