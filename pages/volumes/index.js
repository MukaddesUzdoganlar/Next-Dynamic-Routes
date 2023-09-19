import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import Router from "next/router";

export default function Volumes() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.slug}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          const { slug } = getRandomElement(volumes);
          Router.push(`/volumes/${slug}`);
        }}
      >
        Get A Random Book
      </button>
    </>
  );
}
