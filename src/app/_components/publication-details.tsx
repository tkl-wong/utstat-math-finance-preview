import { BookOpenIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function PublicationDetails({
  title,
  venue,
  publishedAt,
  authors,
  abstract,
  tags,
}: {
  title: string;
  venue: string;
  publishedAt: Date;
  authors: string[];
  abstract: string;
  tags: string[];
}) {
  return (
    <>
      <div>
        <h3 className="text-base font-semibold leading-snug text-brand">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">
          {authors.join(", ")}
        </p>
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
          <BookOpenIcon className="h-4 w-4" />
          <span>{venue}</span>
          <span>•</span>
          <time dateTime={publishedAt.toISOString()}>
            {publishedAt.toLocaleDateString("en-US", {
              year: "numeric",
            })}
          </time>
        </div>
        {tags.length > 0 ? (
          <div className="mt-2 flex flex-wrap items-center gap-1.5" aria-label="Keywords">
            <span className="mr-0.5 text-xs font-medium text-gray-500">Keywords:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {abstract ? (
        <details className="group">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-xs font-medium text-brand hover:text-brand/80">
            <span className="group-open:hidden">Show abstract</span>
            <span className="hidden group-open:inline">Hide abstract</span>
            <ChevronDownIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            {abstract}
          </p>
        </details>
      ) : null}
    </>
  );
}
