import Link from "next/link";
import Head from "next/head";
import Meta from "./../components/meta";
import { useRef, useEffect } from "react";
import { getAllPosts } from "../lib/api";
import { HOMEPAGE } from "../lib/constants";
import { gsap } from "gsap";

export default function Index() {
  const socials = [
    {
      id: 0,
      name: "github",
      iconClassName: "fab fa-github",
      link: "https://github.com/collinoo",
    },
    {
      id: 1,
      name: "linkedin",
      iconClassName: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/collin-o-598534203/",
    },
    {
      id: 3,
      name: "twitter",
      iconClassName: "fab fa-twitter",
      link: "https://twitter.com/collinhacks",
    },
  ];

  let socialIcons = socials.map((social) => {
    return (
      <li key={social.id} className="px-4 mt-4 sm:mt-2">
        <a
          href={social.link}
          target="_blank"
          className="text-gray-400 hover:text-yellow-400"
        >
          <i className={social.iconClassName} aria-hidden="false" aria-hidden />
        </a>
      </li>
    );
  });

  const tl = gsap.timeline();
  const divWrapperRef = useRef(null);
  const navRef = useRef(null);
  const helloWorldref = useRef(null);
  const navGif = useRef(null);
  const navBlog = useRef(null);
  const navAbout = useRef(null);
  const navHome = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    tl.from(helloWorldref.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power1",
    })
      .from(divWrapperRef.current, {
        background: "#000",
        duration: 0.5,
        ease: "power1",
      })
      .from(navRef.current, {
        opacity: 0,
        duration: 0.05,
      })
      .fromTo(
        [navGif.current, navBlog.current, navAbout.current, navHome.current],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.15,
          ease: "elastic",
        }
      )
      .from(footerRef.current, {
        opacity: 0,
        duration: 1,
      });
  }, [divWrapperRef]);
  return (
    <>
      <Head>
        <title>Collin Orner | {HOMEPAGE}</title>
      </Head>
      <Meta />
      <div
        ref={divWrapperRef}
        className="min-h-screen text-gray-200"
        style={{ background: "#020828" }}
      >
        <nav
          ref={navRef}
          className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto bg-transparent sticky-nav bg-opacity-60"
        >
          <Link href="/">
            <img ref={navGif} className="cursor-pointer" src="/me.gif" />
          </Link>
          <div className="text-lg font-semibold">
            <Link href="/blog">
              <span
                ref={navBlog}
                className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500"
              >
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span
                ref={navAbout}
                className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500"
              >
                About
              </span>
            </Link>
            <Link href="/">
              <span
                ref={navHome}
                className="p-1 text-gray-300 transition-all duration-300 ease-out cursor-pointer sm:p-4 hover:text-green-500"
              >
                Home
              </span>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col justify-center px-8">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
            <h1
              ref={helloWorldref}
              className="mt-24 text-3xl font-bold tracking-tight text-gray-100 md:text-6xl "
            >
              Hello{" "}
              <code className="pl-2 text-blue-200 transition-all duration-200 ease-in cursor-text hover:text-blue-600">
                {" "}
                world()
              </code>
            </h1>
          </div>
        </div>
        <footer
          ref={footerRef}
          className="absolute bottom-0 w-full pb-12 text-gray-400"
        >
          <div className="max-w-4xl px-5 mx-auto sm:container">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-center justify-center w-full lg:flex-row">
                <ul className="flex flex-row">{socialIcons}</ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);

  return {
    props: { allPosts },
  };
}
