"use client";
import React, { useMemo, useState } from "react";
import { PublicationFilters } from "../_components/publication-filters";
import { PublicationList } from "../_components/publication-list";
import { publicationsData } from "@/contents/publications";
import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const PublicationsSection = () => {
  const [selectedFilters, setSelectedFilters] = useState<PublicationFilters>({
    venue: [],
    tags: [],
    search: "",
  });

  const filterOptions = useMemo(() => {
    const options = { venue: new Set<string>(), tags: new Set<string>() };

    publicationsData.forEach((pub) => {
      if (pub.venue) options.venue.add(pub.venue);
      if (pub.tags) pub.tags.forEach((tag) => options.tags.add(tag));
    });

    return {
      venue: Array.from(options.venue),
      tags: Array.from(options.tags),
    };
  }, []);

  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesVenue =
        selectedFilters.venue.length === 0 ||
        selectedFilters.venue.includes(pub.venue);

      const matchesTags =
        selectedFilters.tags.length === 0 ||
        selectedFilters.tags.some((tag) => pub.tags.includes(tag));

      const matchesSearch =
        pub.title.toLowerCase().includes(selectedFilters.search.toLowerCase()) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(selectedFilters.search.toLowerCase())
        );

      return matchesVenue && matchesTags && matchesSearch;
    });
  }, [selectedFilters, publicationsData]);

  const groupedByYear = useMemo(() => {
    const grouped: Record<string, typeof publicationsData> = {};
    filteredPublications.forEach((pub) => {
      const year = new Date(pub.publishedAt).getFullYear().toString();
      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(pub);
    });

    return Object.entries(grouped).sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA));
  }, [filteredPublications]);

  const handleFilterToggle = (category: keyof PublicationFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? (prev[category] as string[]).filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleSearchChange = (query: string) => {
    setSelectedFilters((prev) => ({ ...prev, search: query }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      venue: [],
      tags: [],
      search: "",
    });
  };
  
  return (
    <main className="min-h-screen bg-base-200">
      {/* Header Section */}
      <section className="relative py-24 overflow-hidden mb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8 rotate-3 hover:rotate-0 transition-transform duration-300">
              <BookOpenIcon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-base-content via-primary to-base-content/80 bg-clip-text text-transparent">
              Research Publications
            </h1>
            <p className="text-base-content/70 text-lg leading-relaxed">
              Explore our contributions to mathematical finance, featuring groundbreaking research 
              in stochastic analysis, financial mathematics, and computational methods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="lg:grid lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar */}
          <aside className="mb-8 lg:mb-0">
            <div className="sticky top-24">
              <PublicationFilters
                filterOptions={filterOptions}
                selectedFilters={selectedFilters}
                onFilterToggle={handleFilterToggle}
                onSearchChange={handleSearchChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          {/* Publications List */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-base-content/70">
                Showing <span className="font-medium text-base-content">{filteredPublications.length}</span> publications
              </div>
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-focus transition-colors"
              >
                <AcademicCapIcon className="w-5 h-5" />
                <span className="font-medium">Google Scholar</span>
              </a>
            </div>
            <PublicationList groupedByYear={groupedByYear} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicationsSection;
