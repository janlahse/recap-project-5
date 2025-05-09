import PiecesPreview from "../PiecesPreview/PiecesPreview";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
`;

export default function Pieces({ pieces, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <ul>
      {pieces.map((piece) => (
        <StyledLi key={piece.slug}>
          <PiecesPreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
          />
        </StyledLi>
      ))}
    </ul>
  );
}
