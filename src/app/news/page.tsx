import { getAllPosts } from "@/lib/api";
import { PostPreview } from "@/app/_components/post-preview";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ScrollToTop } from "@/app/_components/scroll-to-top";
export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-base-200">
      {/* Header Section */}
      <section className="relative py-24 overflow-hidden mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8 rotate-12 hover:rotate-0 transition-transform duration-300">
              <NewspaperIcon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-gray-700 dark:from-white dark:via-primary-light dark:to-gray-300 bg-clip-text text-transparent">
              Latest Updates
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Stay updated with the latest developments in mathematical finance and research breakthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-2xl mx-auto">
          <div className="divide-y divide-gray-200/50 dark:divide-gray-800/50">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PostPreview
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTop />
    </main>
  );
} 