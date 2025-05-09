import Image from "next/image";

export default function PiecesPreview({ title, image, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={300} height={300} />

      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
