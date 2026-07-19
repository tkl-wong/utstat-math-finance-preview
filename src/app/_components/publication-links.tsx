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
  links: { doi?: string; arxiv?: string; pdf?: string; code?: string };
}) {
  const linkIcons = {
    doi: { icon: LinkIcon, label: "DOI" },
    arxiv: { icon: AcademicCapIcon, label: "arXiv" },
    pdf: { icon: DocumentArrowDownIcon, label: "PDF" },
    code: { icon: DocumentTextIcon, label: "Code" },
  };

  return (
    <div className="flex flex-wrap gap-4 pt-4 mt-auto">
      {Object.entries(links).map(([key, url]) =>
        url ? (
          <a
            key={key}
            href={url}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
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
