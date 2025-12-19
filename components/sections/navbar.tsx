"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  }
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 w-full bg-primary/4 backdrop-blur-md border-b border-primary/50 z-[100]">
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-12 lg:px-24">
        <a
          href="/"
          className="text-primary font-bold text-xl flex-shrink-0"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          iPeter
        </a>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToId("skills")}
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToId("projects")}
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Projects
          </button>
        </div>

        {/* Action Button - Always Visible, slightly smaller on mobile */}
        <Button asChild className="rounded-full shadow-sm" size="sm">
          <a
            href="https://t.me/iPetercrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden xs:inline">Contact Me</span>
            <span className="xs:hidden">Contact Me</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </nav>
  );
}
