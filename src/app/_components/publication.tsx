import { PublicationDetails } from "./publication-details";
import { PublicationLinks } from "./publication-links";

export default function Publication({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="rounded-lg border border-gray-200/70 bg-white px-4 py-3 transition-colors hover:border-brand/25">
      <div className="flex flex-col gap-3">
        <PublicationDetails
          title={publication.title}
          venue={publication.venue}
          publishedAt={publication.publishedAt}
          authors={publication.authors}
          abstract={publication.abstract}
          tags={publication.tags}
        />
        <div className="flex justify-end border-t border-gray-200/60 pt-3">
          <div className="shrink-0">
            <PublicationLinks links={publication.links} />
          </div>
        </div>
      </div>
    </article>
  );
}
