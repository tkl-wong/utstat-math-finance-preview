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
      className="group block py-12 relative hover:bg-brand/[0.02] -mx-6 px-6 transition-colors duration-300"
    >
      <div className="relative">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <CalendarIcon className="w-4 h-4" />
          <DateFormatter dateString={date} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-brand transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
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
