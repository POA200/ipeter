"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

import { useRef, useEffect } from "react";

export default function BottomCTA() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ref = sectionRef.current;
    if (!ref) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.classList.add("pulse-in");
        } else {
          ref.classList.remove("pulse-in");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex justify-center items-center py-16 md:py-24 px-4 md:px-0">
      <div
        ref={sectionRef}
        className="w-full max-w-4xl bg-primary/5 border border-primary/60 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Ready to scale your vision?
        </h2>
        <p className="text-base md:text-lg text-black/80 dark:text-white/80 mb-8 max-w-2xl">
          Whether you need high-fidelity UI/UX, brand identity, or a full-stack
          dApp interface, let's build something impactful together
        </p>
        <Button asChild size="lg" className="rounded-full px-6">
          <a
            href="https://t.me/iPetercrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in Touch <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
