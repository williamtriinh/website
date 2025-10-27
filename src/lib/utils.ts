import type { Book } from "@/types";
import Parser from "rss-parser";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function parseGoodreadsRSS(url: URL): Promise<Book[]> {
  const parser = new Parser({
    customFields: {
      item: ["book_id", "book_large_image_url", "author_name", "user_rating", "user_read_at"],
    },
  });
  const feed = await parser.parseURL(url.toString());

  return feed.items.map((item): Book => ({
    id: item.book_id,
    title: item.title!,
    image: item.book_large_image_url,
    author: item.author_name,
    rating: item.user_rating || undefined,
    finishedAt: item.user_read_at,
  }));
}
