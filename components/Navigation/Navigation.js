import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.ul`
  position: fixed;
  bottom: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 35px;
`;

const StyledLink1 = styled(Link)`
  background-color: white;
  padding: 0 15px 15px 15px;
  border-right: solid 3px black;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink2 = styled(Link)`
  background-color: white;
  padding: 0 15px 15px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <li>
        <StyledLink1 href="/">Homepage</StyledLink1>
      </li>
      <li>
        <StyledLink1 href="/gallery-pieces">Gallery</StyledLink1>
      </li>
      <li>
        <StyledLink2 href="/">Favorites</StyledLink2>
      </li>
    </StyledNavigation>
  );
}
