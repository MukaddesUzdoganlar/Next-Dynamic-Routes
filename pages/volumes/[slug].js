import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return <p>Volume not found</p>;
  }

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volume;

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Books in this Volume</h2>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <div>
        {previousVolume && (
          <Link href={`/volumes/${previousVolume.slug}`}>
            Previous Volume: {previousVolume.title}
          </Link>
        )}
      </div>
      <div>
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
