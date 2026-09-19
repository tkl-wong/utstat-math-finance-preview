import React from 'react';
import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { aboutContent } from '@/contents/about';

export function AboutUs() {
  return (
    <section className="py-24" id="about-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="inline-block bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium mb-6">
            {aboutContent.hero.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {aboutContent.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {aboutContent.hero.description}
          </p>
        </div>

        {/* Mission Statements */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {aboutContent.missions.map((mission, index) => (
            <div key={index} className="flex flex-col bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <div className="text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={mission.iconPath} />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{mission.title}</h3>
              <p className="flex-1 text-gray-600">{mission.description}</p>
              {mission.href && mission.linkLabel && (
                mission.href.startsWith('http') ? (
                  <a
                    href={mission.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-medium text-brand hover:text-brand/80"
                  >
                    {mission.linkLabel}
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={mission.href}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-brand hover:text-brand/80"
                  >
                    {mission.linkLabel}
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/publications"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand/90 transition-colors duration-300"
          >
            Explore Our Publications
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <a href={`${BASE_PATH}/#research-areas`}
            className="inline-flex items-center gap-2 text-brand hover:text-brand/80 font-medium"
          >
            Research Areas
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
