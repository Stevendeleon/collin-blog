import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <h2 className="pt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/">
        {/* <a className="hover:underline"></a> */}
        {/* <Image
          src="/me.gif"
          alt="Pixel Gif Image Back Home"
          width={62}
          height={62}
          className="cursor-pointer"
        /> */}
        <i className="cursor-pointer fas fa-arrow-alt-left hover:text-red-400" />
      </Link>
    </h2>
  );
}
