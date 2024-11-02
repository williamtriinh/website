"use server";

import type { Book } from "@/types";
import { fetchCurrentBooks, fetchPastBooks } from "./actions";
import { BookEntry } from "@/components/book-entry";

export default async function RootPage() {
  const currentBooks = await fetchCurrentBooks();
  const pastBooks = await fetchPastBooks();

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-muted-foreground">
        Hi, I'm William. I'm a software developer who enjoys running, reading,
        playing chess (though I'm not very good at it), and playing video games.
        I sometimes write code too.
      </p>
      <CurrentBooks books={currentBooks} />
      <PastBooks books={pastBooks} />
    </div>
  );
}

interface CurrentBooksProps {
  books: Book[];
}

function CurrentBooks({ books }: CurrentBooksProps) {
  if (books.length > 0) {
    return (
      <>
        <p className="text-muted-foreground">I'm currently reading:</p>
        {books.map((book) => (
          <BookEntry key={book.id} book={book} />
        ))}
      </>
    );
  }

  return (
    <p className="text-muted-foreground">
      I'm not reading anything at the moment.
    </p>
  );
}

interface PastBooksProps {
  books: Book[];
}

function PastBooks({ books }: PastBooksProps) {
  return (
    <>
      <p className="text-muted-foreground">The last 3 books I've finished:</p>
      {books.map((book) => (
        <BookEntry key={book.id} book={book} />
      ))}
    </>
  );
}
