import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface RatingProps {
  rating?: number;
}

export function Rating({ rating }: RatingProps) {
  if (rating == undefined) {
    return <p className="text-muted-foreground">No rating</p>;
  }

  const stars: React.ReactElement[] = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={rating >= i} />);
  }

  return <div className="flex py-2">{stars}</div>;
}

interface StarProps {
  filled: boolean;
}

function Star({ filled = false }: StarProps) {
  return <StarIcon className={cn("size-5", filled && "fill-current")} />;
}
