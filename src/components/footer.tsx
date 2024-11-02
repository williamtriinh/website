import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-2xl items-center justify-between px-8 pb-4 pt-8">
        <p className="text-xs text-muted-foreground">
          William Trinh (
          <Link
            href="https://github.com/williamtriinh"
            className="text-foreground underline"
          >
            Github
          </Link>
          )
        </p>
        <div className="flex gap-2 text-xs text-muted-foreground">
          <Link
            href="https://github.com/williamtriinh/website"
            className="text-foreground underline"
          >
            Source
          </Link>
          <div>|</div>
          <span>
            Inspired by &nbsp;
            <Link
              href="http://delba.dev"
              className="text-foreground underline"
              target="_blank"
            >
              delba.dev
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
