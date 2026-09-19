import Image from "next/image";
import { imagePath } from "@/lib/image-path";
import DateFormatter from "./date-formatter";
import { CalendarIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/news" 
          className="inline-flex items-center text-gray-600 hover:text-brand transition-colors duration-300"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          <span>Back to News</span>
        </Link>
      </div>

      {/* Title and Meta */}
      <div className="text-center mb-12">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
          <CalendarIcon className="w-5 h-5" />
          <DateFormatter dateString={date} />
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent z-10" />
        <Image
          src={imagePath(coverImage)}
          alt={`Cover Image for ${title}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -inset-x-4 top-0 h-96 bg-gradient-to-b from-brand/5 to-transparent -z-10 blur-3xl" />
      <div className="absolute -inset-x-4 bottom-0 h-96 bg-gradient-to-t from-accent/5 to-transparent -z-10 blur-3xl" />
    </div>
  );
}
