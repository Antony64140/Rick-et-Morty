export function toggleFavorite(
  id: number,
  favorites: number[]
): number[] {
  return favorites.includes(id)
    ? favorites.filter(
        (favoriteId) => favoriteId !== id
      )
    : [...favorites, id];
}
export function loadFavorites(): number[] {
  const storedFavorites =
    localStorage.getItem("favorites");

  return storedFavorites
    ? JSON.parse(storedFavorites)
    : [];
}
export function saveFavorites(
  favorites: number[]
) {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}