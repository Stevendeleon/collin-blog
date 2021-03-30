import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
// import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import LayoutOld from "../../components/LayoutOld";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import { socialIcons } from "./../../components/socials";
import NavBar from "./../../components/Navbar";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div
      className="min-w-full min-h-screen text-gray-200"
      style={{ background: "#020828" }}
    >
      <NavBar />
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="pb-32 mt-24 ">
              <Head>
                <title>Writeup | {post.title}</title>
                <meta />
              </Head>
              <PostHeader title={post.title} />
              <PostBody content={post.content} />
            </article>
          </>
        )}
        <footer
          className="w-full pb-12 text-gray-400 "
          // style={{ background: "#020828" }}
        >
          <Container>
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
                <ul className="flex flex-row">{socialIcons}</ul>
              </div>
            </div>
          </Container>
        </footer>
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
