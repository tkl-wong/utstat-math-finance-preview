import React from "react";
import { SearchBar } from "./search-bar";
import { FunnelIcon } from "@heroicons/react/24/outline";

interface PublicationFiltersProps {
  filterOptions: PublicationFilterOptions;
  selectedFilters: PublicationFilters;
  onFilterToggle: (category: keyof PublicationFilters, value: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export function PublicationFilters({
  filterOptions,
  selectedFilters,
  onFilterToggle,
  onSearchChange,
  onClearFilters,
}: PublicationFiltersProps) {
  const categoryLabels: Record<keyof PublicationFilterOptions, string> = {
    faculty: "Faculty",
    keywords: "Keywords",
  };

  const renderFilterButtons = (
    category: keyof PublicationFilterOptions,
    options: string[]
  ) => {
    return options.map((option) => {
      const isActive = selectedFilters[category]?.includes(option);
      return (
        <button
          key={option}
          onClick={() => onFilterToggle(category, option)}
          className={`
            px-4 py-2 rounded-lg text-sm transition-all duration-200
            ${isActive
              ? "bg-brand text-white shadow-sm"
              : "bg-white text-gray-600 hover:text-gray-900 hover:bg-white/80"
            }
          `}
          aria-pressed={isActive}
        >
          {option}
        </button>
      );
    });
  };

  const hasActiveFilters = selectedFilters.faculty.length > 0 ||
    selectedFilters.keywords.length > 0 ||
    selectedFilters.search.length > 0;

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-3">
          Search
        </h3>
        <SearchBar
          placeholder="Search publications..."
          onSearch={onSearchChange}
          value={selectedFilters.search}
        />
      </div>

      {/* Filter Groups */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-2">
            <FunnelIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-sm text-brand hover:text-brand/80 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-medium text-gray-600">
              {categoryLabels[category as keyof PublicationFilterOptions]}
              {selectedFilters[category as keyof PublicationFilters]?.length > 0 && (
                <span
                  aria-label={`${selectedFilters[category as keyof PublicationFilters]?.length} selected`}
                  className="ml-2 text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full"
                >
                  {selectedFilters[category as keyof PublicationFilters]?.length}
                </span>
              )}
            </h3>
            <div className="flex flex-wrap gap-2">
              {renderFilterButtons(category as keyof PublicationFilterOptions, options)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
