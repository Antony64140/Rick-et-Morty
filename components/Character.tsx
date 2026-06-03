import Image from "next/image";
import { Character as CharacterType } from "@/types/character";

interface CharacterProps {
  character: CharacterType;
}

export default function Character({ character }: CharacterProps) {
  const statusColor =
    character.status === "Alive"
      ? "text-green-500"
      : character.status === "Dead"
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div
      className="overflow-hidden rounded-xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl " >
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        className="w-full h-auto"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-black">
          {character.name}
        </h2>

        <p className="text-black">
          {character.gender}
        </p>

        <p className={`font-semibold ${statusColor}`}>
          {character.status}
        </p>
      </div>
    </div>
  );
}