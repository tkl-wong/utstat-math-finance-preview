'use client';

import { ResearchArea } from '@/contents/research-areas';
import { ResearchAreaCard } from './research-area-card';

export function ResearchAreasGrid({ areas }: { areas: ResearchArea[] }) {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {areas.map((area) => (
          <ResearchAreaCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  );
} 