import React from "react";
import { MemberCard } from "./member-card";
import { facultyStudentsData } from "@/contents/faculty-students";

const FacultyStudentsGrid = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            PhD Students & Postdocs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet our exceptional postdocs and students advancing research in mathematical finance.
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facultyStudentsData.map((student) => (
            <MemberCard key={student.name} member={student} variant="student" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyStudentsGrid;
