"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allPosts, type Post } from "contentlayer/generated";
import Link from "next/link";

export default async function RootPage() {
  const posts = allPosts.sort(
    (a, b) =>
      Date.parse(b.publishedAt).valueOf() - Date.parse(a.publishedAt).valueOf(),
  );

  if (!posts.length) {
    return (
      <p className="text-center text-sm text-muted-foreground">No posts yet!</p>
    );
  }

  return (
    <div className="flex flex-col gap-y-4">
      {posts.map((post, index) => {
        return <PostCard key={index} post={post} />;
      })}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} passHref legacyBehavior>
      <a>
        <Card className="transition hover:bg-card/75">
          <CardHeader>
            <CardTitle>
              {post.title}
              <p className="text-muted- mt-2 text-xs font-normal text-muted-foreground/70">
                {post.publishedAt}
              </p>
            </CardTitle>
          </CardHeader>
          {post.short ? (
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.short}</p>
            </CardContent>
          ) : null}
        </Card>
      </a>
    </Link>
  );
}
