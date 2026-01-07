"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import { LayoutDashboard, Code2, Braces } from "lucide-react";
import { useRef, useEffect } from "react";

export default function Skills() {
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.forEach((ref) => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pulse-in");
            entry.target.classList.remove("animate-pulse-out");
          } else {
            entry.target.classList.remove("animate-pulse-in");
            entry.target.classList.add("animate-pulse-out");
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [cardRefs]);

  return (
    <section
      id="skills"
      className="w-full py-6 md:py-12 px-2 md:px-8 bg-primary/5"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center w-full px-2 md:px-12">
        Skills Snapshot
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center w-full max-w-6xl md:m-auto">
        {/* UI UX & DESIGN */}
        <Card
          ref={cardRefs[0]}
          className="w-full h-full max-w-xs mx-auto bg-primary/10 border-primary p-6 sm:p-8 flex flex-col items-center rounded-2xl transition-all duration-700"
          style={{ transitionDelay: "0ms" }}
        >
          <LayoutDashboard className="text-primary mb-2" size={36} />
          <h3 className="text-xl font-bold text-primary mb-2 text-center">
            UI UX & DESIGN
          </h3>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center mb-4 w-full">
            <div className="flex justify-center">
              <Image
                src="/figma.svg"
                alt="Figma"
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/photoshop.svg"
                alt="Photoshop"
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/canva.svg"
                alt="Canva"
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/afinity.svg"
                alt="Affinity"
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/jttr.svg"
                alt="Jitter"
                width={48}
                height={48}
                style={{ width: "48px", height: "48px" }}
              />
            </div>
          </div>
        </Card>
        {/* FRONT-END */}
        <Card
          ref={cardRefs[1]}
          className="w-full h-full max-w-xs mx-auto bg-primary/10 border-primary p-6 sm:p-8 flex flex-col items-center rounded-2xl transition-all duration-700"
          style={{ transitionDelay: "150ms" }}
        >
          <Code2 className="text-primary mb-2" size={36} />
          <h3 className="text-xl font-bold text-primary mb-2 text-center">
            WEB DEVELOPMENT
          </h3>
          <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
            <Image
              src="/html-5.svg"
              alt="HTML5"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/css-3.svg"
              alt="CSS3"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/javascript.svg"
              alt="JavaScript"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/typescript.svg"
              alt="TypeScript"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/tailwindcss.svg"
              alt="TailwindCSS"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/react.svg"
              alt="React"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/nextjs.svg"
              alt="Next.js"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Card>
        {/* BLOCKCHAIN */}
        <Card
          ref={cardRefs[2]}
          className="w-full h-full max-w-xs mx-auto bg-primary/10 border-primary p-6 sm:p-8 flex flex-col items-center rounded-2xl transition-all duration-700"
          style={{ transitionDelay: "300ms" }}
        >
          <Braces className="text-primary mb-2" size={36} />
          <h3 className="text-xl font-bold text-primary mb-2 text-center">
            BLOCKCHAIN
          </h3>
          <div className="flex gap-4 items-center mb-4">
            <Image
              src="/clarity.svg"
              alt="Clarity"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              src="/stacks.svg"
              alt="Stacks"
              width={32}
              height={32}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Card>
      </div>
      <div className="mt-10 text-center text-md md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
        I bridge the gap between complex blockchain logic and user-centric
        design. My background as both a Graphic Designer and Web Developer
        allows me to create dApps that aren't just functional, but visually
        compelling and easy to navigate for the everyday user.
      </div>
    </section>
  );
}
