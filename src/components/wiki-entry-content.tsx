import { WikiEntry } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { Code } from "./ui/mdx/code";

interface WikiEntryProps {
  entry: WikiEntry;
}

export function WikiEntryContent({ entry }: WikiEntryProps) {
  const MDXContent = useMDXComponent(entry.body.code);

  return (
    <>
      <MDXContent
        components={{
          code: Code,
          p: (props) => <p className="text-muted-foreground" {...props} />,
          h1: (props) => <h1 className="text-2xl font-bold" {...props} />,
          ol: (props) => (
            <ol
              className="mt-2 list-decimal space-y-1 pl-12 text-muted-foreground"
              {...props}
            />
          ),
        }}
      />
    </>
  );
}
