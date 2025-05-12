import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: start;
`;

const StyledDiv2 = styled.div`
  margin-left: 20px;
  width: 300px;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: 300px;
`;

const StyledHeader = styled.h2`
  margin-top: 5px;
  margin-bottom: 0;
`;

const StyledParagraph = styled.p`
  margin-top: 10px;
  margin-bottom: 40px;
`;

export default function PiecesPreview({
  title,
  image,
  artist,
  slug,
  dimensions,
  onToggleFavorite,
}) {
  return (
    <StyledDiv>
      <Link href={`gallery-pieces/${slug}`}>
        <StyledImage
          src={image}
          alt={title}
          width={dimensions.width}
          height={dimensions.height}
        />
      </Link>
      <StyledDiv2>
        <StyledHeader>{title}</StyledHeader>
        <StyledParagraph>{artist}</StyledParagraph>
      </StyledDiv2>
    </StyledDiv>
  );
}
