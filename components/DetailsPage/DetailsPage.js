import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export function DetailsPage() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>(error.message)</div>;
  if (!data) return <div>Loading...</div>;

  const art = data[0];

  return (
    <div>
      <img src={art.imageSource} alt={art.name} width="400" />
      <h1>{art.name}</h1>
      <p>Artist: {art.artist}</p>
      <p>Year: {art.year}</p>
      <p>Genre: {art.genre}</p>
      <Link href="#">
        <button>Back to list</button>
      </Link>
    </div>
  );
}
