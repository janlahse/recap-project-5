import Spotlight from "@/components/Spotlight/Spotlight";

export default function HomePage({
  pieces,
  isLoading,
  favoriteSlugs,
  onToggleFavorite,
}) {
  return (
    <div>
      <Spotlight
        pieces={pieces}
        isLoading={isLoading}
        onToggleFavorite={onToggleFavorite}
        favoriteSlugs={favoriteSlugs}
      />
    </div>
  );
}
