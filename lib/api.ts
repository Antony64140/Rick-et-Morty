import { CharactersResponse } from "@/types/character";


export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getCharacters(
  page: number,
  search: string
): Promise<CharactersResponse> {
  const response = await fetch(
    `${API_URL}/character?page=${page}&name=${search}`);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);}
  const data = await response.json();
  return data;
}
export async function getCharacter(id: string) {
  const response = await fetch(
    `${API_URL}/character/${id}`
  );

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  return response.json();
}