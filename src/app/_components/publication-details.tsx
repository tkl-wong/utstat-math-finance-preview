import { BookOpenIcon } from "@heroicons/react/24/outline";

export function PublicationDetails({
  title,
  venue,
  publishedAt,
  authors,
  abstract,
}: {
  title: string;
  venue: string;
  publishedAt: Date;
  authors: string[];
  abstract: string;
}) {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 text-sm text-base-content/70 mb-2">
          <BookOpenIcon className="h-4 w-4" />
          <span>{venue}</span>
          <span>•</span>
          <time dateTime={publishedAt.toISOString()}>
            {publishedAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </time>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-base-content/70 mb-4">
          {authors.join(", ")}
        </p>
      </div>
      <p className="text-sm text-base-content/80">{abstract}</p>
    </>
  );
}
