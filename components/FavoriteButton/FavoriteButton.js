export function FavoriteButton({ slug, onToggleFavorite, isFavorite }) {
  return (
    <button
      type="button"
      isFavorite={isFavorite}
      onClick={() => {
        onToggleFavorite(slug);
      }}
    >
      {isFavorite ? "❤️" : "🩶"}
    </button>
  );
}
