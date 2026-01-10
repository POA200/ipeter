"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { WebDevProjects } from "./web-dev-projects";
import { GraphicDesignProjects } from "./graphic-design-projects";
import { UiUxProjects } from "./uiux-projects";

const FILTERS = [
  { label: "UI UX Design", value: "uiux" },
  { label: "Web Development", value: "web" },
  { label: "Visual & Graphic Design", value: "graphic" },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("uiux");

  return (
    <section id="projects" className="w-full py-12 md:py-24 px-4 md:px-24">
      <div className="flex flex-wrap gap-1 mb-8 justify-center">
        {FILTERS.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? "default" : "outline"}
            className="rounded-full px-5 py-2 text-sm font-semibold"
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>
      {filter === "web" && <WebDevProjects />}
      {filter === "graphic" && <GraphicDesignProjects />}
      {filter === "uiux" && <UiUxProjects />}
    </section>
  );
}
