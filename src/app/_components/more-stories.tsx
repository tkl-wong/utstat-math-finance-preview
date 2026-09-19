import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className="mt-4">
      <a className="anchor" id="headlines"></a>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
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
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
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
