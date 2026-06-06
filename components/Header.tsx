import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center py-6">
      <Image
        src="/logo-rick-morty.png"
        alt="Rick and Morty"
        width={400}
        height={150}
        priority
      />
    </header>
  );
}