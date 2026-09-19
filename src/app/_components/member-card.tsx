'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EnvelopeIcon, GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
  </svg>
);

export const MemberCard = ({ member, variant = 'faculty' }: { member: FacultyMember, variant?: 'faculty' | 'student' }) => {
  const isFaculty = variant === 'faculty';
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(member.image && member.image !== '#' && !imageFailed);
  const initials = member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  if (isFaculty) {
    return (
      <div className="h-full">
        <div className="
          relative bg-white
          rounded-xl overflow-hidden
          border border-gray-100 dark:border-gray-800
          transition-all duration-300 ease-out
          hover:border-brand/20
          hover:shadow-lg hover:shadow-gray-100/20 dark:hover:shadow-black/20
          h-full flex flex-col
        ">
          {/* Image Section - Fixed aspect ratio */}
          <div className="relative w-full pt-[75%]">
            <div className="absolute inset-0">
              {hasImage ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: member.imagePosition ?? 'center' }}
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-brand/10 text-5xl font-semibold text-brand/70">
                  {initials}
                </div>
              )}
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
              <div className="flex flex-wrap items-center gap-1.5">
                {member.links.email && (
                  <a
                    href={`mailto:${member.links.email}`}
                    className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800"
                    title="Email"
                    aria-label={`Email ${member.name}`}
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                  </a>
                )}
                {member.links.website && (
                  <a
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800"
                    title="Personal website"
                    aria-label={`${member.name}'s personal website`}
                  >
                    <GlobeAltIcon className="w-4 h-4" />
                  </a>
                )}
                {member.links.googleScholar && (
                  <a
                    href={member.links.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800"
                    title="Google Scholar"
                    aria-label={`${member.name} on Google Scholar`}
                  >
                    <AcademicCapIcon className="h-4 w-4" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand dark:text-gray-300 dark:hover:bg-gray-800"
                    title="LinkedIn"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon className="h-4 w-4" />
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
        relative bg-white
        rounded-xl overflow-hidden
        border border-gray-100 dark:border-gray-800
        transition-all duration-300
        hover:border-brand/20
        hover:shadow-lg hover:shadow-gray-100/20 dark:hover:shadow-black/20
        h-full
      ">
        <div className="p-6 h-full flex">
          <div className="flex gap-5 h-full">
            {/* Avatar */}
            <div className="relative w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
              {hasImage ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: member.imagePosition ?? 'center' }}
                  sizes="72px"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-brand/10 text-lg font-semibold text-brand/70">
                  {initials}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand/80 dark:text-brand/70 mt-1">
                    {member.title}
                  </p>
                  {member.since && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Since {member.since}
                    </p>
                  )}
                </div>

                {/* Contact Icons */}
                <div className="flex gap-1 flex-shrink-0">
                  {member.links.email && (
                    <a
                      href={`mailto:${member.links.email}`}
                      className="
                        p-1.5 rounded-lg text-gray-500
                        hover:text-brand hover:bg-gray-50 dark:hover:bg-gray-800
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
                        hover:text-brand hover:bg-gray-50 dark:hover:bg-gray-800
                        transition-colors
                      "
                      title="Website"
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.googleScholar && (
                    <a
                      href={member.links.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-brand dark:hover:bg-gray-800"
                      title="Google Scholar"
                      aria-label={`${member.name} on Google Scholar`}
                    >
                      <AcademicCapIcon className="h-4 w-4" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-brand dark:hover:bg-gray-800"
                      title="LinkedIn"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="h-4 w-4" />
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
