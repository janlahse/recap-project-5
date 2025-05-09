import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DetailsPage } from "@/components/DetailsPage/DetailsPage";

export default function PiecesDetailPage({ pieces, isLoading }) {
  const [piece, setPiece] = useState(null);
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    setPiece(pieces.find((piece) => piece.slug === slug));
  }, [piece, pieces, slug]);

  if (!piece) {
    return null;
  }

  return (
    <DetailsPage
      image={piece.imageSource}
      name={piece.title}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      isLoading={isLoading}
    />
  );
}
