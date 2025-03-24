import type { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import { Rating } from "./rating";

interface BookEntryProps {
  book: Book;
}

export function BookEntry({ book }: BookEntryProps) {
  return (
    <div className="flex gap-4">
      <div className="relative h-[120px] w-[80px] min-w-[80px]">
        <Image
          src={book.image}
          alt={`A book cover of ${book.title}`}
          fill
          className="rounded-sm object-contain"
        />
      </div>
      <div className="flex flex-col">
        <Link
          className="font-semibold"
          href={`https://goodreads.com/book/show/${book.id}`}
          target="_blank"
        >
          {book.title}
        </Link>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        {book.finishedAt && (
          <p className="text-sm text-muted-foreground/75">
            {dayjs(book.finishedAt).format("MMM D, YYYY")}
          </p>
        )}
        {book.finishedAt && <Rating rating={book.rating} />}
      </div>
    </div>
  );
}
