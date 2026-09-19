import React from 'react';
import { ResearchAreasGrid } from './research-areas-grid';
import { researchAreasContent } from '@/contents/research-areas';

export function ResearchAreasSection() {
  return (
    <section id="research-areas" className="relative py-20 overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header with animations */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="animate-fade-in text-4xl font-bold text-gray-900 md:text-5xl">
              {researchAreasContent.header.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-delayed">
              {researchAreasContent.header.description}
            </p>
          </div>

          {/* Animated line separator */}
          <div className="relative h-px w-full max-w-3xl mx-auto mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/50 to-transparent animate-shimmer" />
          </div>

          {/* Research areas grid */}
          <div className="relative">
            {/* Grid background effects */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-4 inset-y-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent blur-3xl dark:via-brand/10"
            />
            
            <div className="relative z-10">
              <ResearchAreasGrid areas={researchAreasContent.areas} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
