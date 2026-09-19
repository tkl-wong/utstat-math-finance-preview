import React from "react";
import { 
  DocumentTextIcon,
  LinkIcon,
  AcademicCapIcon,
  DocumentArrowDownIcon
} from "@heroicons/react/24/outline";

export function PublicationLinks({
  links,
}: {
  links: { doi?: string; publisher?: string; arxiv?: string; ssrn?: string; pdf?: string; code?: string };
}) {
  const linkIcons = {
    doi: { icon: LinkIcon, label: "DOI" },
    publisher: { icon: LinkIcon, label: "Published" },
    arxiv: { icon: AcademicCapIcon, label: "arXiv" },
    ssrn: { icon: AcademicCapIcon, label: "SSRN" },
    pdf: { icon: DocumentArrowDownIcon, label: "PDF" },
    code: { icon: DocumentTextIcon, label: "Code" },
  };

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(links).map(([key, url]) =>
        url ? (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-brand transition-colors hover:text-brand/80"
          >
            {React.createElement(linkIcons[key as keyof typeof links].icon, {
              className: "h-4 w-4",
            })}
            <span>{linkIcons[key as keyof typeof links].label}</span>
          </a>
        ) : null
      )}
    </div>
  );
}
