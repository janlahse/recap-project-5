import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const StyledLayout = styled.div``;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      {children}
      <Navigation />
    </StyledLayout>
  );
}
