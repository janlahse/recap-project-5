import PiecesPreview from "../PiecesPreview/PiecesPreview";

export default function Pieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <PiecesPreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
