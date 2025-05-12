import React from "react";
import Pieces from "@/components/Pieces/Pieces";

export default function FavoritePieces({
  pieces,
  isLoading,
  favoriteSlugs,
  onToggleFavorite,
}) {
  return (
    <Pieces
      pieces={pieces}
      isLoading={isLoading}
      favoriteSlugs={favoriteSlugs}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
