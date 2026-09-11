import { PublicationImage } from "./publication-image";
import { PublicationDetails } from "./publication-details";
import { PublicationTags } from "./publication-tags";
import { PublicationLinks } from "./publication-links";

export default function Publication({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <PublicationImage image={publication.image} title={publication.title} />
      <div
        className={`flex flex-col flex-1 space-y-4 ${
          publication.image ? "sm:pl-6" : ""
        }`}
      >
        <PublicationDetails
          title={publication.title}
          venue={publication.venue}
          publishedAt={publication.publishedAt}
          authors={publication.authors}
          abstract={publication.abstract}
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-auto pt-4">
          <PublicationTags tags={publication.tags} />
          <div className="sm:ml-auto">
            <PublicationLinks links={publication.links} />
          </div>
        </div>
      </div>
    </article>
  );
}
