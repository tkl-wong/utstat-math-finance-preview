import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { aboutContent } from '@/contents/about';

export function AboutUs() {
  return (
    <section className="py-16" id="about-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
            {aboutContent.hero.badge}
          </span>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            {aboutContent.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutContent.hero.description}
          </p>
        </div>

        {/* Mission Statements */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutContent.missions.map((mission, index) => (
            <div key={index} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-brand/20">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                <div className="text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={mission.iconPath} />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{mission.title}</h3>
              <p className="flex-1 text-gray-600">{mission.description}</p>
              {mission.href && mission.linkLabel && (
                mission.href.startsWith('http') ? (
                  <a
                    href={mission.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-medium text-brand hover:text-brand/80"
                  >
                    {mission.linkLabel}
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={mission.href}
                    className="mt-5 inline-flex items-center gap-2 font-medium text-brand hover:text-brand/80"
                  >
                    {mission.linkLabel}
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
