import Image from "next/image";
import Link from "next/link";

export function DetailsPage({ pieces, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;
  const index = 0;

  return (
    <div>
      <Image
        src={pieces[index].imageSource}
        width={500}
        height={500}
        quality={70}
        alt={pieces[index].name}
      />
      <h1>{pieces[index].name}</h1>
      <p>Artist: {pieces[index].artist}</p>
      <p>Year: {pieces[index].year}</p>
      <p>Genre: {pieces[index].genre}</p>
      <Link href="#">
        <button>Back to list</button>
      </Link>
    </div>
  );
}
