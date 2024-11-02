import { WikiEntryContent } from "@/components/wiki-entry-content";
import { allWikiEntries } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface WikiEntryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function WikiEntryPage({ params }: WikiEntryPageProps) {
  const { slug } = await params;

  const entry = allWikiEntries.find((entry) => entry.slug === slug);

  if (!entry) {
    notFound();
  }

  return <WikiEntryContent entry={entry} />;
}
