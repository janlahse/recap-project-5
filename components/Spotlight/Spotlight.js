import Image from "next/image";
import styled from "styled-components";

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

export default function Spotlight({ pieces, isLoading }) {
  if (isLoading) return <h2>Loading...</h2>;
  let index = Math.floor(Math.random() * pieces.length);

  return (
    <div>
      <StyledImage
        src={pieces[index].imageSource}
        width={pieces[index].dimensions.width}
        height={pieces[index].dimensions.height}
        alt={pieces[index].name}
      />
      <StyledHeader>{pieces[index].name}</StyledHeader>
      <StyledHeader2>{pieces[index].artist}</StyledHeader2>
    </div>
  );
}
