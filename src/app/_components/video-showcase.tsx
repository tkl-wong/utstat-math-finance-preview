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

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video rounded-xl overflow-hidden bg-base-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayIcon className="w-16 h-16 text-white mb-4" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl mx-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
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