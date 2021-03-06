import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto bg-transparent sticky-nav bg-opacity-60">
      <Link href="/">
        <img className="cursor-pointer" src="/me.gif" />
      </Link>
      <div className="text-lg font-semibold">
        <Link href="/blog">
          <span className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500">
            Blog
          </span>
        </Link>
        <Link href="/about">
          <span className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500">
            About
          </span>
        </Link>
        <Link href="/">
          <span className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500">
            Home
          </span>
        </Link>
      </div>
    </nav>
  );
}
