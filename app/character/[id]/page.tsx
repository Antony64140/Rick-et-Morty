import Image from "next/image";
import { getCharacter } from "@/lib/api";

interface CharacterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CharacterPage({
  params,
}: CharacterPageProps) {
  const { id } = await params;

  const character = await getCharacter(id);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-8">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">
              {character.name}
            </h1>

            <p>Status : {character.status}</p>
            <p>Species : {character.species}</p>
            <p>Gender : {character.gender}</p>
            <p>Origin : {character.origin.name}</p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Histoire
          </h2>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </section>
      </div>
    </main>
  );
}