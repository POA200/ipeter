"use client";
import Image from "next/image";
import Link from "next/link";

function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";

function Hero() {
  // Typing animation for the h1
  const fullText = "I’m ";
  const nameText = "Peter";
  const [typed, setTyped] = useState("");
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typed.length < fullText.length) {
      timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, 120);
    } else if (typedName.length < nameText.length) {
      timeout = setTimeout(() => {
        setTypedName(nameText.slice(0, typedName.length + 1));
      }, 180);
    }
    return () => clearTimeout(timeout);
  }, [typed, typedName]);

  return (
    <section className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-36 py-24 md:py-60 px-4 md:px-12 max-w-screen-xl mx-auto">
      {/* Left: Text Content */}
      <div className="basis-1/2 flex flex-col items-center md:items-start justify-center max-w-xl">
        <h2 className="text-2xl md:text-3xl font-normal mb-2 text-black dark:text-white">
          Hey There!
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
          {typed}
          <span className="text-primary">{typedName}</span>
          <span
            className="inline-block w-2 h-8 align-middle bg-primary animate-pulse ml-1"
            style={{
              visibility:
                typedName.length < nameText.length ? "visible" : "hidden",
            }}
          />
        </h1>
        <p className="text-lg md:text-xl text-foreground mb-6 text-center md:text-left">
          I’m a highly imaginative and creative
          <Link href="#" className="text-primary hover:underline ml-1">
            Graphic, UI/UX Designer
          </Link>{" "}
          and
          <Link href="#" className="text-primary hover:underline ml-1">
            Web Developer
          </Link>
          .
          <br className="hidden md:block" />
          specializing in the Web3 space, proficient in designing and developing
          intuitive graphics and interfaces for projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={() => scrollToId("projects")}
            className="cursor-pointer"
          >
            View Case Studies
          </Button>
          <Button
            className="cursor-pointer"
            variant="outline"
            size="lg"
            asChild
          >
            <a
              href="/iPeter-CV.pdf"
              download
              className="flex items-center gap-2"
            >
              Download My CV <DownloadIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Right: Hero Image with Outlined Stroke */}
      <div className="basis-1/2 flex items-center justify-center">
        <div className="relative p-4 md:p-8 rounded-3xl">
          <div
            className="absolute inset-0 rounded-3xl border-2 border-primary/30 pointer-events-none"
            style={{ zIndex: 1 }}
          />
          <div
            className="absolute inset-4 md:inset-6 rounded-2xl bg-primary/4 border-2 border-primary/60 pointer-events-none"
            style={{ zIndex: 2 }}
          />
          <Image
            src="/ipeterheroimage.png"
            alt="Peter working on laptop"
            width={350}
            height={350}
            priority
            className="relative z-10 rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
