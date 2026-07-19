export function MemberCardDetails({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) {
  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <h3 className="text-xl font-medium text-primary mb-1">{name}</h3>
        <p className="text-sm text-gray-500 font-light tracking-wide">
          {title}
        </p>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
    </div>
  );
}
