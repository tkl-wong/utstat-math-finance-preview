import FacultyGrid from "@/app/_components/faculty-members";
import FacultyStudentsGrid from "@/app/_components/faculty-students";
import PastMembers from "@/app/_components/past-members";

export default function PeoplePage() {
  return (
    <main className="min-h-screen bg-base-200 pt-16">
      <section className="border-b border-base-300/70 bg-base-100 px-6 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-base-content">
            People
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-base-content/70">
            Faculty, postdoctoral researchers, and students in the University of
            Toronto Mathematical Finance group.
          </p>
        </div>
      </section>

      <FacultyGrid />
      <FacultyStudentsGrid />
      <PastMembers />
    </main>
  );
}
