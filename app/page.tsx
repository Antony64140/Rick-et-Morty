"use client";

import { useEffect, useState } from "react";
import { Character as CharacterType } from "@/types/character";
import { getCharacters } from "@/lib/api";
import { toggleFavorite, loadFavorites, saveFavorites } from "@/lib/favorites";

import Header from "@/components/Header";
import FavoritesDropdown from "@/components/FavoritesDropdown";
import Character from "@/components/Character";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  async function fetchCharacters() {
    try {
      const data = await getCharacters(currentPage, search);

      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error("Erreur fetch :", error);
    }
  }

  function handleToggleFavorite(id: number) {
    setFavorites((prevFavorites) =>
      toggleFavorite(id, prevFavorites)
    );
  }

  useEffect(() => {
    fetchCharacters();
  }, [currentPage, search]);

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const sortedCharacters = [...characters].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const favoriteCharacters = sortedCharacters.filter((character) =>
    favorites.includes(character.id)
  );

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <FavoritesDropdown favorites={favoriteCharacters} />
        </div>

        <Header />

        <div className="flex justify-center mb-6">
          <SearchInput
            search={search}setSearch={setSearch} />
        </div>

        <div className="flex justify-center mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedCharacters.map((character) => (
            <Character
              key={character.id}
              character={character}
              isFavorite={favorites.includes(character.id)}
              onToggleFavorite={handleToggleFavorite}/>))}
        </div>
      </div>
    </main>);}