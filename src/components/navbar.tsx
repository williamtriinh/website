"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeSelector } from "./theme-selector";

export function Navbar() {
  const [effectActivated, setEffectActivated] = React.useState(false);

  const handleScrollEvent = React.useCallback((event: Event) => {
    setEffectActivated(window.scrollY >= 32);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);
    return () => document.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <nav className="sticky top-0 z-[999] mb-[100px] pt-4">
      <div className="mx-auto w-full max-w-2xl px-5">
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-lg py-4 pl-6 pr-2 transition",
            effectActivated && "shadow-lg outline-white backdrop-blur-md",
          )}
        >
          <ProfileButton />
          <div className="flex">
            <Button variant="ghost">
              <Link href="/posts">Posts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/wiki">Wiki</Link>
            </Button>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function ProfileButton() {
  return (
    <Link href="/">
      <div
        tabIndex={0}
        className="scale cursor-pointer select-none text-base font-black transition hover:scale-110"
      >
        WT
      </div>
    </Link>
  );
}
