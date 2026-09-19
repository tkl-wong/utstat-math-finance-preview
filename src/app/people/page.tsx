import FacultyGrid from "@/app/_components/faculty-members";
import FacultyStudentsGrid from "@/app/_components/faculty-students";
import PastMembers from "@/app/_components/past-members";
import Link from "next/link";

export default function PeoplePage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16">
      <section className="border-b border-gray-200/70 bg-white px-6 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            People
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Faculty, postdoctoral researchers, and students in the University of
            Toronto Mathematical Finance group.
          </p>
        </div>
      </section>

      <FacultyGrid />
      <FacultyStudentsGrid />

      <section className="px-4 pb-20 sm:px-6" aria-labelledby="join-our-group-heading">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl bg-brand px-8 py-10 text-center text-white shadow-sm sm:flex-row sm:text-left">
          <div>
            <h2 id="join-our-group-heading" className="text-2xl font-bold">
              Join our group
            </h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Interested in studying or conducting research with us? Find answers about opportunities and how to get in touch.
            </p>
          </div>
          <Link
            href="/faq"
            className="shrink-0 rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-50"
          >
            Visit the FAQ
          </Link>
        </div>
      </section>

      <PastMembers />
    </main>
  );
}
