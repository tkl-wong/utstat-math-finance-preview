import { MemberCard } from "./member-card";
import { pastMembersData } from "@/contents/past-members";

const PastMembers = () => {
  return (
    <section className="py-20 border-t border-gray-200/70" id="past-members">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Past Members
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Former students and postdoctoral researchers affiliated with the Mathematical Finance group.
          </p>
        </div>

        {pastMembersData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pastMembersData.map((member) => (
              <MemberCard key={member.name} member={member} variant="student" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PastMembers;
