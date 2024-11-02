import { WikiEntriesList } from "@/components/wiki-entries-list";
import { allWikiEntries } from "contentlayer/generated";
import React from "react";

export default async function WikiPage() {
  const entries = allWikiEntries.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <>
      <div className="px-8 pb-8">
        <p className="text-muted-foreground">
          A personal encylopedia for tech-related topics. There are{" "}
          <span className="text-foreground">{entries.length}</span> definition
          entries.
        </p>
      </div>
      <WikiEntriesList entries={entries} />
    </>
  );
}
