"use client";

import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { WikiEntry } from "contentlayer/generated";

interface WikiEntriesListProps {
  entries: WikiEntry[];
}

export function WikiEntriesList({ entries }: WikiEntriesListProps) {
  const [search, setSearch] = React.useState("");

  const filteredEntries = React.useMemo(() => {
    if (search) {
      return entries.filter((entry) =>
        entry.name.toLowerCase().includes(search.trim()),
      );
    }
    return entries;
  }, [search, entries]);

  return (
    <div className="flex flex-col gap-y-8">
      <Input
        onKeyDown={(event) => {
          if (event.code === "Escape") setSearch("");
        }}
        placeholder="Search"
        onChange={(event) => setSearch(event.currentTarget.value.toLowerCase())}
        value={search}
      />
      <ul>
        {filteredEntries.map((entry) => (
          <li key={entry.slug} className="my-2">
            <p className="mt-1 pl-8 -indent-8 text-base text-muted-foreground">
              <Link
                className="text-foreground underline"
                href={`/wiki/${entry.slug}`}
              >
                {entry.name}
              </Link>
              &nbsp;-&nbsp;
              {entry.short}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
