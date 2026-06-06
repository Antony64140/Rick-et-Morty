import { Character as CharacterType } from "@/types/character";

interface FavoritesDropdownProps {
  favorites: CharacterType[];
}

export default function FavoritesDropdown({
  favorites,
}: FavoritesDropdownProps) {
  return (
    <div className="relative group">

      <button className="cursor-pointer font-bold">
        ❤️ Favoris ({favorites.length})
      </button>

      <div className="absolute right-0 hidden group-hover:block w-64 max-h-40 overflow-y-auto bg-white border rounded-lg shadow-lg z-50">
        {favorites.length === 0 ? (
          <p className="p-3 text-gray-500">
            Aucun favori
          </p>) : (
          favorites.map((character) => (
            <div
              key={character.id}
              className="p-3 border-b hover:bg-gray-100">
              <div
  key={character.id}
  className="flex items-center gap-3 p-3 border-b hover:bg-slate-100 transition">
  <img src={character.image} alt={character.name} className="w-12 h-12 rounded-full" />
                 <div>
         <p className="font-semibold text-slate-800">
                 {character.name}
          </p>
         <p className="text-sm text-slate-500">
                     {character.status}
                    </p>
                </div>
            </div>
            </div>)))}
      </div>
    </div>);}