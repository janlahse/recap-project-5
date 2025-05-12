import { useRouter } from "next/router";
import { DetailsPage } from "@/components/DetailsPage/DetailsPage";

export default function PiecesDetailPage({ pieces, isLoading }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces?.find((p) => p.slug === slug);

  if (!piece) {
    return null;
  }

  return (
    <DetailsPage
      image={piece.imageSource}
      name={piece.name}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
      isLoading={isLoading}
      dimensions={piece.dimensions}
    />
  );
}
