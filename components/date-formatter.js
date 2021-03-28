import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time
      style={{ fontStyle: "italic" }}
      dateTime={dateString}
      className="text-gray-600"
    >
      - {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
