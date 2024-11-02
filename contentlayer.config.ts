import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import { WikiEntry } from "./content/types/wiki-entry";
import { Post } from "./content/types/post";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [WikiEntry, Post],
});
