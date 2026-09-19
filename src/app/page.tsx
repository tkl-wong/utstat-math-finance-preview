import Container from "@/app/_components/container";
import { HeroSection } from "@/app/_components/hero-section";
import { MoreStories } from "@/app/_components/more-stories";
import { ResearchAreasSection } from "./_components/research-areas-section";
import { AboutUs } from "./_components/about-us";
import { ScrollToTop } from "./_components/scroll-to-top";

import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts().slice(0, 3);

  return (
    <main>
        <HeroSection />
        <Container>
          <AboutUs />
          <ResearchAreasSection />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          <ScrollToTop />
      </Container>
    </main>
  );
}
