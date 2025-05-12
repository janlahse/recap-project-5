import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledImage = styled(Image)`
  height: 400px;
  width: auto;
`;

export function DetailsPage({
  image,
  name,
  artist,
  year,
  genre,
  isLoading,
  dimensions,
}) {
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      <StyledImage
        src={image}
        width={dimensions.width}
        height={dimensions.height}
        quality={70}
        alt={name}
      />
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
