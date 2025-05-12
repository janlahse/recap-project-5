import Image from "next/image";
import styled from "styled-components";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { useEffect, useState } from "react";

const StyledImage = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin-bottom: 0;
`;
const StyledHeader2 = styled.h2`
  text-align: center;
  color: #222;
  margin-top: 5px;
`;

export default function Spotlight({
  pieces,
  favoriteSlugs,
  isLoading,
  onToggleFavorite,
}) {
  const [piece, setPiece] = useState(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * pieces.length);
    setPiece(pieces[index]);
  }, [pieces, piece]);

  if ((isLoading && !pieces) || !piece) return <h2>Loading...</h2>;

  const isFavorite = favoriteSlugs.includes(piece.slug);

  return (
    <div>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={piece.slug}
      />
      <StyledImage
        src={piece.imageSource}
        width={piece.dimensions.width}
        height={piece.dimensions.height}
        alt={piece.name}
      />
      <StyledHeader>{piece.name}</StyledHeader>
      <StyledHeader2>{piece.artist}</StyledHeader2>
    </div>
  );
}
