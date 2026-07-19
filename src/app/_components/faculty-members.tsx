import React from "react";
import { MemberCard } from "./member-card";
import { facultyMembersData } from "@/contents/faculty-members";

const FacultyGrid = () => {
  return (
    <section className="relative py-20 lg:py-28">
      <a className="anchor" id="faculty-members" />
      {/* Background */}
      <div className="absolute inset-0" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="
            text-4xl lg:text-5xl font-bold
            bg-clip-text text-transparent
            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600
            dark:from-white dark:via-gray-100 dark:to-gray-300
            mb-6
          ">
            Faculty Members
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Meet our distinguished faculty advancing the field of mathematical finance through groundbreaking research and innovation.
          </p>
        </div>

        {/* Faculty Grid - Fixed width columns for consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {facultyMembersData.map((faculty) => (
            <div className="h-full" key={faculty.name}>
              <MemberCard member={faculty} variant="faculty" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid;
