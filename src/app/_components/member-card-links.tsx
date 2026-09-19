import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

export function MemberCardLinks({ links }: { links: { email?: string; website?: string } }) {
  return (
    <div className="flex justify-center gap-6 pt-2">
      {links.email && (
        <a
          href={`mailto:${links.email}`}
          className="text-gray-400 hover:text-brand transition-colors duration-300"
          aria-label="Email"
        >
          <EnvelopeIcon className="h-5 w-5" />
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          className="text-gray-400 hover:text-brand transition-colors duration-300"
          aria-label="Website"
        >
          <GlobeAltIcon className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
