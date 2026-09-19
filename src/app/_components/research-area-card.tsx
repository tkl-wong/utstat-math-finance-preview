import { ResearchArea } from '@/contents/research-areas';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

export function ResearchAreaCard({ area }: { area: ResearchArea }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-gray-200 py-10 first:border-t-0 dark:border-gray-800"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {area.title}
          </h3>
          <p className="mt-2 text-lg text-brand">
            {area.subtitle}
          </p>
          {area.description && (
            <p className="mt-5 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
              {area.description}
            </p>
          )}
        </div>

        {area.featuredPapers && area.featuredPapers.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Selected publications
            </h4>
            <ul className="mt-4 space-y-5">
              {area.featuredPapers.map((paper) => (
                <li key={paper.href}>
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-start gap-1.5 font-medium leading-snug text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand/80 hover:decoration-current"
                  >
                    <span>{paper.title}</span>
                    <ArrowTopRightOnSquareIcon
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {paper.authors.join(", ")}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {paper.venue} · {paper.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
