import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="mt-8">
      <a className="anchor" id="headlines"></a>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          News
        </h2>
        <Link
          href="/news"
          className="group inline-flex items-center gap-2 text-brand hover:text-brand/80 transition-colors duration-300"
        >
          <span className="font-medium">View All</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
