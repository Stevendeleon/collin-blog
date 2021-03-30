import Container from "../components/container";
import LayoutOld from "../components/LayoutOld";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { BLOGPAGE } from "../lib/constants";
import Link from "next/link";

export default function BlogPage({ allPosts }) {
  const posts = allPosts.map((post) => {
    return (
      <li
        key={post.slug}
        title={post.title}
        slug={post.slug}
        className="flex flex-row justify-between p-8 mx-auto mb-12 rounded-md"
        style={{
          background: `rgba(255, 255, 255, 0.05)`,
          width: "30rem",
        }}
      >
        <h1 className="mb-3 text-2xl font-bold" style={{ color: "#a6d1ff" }}>
          {post.title}
        </h1>
        <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
          <span
            className="px-4 py-2 font-semibold text-white duration-200 ease-out transform rounded-md cursor-pointer hover:scale-110 motion-reduce:transform-none"
            style={{ background: `rgba(255,255,255,0.1)` }}
          >
            View more
          </span>
        </Link>
      </li>
    );
  });
  return (
    <>
      <LayoutOld>
        <Head>
          <title>Collin Orner | {BLOGPAGE}</title>
        </Head>
        <Container>
          <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center justify-center mx-auto text-center">
              <h1 className="mt-24 mb-20 text-3xl font-bold tracking-tight text-gray-300 md:text-5xl ">
                Write Ups
              </h1>
            </div>
            {posts}
            {/* <ul className="flex flex-col w-full p-4 mx-auto mt-12"></ul> */}
          </div>
        </Container>
      </LayoutOld>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);

  return {
    props: { allPosts },
  };
}
