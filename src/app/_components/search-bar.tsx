import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface FAQSearchProps {
  placeholder: string;
  onSearch: (query: string) => void;
  value?: string;
}

export const SearchBar = ({ placeholder, onSearch, value }: FAQSearchProps) => {
  return (
    <div className="relative w-full mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        className="input input-lg input-bordered w-full"
        onChange={(e) => onSearch(e.target.value)}
        value={value || ""}
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
