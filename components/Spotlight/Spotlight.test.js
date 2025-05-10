import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const mockPieces = [
  {
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  },
];

// Test to check if the Spotlight component renders without crashing
test("renders loading state", () => {
  render(<Spotlight pieces={mockPieces} isLoading={true} />);

  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});

// Test to check if the Spotlight component renders an empty list
test("renders the image", () => {
  render(<Spotlight pieces={mockPieces} isLoading={false} />);

  const image = screen.getByRole("img");

  expect(image).toBeInTheDocument();

  expect(image.getAttribute("src")).toContain(
    encodeURIComponent(mockPieces[0].imageSource)
  );

  expect(image).toHaveAttribute("alt", mockPieces[0].name);
});

// Test to check if the Spotlight component renders a list of pieces
test("renders art piece name", () => {
  render(<Spotlight pieces={mockPieces} isLoading={false} />);

  const artPieceName = screen.getByText(mockPieces[0].name);

  expect(artPieceName).toBeInTheDocument();
});

// Test to check if the Spotlight component renders a list of pieces
test("renders the artist name", () => {
  render(<Spotlight pieces={mockPieces} isLoading={false} />);

  const artistName = screen.getByText(mockPieces[0].artist);

  expect(artistName).toBeInTheDocument();
});
