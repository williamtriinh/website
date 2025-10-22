import Link from "next/link";

interface ExperienceEntryProps {
  title: string;
  date: string;
  role: string;
  url: string;
}

export function ExperienceEntry({
  title,
  date,
  role,
  url,
  children,
}: React.PropsWithChildren<ExperienceEntryProps>) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="mb-3 flex flex-col sm:mb-0 sm:w-[190px]">
        <Link
          href={url}
          className="font-bold text-foreground underline"
          target="_blank"
        >
          {title}
        </Link>
        <p className="text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground/75">{date}</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
