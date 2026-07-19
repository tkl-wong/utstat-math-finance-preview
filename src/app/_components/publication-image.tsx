export function PublicationImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="w-full sm:w-1/4 relative">
      <div className="h-48 sm:h-full sm:absolute sm:inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover shadow-md transition-all"
        />
      </div>
    </div>
  );
}
