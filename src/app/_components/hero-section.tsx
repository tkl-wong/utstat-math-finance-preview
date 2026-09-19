import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/lib/image-path";
import { heroContent } from "@/contents/hero";

const backgroundImagePath = imagePath(heroContent.background.imagePath);
const foregroundImagePath = imagePath(heroContent.foregroundImage.imagePath);

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImagePath})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/40 via-transparent to-transparent backdrop-blur-sm" />

      {/* Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-20">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="inline-block animate-slide-up text-white">
                  {heroContent.title.main}
                </span>
                <span className="block text-accent mt-4 drop-shadow-lg animate-slide-up-delayed">
                  {heroContent.title.highlight}
                </span>
              </h1>
              <p className="text-xl leading-relaxed max-w-2xl text-gray-200 font-light animate-fade-in-delayed">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-6 pt-6 animate-fade-in-delayed-2">
                <Link
                  href={heroContent.cta.primary.href}
                  className="group relative inline-flex h-12 items-center justify-center rounded-lg bg-accent px-4 shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/50"
                >
                  <div className="absolute inset-0 bg-accent/50 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <span className="relative z-10 text-white font-medium">
                    {heroContent.cta.primary.text}
                  </span>
                  <ChevronRightIcon className="relative z-10 ml-2 w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href={heroContent.cta.secondary.href}
                  className="group inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
                >
                  <span className="text-white font-medium group-hover:scale-105 transition-transform duration-300">
                    {heroContent.cta.secondary.text}
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column - Group Photo */}
            <div className="hidden lg:flex relative items-center justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-brand/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
              <div className="relative w-full max-w-lg aspect-[16/10] overflow-hidden rounded-2xl border border-white/30 shadow-2xl shadow-black/40">
                <Image
                  src={foregroundImagePath}
                  alt={heroContent.foregroundImage.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 0px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
