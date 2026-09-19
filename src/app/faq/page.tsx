"use client";
import { useState } from "react";

import { faqsData } from "@/contents/faq";
import { ScrollToTop } from "@/app/_components/scroll-to-top";
interface FAQItemProps {
  question: string;
  answer: string;
  bullets?: string[];
  link?: {
    label: string;
    href: string;
  };
}

interface FAQCategoryProps {
  title: string;
  items: FAQItemProps[];
}

// Individual FAQ Item Component
const FAQItem = ({ question, answer, bullets, link }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`group transition-all duration-200 ease-in-out border border-gray-900/10 rounded-xl overflow-hidden hover:border-brand/20 ${isOpen ? 'bg-white' : 'bg-white/50'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center gap-4"
      >
        <h3 className="text-lg font-medium text-left text-gray-900 group-hover:text-brand transition-colors">
          {question}
        </h3>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-500 group-hover:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700 leading-relaxed">{answer}</p>
        {bullets && (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-medium text-brand hover:underline"
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
};

// FAQ Category Component
const FAQCategory = ({ title, items }: FAQCategoryProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 bg-brand rounded-full"></div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            bullets={item.bullets}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 bg-clip-text">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-brand/80 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Mathematical Finance program
          </p>
        </div>

        {/* FAQ Content */}
        <div className="space-y-12">
          {faqsData.map((category) => (
            <FAQCategory
              key={category.category}
              title={category.category}
              items={category.items}
            />
          ))}
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default FAQPage;
