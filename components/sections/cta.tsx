"use client";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="w-full flex justify-center items-center py-16 md:py-24 px-4 md:px-0">
      <div className="w-full max-w-4xl bg-primary/5 border border-primary/60 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Ready to scale your vision?
        </h2>
        <p className="text-base md:text-lg text-black/80 dark:text-white/80 mb-8 max-w-2xl">
          Whether you need high-fidelity UI/UX, brand identity, or a full-stack
          dApp interface, let's build something impactful together
        </p>
        <Button asChild size="lg" className="rounded-full px-6">
          <a href="#contact">
            Get in Touch <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
