'use client';

import { ResearchArea } from '@/contents/research-areas';
import { ResearchAreaCard } from './research-area-card';

export function ResearchAreasGrid({ areas }: { areas: ResearchArea[] }) {
  const alphabeticalAreas = [...areas].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section className="py-4">
      <div className="space-y-2">
        {alphabeticalAreas.map((area) => (
          <ResearchAreaCard key={area.slug} area={area} />
        ))}
      </div>
    </section>
  );
}
