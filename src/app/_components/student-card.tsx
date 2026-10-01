'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { imagePath } from '@/lib/image-path';

export const StudentCard = ({ student }: { student: FacultyMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="flex items-center p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Avatar */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={imagePath(student.image)}
            alt={student.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>

        {/* Basic Info */}
        <div className="ml-4 flex-grow">
          <h3 className="text-base font-medium text-gray-900 dark:text-white">{student.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{student.title}</p>
        </div>

        {/* Expand Button */}
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`}
        />
      </div>

      {/* Expandable Content */}
      <div className={`
        grid transition-all duration-200 ease-in-out
        ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
      `}>
        <div className="overflow-hidden">
          <div className="p-4 pt-0 space-y-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300">{student.bio}</p>
            
            {/* Contact Links */}
            <div className="flex gap-3">
              {student.links.email && (
                <a
                  href={`mailto:${student.links.email}`}
                  className="text-sm text-brand hover:text-brand/80 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Email
                </a>
              )}
              {student.links.website && (
                <a
                  href={student.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand hover:text-brand/80 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 