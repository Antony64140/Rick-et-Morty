"use client";

import { Character as CharacterType } from "@/types/character";
import { useEffect, useState } from "react";
import { getCharacters } from "@/lib/api";
import Character from "../components/Character";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
async function fetchCharacters() {
  try {
    console.log("Page demandée :", currentPage);

    const data = await getCharacters(currentPage, search);

    console.log(data);

    setCharacters(data.results);
    setTotalPages(data.info.pages);
  } catch (error) {
    console.error("Erreur fetch :", error);}}
useEffect(() => {
  fetchCharacters();
}, [currentPage, search]);

const sortedCharacters = [...characters].sort((a, b) =>
  a.name.localeCompare(b.name));
const filteredCharacters = sortedCharacters.filter((character) =>
  character.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main>
      <div>
  <h1>Rick & Morty</h1>
  <p>Page actuelle : {currentPage}</p>
  <p>Nombre de pages : {totalPages}</p>
  <p>Nombre de personnages : {characters.length}</p>
  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
  <div className="flex justify-end mb-6">
  <SearchInput
    search={search}
    setSearch={setSearch}
  />
</div>
 <div className="grid grid-cols-4 gap-4">
 {filteredCharacters.map((character) => (
    <Character
      key={character.id}
      character={character}/>))}
</div>
</div>
    </main>);}