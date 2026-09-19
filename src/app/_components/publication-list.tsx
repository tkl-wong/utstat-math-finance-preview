import Publication from "./publication";

interface PublicationListProps {
  groupedByYear: [string, Publication[]][];
}

export function PublicationList({
  groupedByYear,
}: PublicationListProps) {
  return (
    <div className="space-y-10">
      {groupedByYear.map(([year, publications]) => (
        <div key={year}>
          <h3 className="mb-4 text-xl font-bold text-gray-900">{year}</h3>
          <div className="space-y-3">
            {publications.map((pub) => (
              <Publication key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      ))}
      {groupedByYear.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-200 text-gray-500 mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">
            No publications found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
