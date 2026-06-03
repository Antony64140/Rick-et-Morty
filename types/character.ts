export interface Character {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
}
export interface CharactersResponse {
  info: {
    pages: number;
  };
  results: Character[];
}