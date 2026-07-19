"use client";
import { useState } from "react";

import { SearchBar } from "@/app/_components/search-bar";
import { faqsData } from "@/contents/faq";
import { ScrollToTop } from "@/app/_components/scroll-to-top";
interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  items: FAQItemProps[];
}

// Individual FAQ Item Component
const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group transition-all duration-200 ease-in-out border border-base-content/10 rounded-xl overflow-hidden hover:border-primary/20 ${isOpen ? 'bg-base-100' : 'bg-base-100/50'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center gap-4"
      >
        <h3 className="text-lg font-medium text-left text-base-content group-hover:text-primary transition-colors">
          {question}
        </h3>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-base-content/50 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-base-content/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// FAQ Category Component
const FAQCategory = ({ title, items }: FAQCategoryProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-primary rounded-full"></div>
        <h2 className="text-2xl font-bold text-base-content">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // FAQ Data remains the same as your original component
  

  // Filter FAQ items based on search query
  const filteredFAQData = faqsData
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-base-content bg-clip-text">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-primary/80 mx-auto rounded-full"></div>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Find answers to common questions about our Mathematical Finance program
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {faqsData.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === category.category 
                  ? 'bg-primary text-primary-content shadow-lg shadow-primary/20' 
                  : 'bg-base-100 text-base-content/70 hover:bg-primary/10 hover:text-primary'
                }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <SearchBar 
            placeholder="Search for answers..." 
            onSearch={setSearchQuery}
            value={searchQuery}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-14 top-1/2 -translate-y-1/2 p-2 text-base-content/40 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* FAQ Content */}
        <div className="space-y-12">
          {filteredFAQData
            .filter(category => !activeCategory || category.category === activeCategory)
            .map((category, index) => (
              <FAQCategory
                key={index}
                title={category.category}
                items={category.items}
              />
          ))}
          
          {/* No Results State */}
          {filteredFAQData.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-100 mb-4">
                <svg className="w-8 h-8 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-2">No matching questions found</h3>
              <p className="text-base-content/70">
                Try adjusting your search terms or browse all questions above
              </p>
            </div>
          )}
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default FAQPage;
