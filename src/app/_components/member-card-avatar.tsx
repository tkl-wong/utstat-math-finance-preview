import Link from "next/link";

export function MemberCardAvatar({
  image,
  profileLink,
  altText,
}: {
  image: string;
  profileLink: string;
  altText: string;
}) {
  return (
    <div className="relative mb-6">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-4 ring-2 ring-primary/5 hover:shadow-xl transition-shadow">
        <Link href={profileLink}>
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
