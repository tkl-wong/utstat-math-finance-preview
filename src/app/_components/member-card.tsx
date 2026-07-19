'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EnvelopeIcon, GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export const MemberCard = ({ member, variant = 'faculty' }: { member: FacultyMember, variant?: 'faculty' | 'student' }) => {
  const isFaculty = variant === 'faculty';

  if (isFaculty) {
    return (
      <div className="h-full">
        <div className="
          relative bg-base-100
          rounded-xl overflow-hidden
          border border-gray-100 dark:border-gray-800
          transition-all duration-300 ease-out
          hover:border-primary/20
          hover:shadow-lg hover:shadow-gray-100/20 dark:hover:shadow-black/20
          h-full flex flex-col
        ">
          {/* Image Section - Fixed aspect ratio */}
          <div className="relative w-full pt-[75%]">
            <div className="absolute inset-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-white/90">
                    {member.title}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col p-6">
            <p className="flex-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {member.bio}
            </p>

            {/* Contact Links */}
            <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-800/80">
              <div className="flex items-center gap-3">
                {member.links.email && (
                  <a
                    href={`mailto:${member.links.email}`}
                    className="
                      flex items-center gap-2 px-3 py-1.5 rounded-lg
                      text-gray-600 hover:text-primary dark:text-gray-300
                      hover:bg-gray-50 dark:hover:bg-gray-800
                      transition-colors
                    "
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    <span className="text-sm">Contact</span>
                  </a>
                )}
                {member.links.website && (
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 px-3 py-1.5 rounded-lg
                      text-gray-600 hover:text-primary dark:text-gray-300
                      hover:bg-gray-50 dark:hover:bg-gray-800
                      transition-colors
                    "
                  >
                    <GlobeAltIcon className="w-4 h-4" />
                    <span className="text-sm">Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Student Card - Refined List Style
  return (
    <div className="h-full">
      <div className="
        relative bg-base-100
        rounded-xl overflow-hidden
        border border-gray-100 dark:border-gray-800
        transition-all duration-300
        hover:border-primary/20
        hover:shadow-lg hover:shadow-gray-100/20 dark:hover:shadow-black/20
        h-full
      ">
        <div className="p-6 h-full flex">
          <div className="flex gap-5 h-full">
            {/* Avatar */}
            <div className="relative w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="72px"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary/80 dark:text-primary/70 mt-1">
                    {member.title}
                  </p>
                </div>

                {/* Contact Icons */}
                <div className="flex gap-1 flex-shrink-0">
                  {member.links.email && (
                    <a
                      href={`mailto:${member.links.email}`}
                      className="
                        p-1.5 rounded-lg text-gray-500
                        hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800
                        transition-colors
                      "
                      title="Email"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.website && (
                    <a
                      href={member.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-1.5 rounded-lg text-gray-500
                        hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800
                        transition-colors
                      "
                      title="Website"
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
