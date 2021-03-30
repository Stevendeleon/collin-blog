import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
