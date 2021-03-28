import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, src, slug, height, width }) {
  const image = <span src={src}>{title}</span>;
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : null}
    </div>
  );
}
