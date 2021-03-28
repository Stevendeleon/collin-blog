import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <span className="p-1 text-xl text-green-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-600 hover:underline">
            Home
          </span>
        </Link>
      </li>
    </ul>
  );
}
