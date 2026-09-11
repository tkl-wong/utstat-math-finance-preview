"use client";

import React, { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeId: string;
}

interface VideoShowcaseProps {
  videos: Video[];
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="py-24 bg-base-200/50">
      <a className="anchor" id="media"></a>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-base-content">
            Featured Videos
          </h2>
          <p className="text-xl text-base-content/70">
            Watch our latest talks, interviews, and research presentations from leading experts in mathematical finance.
          </p>
        </div>

        {/* Video List */}
        <div className="mx-auto max-w-5xl space-y-6">
          {videos.map((video) => (
            <button
              type="button"
              key={video.id}
              className="group grid w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:grid-cols-[minmax(260px,0.9fr)_minmax(0,1.1fr)]"
              onClick={() => setSelectedVideo(video)}
              aria-label={`Watch ${video.title}`}
            >
              <div className="relative aspect-video overflow-hidden bg-base-300">
                <img
                  src={video.thumbnailUrl}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors duration-300 group-hover:bg-black/15">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <PlayIcon className="ml-1 h-7 w-7" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-base-content">
                  {video.title}
                </h3>
                <p className="text-base leading-relaxed text-base-content/70">
                  {video.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-primary">
                  <PlayIcon className="h-4 w-4" />
                  Watch video
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  title={selectedVideo.title}
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </div>

              {/* Video Info */}
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
                <p className="text-white/80">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 
