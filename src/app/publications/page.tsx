"use client";
import React, { useMemo, useState } from "react";
import { PublicationFilters } from "../_components/publication-filters";
import { PublicationList } from "../_components/publication-list";
import { publicationKeywordOptions, publicationsData } from "@/contents/publications";
import { facultyMembersData } from "@/contents/faculty-members";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const PublicationsSection = () => {
  const [selectedFilters, setSelectedFilters] = useState<PublicationFilters>({
    faculty: [],
    keywords: [],
    search: "",
  });

  const filterOptions = useMemo(() => {
    return {
      faculty: facultyMembersData.map((faculty) => faculty.name),
      keywords: publicationKeywordOptions,
    };
  }, []);

  const filteredPublications = useMemo(() => {
    return publicationsData.filter((pub) => {
      const matchesFaculty =
        selectedFilters.faculty.length === 0 ||
        selectedFilters.faculty.some((faculty) => pub.authors.includes(faculty));

      const matchesKeywords =
        selectedFilters.keywords.length === 0 ||
        selectedFilters.keywords.some((keyword) => pub.tags.includes(keyword));

      const matchesSearch =
        pub.title.toLowerCase().includes(selectedFilters.search.toLowerCase()) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(selectedFilters.search.toLowerCase())
        ) ||
        pub.tags.some((tag) =>
          tag.toLowerCase().includes(selectedFilters.search.toLowerCase())
        );

      return matchesFaculty && matchesKeywords && matchesSearch;
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
      faculty: [],
      keywords: [],
      search: "",
    });
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-24 overflow-hidden mb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.07] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 text-brand mb-8 rotate-3 hover:rotate-0 transition-transform duration-300">
              <BookOpenIcon className="w-8 h-8" />
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Research Publications
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
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
            <div className="mb-6">
              <div className="text-gray-600">
                Showing <span className="font-medium text-gray-900">{filteredPublications.length}</span>{" "}
                {filteredPublications.length === 1 ? "publication" : "publications"}
              </div>
            </div>
            <PublicationList groupedByYear={groupedByYear} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PublicationsSection;
