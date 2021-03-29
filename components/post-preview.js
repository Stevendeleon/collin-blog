import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h3 className="mb-3 font-sans text-5xl font-bold leading-snug text-center text-blue-300">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:text-yellow-300 hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg text-right">
        <DateFormatter dateString={date} />
      </div>
      <p className="pb-4 ml-6 text-lg font-light leading-relaxed text-left">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
