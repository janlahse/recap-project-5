import { render, screen } from "@testing-library/react";
import { DetailsPage } from "./DetailsPage";

const mockPieces = {
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: 2018,
  genre: "Abstract Painting",
  isLoading: false,
};

// Test to check if the DetailsPage component renders without crashing
test("renders loading state", () => {
  const mockPiecesLoading = {
    ...mockPieces,
    isLoading: true,
  };
  render(<DetailsPage {...mockPiecesLoading} />);

  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});

test("renders the image", () => {
  render(<DetailsPage {...mockPieces} />);

  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();

  expect(image.getAttribute("src")).toContain(
    encodeURIComponent(mockPieces.image)
  );

  expect(image).toHaveAttribute("alt", mockPieces.name);
});

test("renders art piece name", () => {
  render(<DetailsPage {...mockPieces} />);

  const artPieceName = screen.getByText(mockPieces.name);

  expect(artPieceName).toBeInTheDocument();
});
