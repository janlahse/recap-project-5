import { render, screen } from "@testing-library/react";
import PiecesPreview from "./PiecesPreview";

const mockPieces = {
  artist: "Steve Johnson",
  slug: "orange-red-and-green-abstract-painting",
  title: "Orange Red and Green Abstract Painting",
  image: "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
};

// Test to check if the PiecesPreview component renders without crashing
test("renders the image", () => {
  render(<PiecesPreview {...mockPieces} isLoading={false} />);

  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();

  expect(image.getAttribute("src")).toContain(
    encodeURIComponent(mockPieces.image)
  );

  expect(image).toHaveAttribute("alt", mockPieces.title);
});

// Test to check if the PiecesPreview component renders a list of pieces
test("renders art piece name", () => {
  render(<PiecesPreview {...mockPieces} isLoading={false} />);

  const titleElement = screen.getByText(mockPieces.title);
  expect(titleElement).toBeInTheDocument();
});

// Test to check if the PiecesPreview component renders a list of pieces
test("renders the artist name", () => {
  render(<PiecesPreview {...mockPieces} isLoading={false} />);

  const artistName = screen.getByText(mockPieces.artist);
  expect(artistName).toBeInTheDocument();
});
