import { PublicationDetails } from "./publication-details";

export default function Publication({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="rounded-lg border border-gray-200/70 bg-white px-4 py-3 transition-colors hover:border-brand/25">
      <PublicationDetails
        title={publication.title}
        venue={publication.venue}
        publishedAt={publication.publishedAt}
        authors={publication.authors}
        abstract={publication.abstract}
        tags={publication.tags}
        links={publication.links}
      />
    </article>
  );
}
