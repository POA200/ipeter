"use client";
import { useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";

// Card data for Web Development projects
export const webDevProjects = [
  {
    title: "BLOCKLIFT",
    description:
      "A Web3 educational platform designed to onboard users to Bitcoin L2.",
    role: "Lead Designer & Full-Stack Developer.",
    problem:
      "Complex Bitcoin and Stacks concepts create a high barrier to entry for new users.",
    solution:
      "Led the end-to-end UI/UX design using accessible information architecture to simplify technical concepts.",
    tech: "Built a high-performance frontend using React.js and Tailwind CSS, optimizing asset delivery for fast loading.",
    github: "https://github.com/POA200/blocklift",
    live: "https://blocklift.org",
    banner: "/Blocklift-preview.webp",
  },
  {
    title: "GENSTACKS",
    description:
      "An NFT collection generator platform simplifying asset creation on the Stacks blockchain.",
    role: "Developer & UI/UX.",
    problem:
      "Artists struggle with the technical complexity of managing metadata and layering for PFP collections.",
    solution:
      "Developed a flexible, intuitive user interface to manage asset layering and metadata generation.",
    tech: "Integrated Clarity smart contract interactions to streamline the entire on-chain asset creation flow.",
    github: "https://github.com/POA200/genstacks",
    live: "https://genstacks.fun",
    banner: "/Genstacks-preview.webp",
  },
  {
    title: "OAKDAO",
    description:
      "Building community and education through a decentralized governance structure.",
    role: "UI/UX & Web Developer.",
    problem:
      "DAO missions and governance can feel disorganized or untrustworthy to potential members.",
    solution:
      "Designed and implemented a core landing page and learning system that clearly communicates the mission, and teaches new members about web3.",
    tech: "Prioritized brand consistency and accessibility to build user trust and encourage community participation.",
    github: "https://github.com/POA200/oakdao",
    live: "https://oakdao.pro",
    banner: "/Oakdao-preview.webp",
  },
  {
    title: "STACKS WRAPPED",
    description:
      "A personalized end-of-year data visualization for the Stacks ecosystem.",
    role: "Designer & Developer.",
    problem:
      "On-chain data is often cold and difficult for the average user to interpret or celebrate.",
    solution:
      "Designed compelling data visualizations for transaction metrics badge rewards to boost user confidence.",
    tech: "Utilized Stacks.js and integrated the Stacks Wallet API to securely retrieve and display personalized on-chain data.",
    github: "https://github.com/POA200/stackswrapped",
    live: "https://stackswrapped.fun",
    banner: "/Stackswrapped-preview.webp",
  },
];

export function WebDevProjects() {
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
              "opacity-0",
              "-translate-x-12",
              "translate-x-12",
            );
          } else {
            entry.target.classList.remove("slide-in-left", "slide-in-right");
            entry.target.classList.add(
              "opacity-0",
              i % 2 === 0 ? "-translate-x-12" : "translate-x-12",
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
      {webDevProjects.map((project, idx) => (
        <Card
          key={project.title}
          ref={(el) => {
            cardRefs.current[idx] = el;
            // Do not return anything
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
          <div className="text-xs mb-1">
            <b>Role:</b> {project.role}
          </div>
          <div className="text-xs mb-1">
            <b>The Problem:</b> {project.problem}
          </div>
          <div className="text-xs mb-1">
            <b>The Solution:</b> {project.solution}
          </div>
          <div className="text-xs mb-2">
            <b>The Tech:</b> {project.tech}
          </div>
          <div className="flex gap-2 mt-auto w-full">
            <Button
              asChild
              variant="outline"
              size={"lg"}
              className="flex-1 flex items-center gap-2"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="default"
              size={"lg"}
              className="flex-1 flex items-center gap-2"
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live Link <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function ViewAllWebDevButton() {
  return (
    <div className="mt-12 text-center">
      <Button
        asChild
        size="lg"
        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all"
      >
        <a href="/projects/web-dev">
          View All Web Dev Projects <ArrowRight className="ml-2 size-4" />
        </a>
      </Button>
    </div>
  );
}
