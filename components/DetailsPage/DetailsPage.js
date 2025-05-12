import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  text-align: center;
`;

const StyledImage = styled(Image)`
  height: 400px;
  width: auto;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  margin: 10px;
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
    <StyledDiv>
      <StyledImage
        src={image}
        width={dimensions.width}
        height={dimensions.height}
        quality={70}
        alt={name}
      />
      <StyledDiv2>
        <h1>{name}</h1>
        <StyledParagraph>Artist: {artist}</StyledParagraph>
        <StyledParagraph>Year: {year}</StyledParagraph>
        <StyledParagraph>Genre: {genre}</StyledParagraph>
        <Link href="/gallery-pieces">
          <button>Back to list</button>
        </Link>
      </StyledDiv2>
    </StyledDiv>
  );
}
