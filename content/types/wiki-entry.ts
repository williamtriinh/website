import { defineDocumentType } from "contentlayer2/source-files";

export const WikiEntry = defineDocumentType(() => ({
  name: "WikiEntry",
  contentType: "mdx",
  filePathPattern: "wiki-entries/*.mdx",
  fields: {
    name: { type: "string", required: true },
    short: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (definition) =>
        definition._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));
