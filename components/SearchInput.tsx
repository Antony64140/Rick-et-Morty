interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({
  search,
  setSearch,
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Rechercher un personnage..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className=" w-64 rounded-lg border px-4 py-2" /> );}