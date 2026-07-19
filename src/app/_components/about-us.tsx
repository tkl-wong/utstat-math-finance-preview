import React from 'react';
import Image from 'next/image';
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
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            {aboutContent.hero.badge}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-base-content/90 leading-tight mb-8">
            {aboutContent.hero.title}
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            {aboutContent.hero.description}
          </p>
        </div>

        {/* Mission Statements */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {aboutContent.missions.map((mission, index) => (
            <div key={index} className="bg-base-100 p-8 rounded-2xl border border-base-200 hover:border-primary/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <div className="text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={mission.iconPath} />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-4">{mission.title}</h3>
              <p className="text-base-content/70">{mission.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-12">
            {/* Vision Statement */}
            <div className="prose prose-lg">
              <p className="text-base-content/80 leading-relaxed">
                {aboutContent.vision.statement}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {aboutContent.metrics.map((metric, index) => (
                <div key={index} className="bg-base-100 p-8 rounded-xl border border-base-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={metric.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm font-medium text-base-content/70 mt-2">{metric.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex items-center gap-6">
              <Link href="/publications" 
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Explore Our Publications
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
              <a href={`${BASE_PATH}/#research-areas`} 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
              >
                Research Areas
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[600px]">
                <Image
                  src={aboutContent.showcase.image.src}
                  alt={aboutContent.showcase.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <p className="text-white text-sm">
                    {aboutContent.showcase.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
