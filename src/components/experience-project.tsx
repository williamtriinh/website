"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ExperienceProjectProps { }

function ExperienceProject({
  children,
}: React.PropsWithChildren<ExperienceProjectProps>) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          expanded ? "flex" : "hidden",
          "-ml-3 mb-2 flex-col gap-3 border-l-2 border-l-accent-foreground pl-3",
        )}
      >
        {children}
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide" : "Display"} Projects
      </Button>
    </div>
  );
}

interface ExperienceProjectItem {
  title: string;
  date: string;
  url?: string;
}

function ExperienceProjectItem({
  title,
  date,
  url,
  children,
}: React.PropsWithChildren<ExperienceProjectItem>) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="mb-3 flex flex-col sm:mb-0 sm:w-[190px]">
        {url == null ? (
          <label className="font-bold text-foreground">{title}</label>
        ) : (
          <Link
            href={url}
            className="font-bold text-foreground underline"
            target="_blank"
          >
            {title}
          </Link>
        )}
        <p className="text-sm text-muted-foreground/75">{date}</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export { ExperienceProject, ExperienceProjectItem };
