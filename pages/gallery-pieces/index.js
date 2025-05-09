import React from "react";
import Pieces from "@/components/Pieces/Pieces";

export default function GalleryPieces({ pieces, isLoading }) {
  return <Pieces pieces={pieces} isLoading={isLoading} />;
}
