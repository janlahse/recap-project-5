import PiecesPreview from "../PiecesPreview/PiecesPreview";
import styled from "styled-components";

const StyledUl = styled.ul``;

const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 30px;
`;

export default function Pieces({ pieces, isLoading, favoriteSlugs }) {
  if (isLoading) return <h2>Loading...</h2>;

  //if favSlugs is passed: display filtered pieces
  let certrainPieces;
  if (favoriteSlugs === undefined) {
    certrainPieces = pieces;
  } else {
    certrainPieces = pieces.filter((piece) =>
      favoriteSlugs.includes(piece.slug)
    );
  }

  return (
    <StyledUl>
      {certrainPieces.map((piece) => (
        <StyledLi key={piece.slug}>
          <PiecesPreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
            dimensions={piece.dimensions}
          />
        </StyledLi>
      ))}
    </StyledUl>
  );
}
