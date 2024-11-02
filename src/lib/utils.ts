import type { Book } from "@/types";
import * as cheerio from "cheerio";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function parseGoodreadsRSS(url: string | URL): Promise<Book[]> {
  const response = await fetch(url, { method: "GET" });
  const $ = cheerio.load(await response.text(), { xml: true }, false);
  const books: Book[] = [];

  $("channel")
    .children("item")
    .each(function () {
      books.push({
        id: $(this).find("book_id").text(),
        title: $(this).find("title").text(),
        image: $(this).find("book_large_image_url").text(),
        author: $(this).find("author_name").text(),
        rating: parseInt($(this).find("user_rating").text()) || undefined,
        finishedAt: $(this).find("user_read_at").text(),
      });
    });

  return books;
}
