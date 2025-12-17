"use client";
import Link from "next/link";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80, // adjust for navbar height
      behavior: "smooth",
    });
  }
}
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary/4 backdrop-blur border-b border-primary/60 flex items-center justify-between px-6 md:px-46 py-3 md:py-5 fixed top-0 z-40 overflow-x-hidden">
      <a
        href="/"
        className="text-primary font-bold text-xl cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        iPeter
      </a>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-2">
        <Button variant="link" asChild>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("skills");
            }}
          >
            Skills
          </a>
        </Button>
        <Button variant="link" asChild>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("projects");
            }}
          >
            Projects
          </a>
        </Button>
      </div>
      <div className="md:block">
        <Button asChild className="cursor-pointer rounded-full" size="lg">
          <Link href="#contact">
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
