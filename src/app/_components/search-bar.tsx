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
        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 pr-12 text-gray-900 outline-none transition-colors placeholder:text-gray-500 focus:border-brand focus:ring-2 focus:ring-brand/20"
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
