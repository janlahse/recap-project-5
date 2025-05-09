import Image from "next/image";
import Link from "next/link";

export function DetailsPage({ image, name, artist, year, genre, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <Image src={image} width={500} height={500} quality={70} alt={name} />
      <h1>{name}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Link href="/gallery-pieces">
        <button>Back to list</button>
      </Link>
    </div>
  );
}
