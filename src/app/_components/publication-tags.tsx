export function PublicationTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs rounded-full bg-base-300 text-base-content/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
