import Container from "@/app/_components/container";
import { HeroSection } from "@/app/_components/hero-section";
import { MoreStories } from "@/app/_components/more-stories";
import { ResearchAreasSection } from "./_components/research-areas-section";
import FacultyGrid from "@/app/_components/faculty-members";
import FacultyStudentsGrid from "./_components/faculty-students";
import { AboutUs } from "./_components/about-us";
import { VideoShowcase } from "./_components/video-showcase";
import { featuredVideos } from '@/contents/featured-videos';
import { ScrollToTop } from "./_components/scroll-to-top";

import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts().slice(0, 3);

  return (
    <main>
        <HeroSection />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          <AboutUs />
          <VideoShowcase videos={featuredVideos} />
          <ResearchAreasSection />
          <FacultyGrid />
          <FacultyStudentsGrid />
          <ScrollToTop />
      </Container>
    </main>
  );
}
