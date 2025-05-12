import { render, screen } from "@testing-library/react";
import Pieces from "./Pieces";
import PiecesPreview from "../PiecesPreview/PiecesPreview";

// Mock the PiecesPreview component.
// This is done to isolate the Pieces component for unit testing
// and to allow us to check if PiecesPreview is called with the correct props.
jest.mock("../PiecesPreview/PiecesPreview", () => {
  return jest.fn(({ title, image, artist, slug }) => (
    <div data-testid="pieces-preview">
      <p>{title}</p>
      <p>{artist}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} />
      <span>{slug}</span>
    </div>
  ));
});

const mockPieces = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
];

// Test to check if the Pieces component renders without crashing
test("renders loading state", () => {
  render(<Pieces pieces={mockPieces} isLoading={true} />);
  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});

// Test to check if the Pieces component renders an empty list
test("handles empty pieces array by rendering an empty list", () => {
  render(<Pieces pieces={[]} isLoading={false} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

// Test to check if the Pieces component renders a list of pieces
// and passes the correct props to the PiecesPreview component.
test("renders a list of pieces and passes correct props to PiecesPreview", () => {
  render(<Pieces pieces={mockPieces} isLoading={false} />);

  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

  // Check if the list is rendered
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(mockPieces.length);

  // Check if the list is rendered
  const previewElements = screen.getAllByTestId("pieces-preview");
  expect(previewElements).toHaveLength(mockPieces.length);

  // Check if PiecesPreview was called with the correct props
  mockPieces.forEach((piece, index) => {
    expect(PiecesPreview).toHaveBeenNthCalledWith(
      index + 1,
      expect.objectContaining({
        title: piece.name,
        image: piece.imageSource,
        artist: piece.artist,
        slug: piece.slug,
      }),
      {} // This is the default props object that is passed to the component
    );
  });
});
