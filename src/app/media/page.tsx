import { PhotoGallery } from "@/app/_components/photo-gallery";
import { VideoShowcase } from "@/app/_components/video-showcase";
import { featuredVideos } from "@/contents/featured-videos";
import {
  researchRetreat2026Gallery,
  researchRetreatGallery,
} from "@/contents/photo-galleries";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <VideoShowcase videos={featuredVideos} />
      <PhotoGallery gallery={researchRetreat2026Gallery} />
      <PhotoGallery gallery={researchRetreatGallery} />
    </main>
  );
}
