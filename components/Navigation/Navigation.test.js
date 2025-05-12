import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation links with correct text and href attributes", () => {
  render(<Navigation />);

  // Check if the navigation is rendered
  const homepageLink = screen.getByRole("link", { name: "Homepage" });
  expect(homepageLink).toBeInTheDocument();
  expect(homepageLink).toHaveAttribute("href", "/");

  // Check if the "Gallery"-link is rendered
  const galleryLink = screen.getByRole("link", { name: "Gallery" });
  expect(galleryLink).toBeInTheDocument();
  expect(galleryLink).toHaveAttribute("href", "/gallery-pieces");

  // Check if the "Favorites"-link is rendered
  const favoritesLink = screen.getByRole("link", { name: "Favorites" });
  expect(favoritesLink).toBeInTheDocument();
  expect(favoritesLink).toHaveAttribute("href", "/");
});
