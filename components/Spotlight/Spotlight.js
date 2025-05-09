import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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

export default function Spotlight() {
  const { data, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <h2>Loading...</h2>;
  let index = Math.floor(Math.random() * data.length);

  return (
    <div>
      <StyledImage
        src={data[index].imageSource}
        width={data[index].dimensions.width}
        height={data[index].dimensions.height}
        alt={data[index].name}
      />
      <StyledHeader>{data[index].name}</StyledHeader>
      <StyledHeader2>{data[index].artist}</StyledHeader2>
    </div>
  );
}
