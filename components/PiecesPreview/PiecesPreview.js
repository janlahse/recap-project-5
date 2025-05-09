import Image from "next/image";
import Link from "next/link";

export default function PiecesPreview({ title, image, artist, slug }) {
  return (
    <div>
      <Link href={`gallery-pieces/${slug}`}>
        <Image src={image} alt={title} width={300} height={300} />
      </Link>

      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
