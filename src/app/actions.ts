"use server";

import { parseGoodreadsRSS } from "@/lib/utils";
import type { Book } from "@/types";

export async function fetchCurrentBooks(): Promise<Book[]> {
  const url = new URL(
    `https://www.goodreads.com/review/list_rss/${process.env.GOODREADS_USER_ID}`,
  );
  url.searchParams.append("shelf", "currently-reading");

  return await parseGoodreadsRSS(url);
}

export async function fetchPastBooks(): Promise<Book[]> {
  const url = new URL(
    `https://www.goodreads.com/review/list_rss/${process.env.GOODREADS_USER_ID}`,
  );
  url.searchParams.append("shelf", "read");
  url.searchParams.append("sort", "date_read");
  url.searchParams.append("per_page", "3");

  return await parseGoodreadsRSS(url);
}
