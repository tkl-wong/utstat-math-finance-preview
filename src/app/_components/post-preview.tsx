import Link from "next/link";
import DateFormatter from "./date-formatter";
import { CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Link 
      href={`/news/${slug}`}
      className="group relative -mx-6 block px-6 py-7 transition-colors duration-300 hover:bg-brand/[0.02]"
    >
      <div className="relative">
        {/* Date */}
        <div className="mb-3 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
          <CalendarIcon className="w-4 h-4" />
          <DateFormatter dateString={date} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-brand dark:text-white">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-400">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="inline-flex items-center text-brand font-medium group-hover:translate-x-1 transition-transform duration-300">
          Read Article
          <ArrowRightIcon className="w-4 h-4 ml-1.5" />
        </div>
      </div>
    </Link>
  );
}
