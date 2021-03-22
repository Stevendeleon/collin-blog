import Layout from "../../components/Layout";
import styles from "./index.module.css";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import { pid_0 } from "./../../components/codeBlock";

function Blog(props) {
  const { posts } = props;
  const blogPostsList = posts.map((p) => {
    return (
      <li
        key={p.id}
        className="flex flex-col justify-between w-full p-8 mx-auto mb-12 rounded-md md:flex-row"
        style={{
          background: `rgba(255, 255, 255, 0.05)`,
        }}
      >
        <h1
          className="py-2 font-bold md:text-2xl sm:text-lg"
          style={{ color: "#a6d1ff" }}
        >
          {p.title}
        </h1>
        <Link href={`/blog/article/${p.id}`}>
          <span
            className="w-auto px-4 py-2 mx-auto my-auto font-semibold text-white duration-200 ease-out transform rounded-md cursor-pointer md:m-2 md:w-48 hover:scale-110 motion-reduce:transform-none"
            style={{ background: `rgba(255,255,255,0.1)` }}
          >
            View more
          </span>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col items-center justify-center w-full mx-auto text-center">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 md:text-5xl ">
            Featured Write-up
          </h1>
          <pre className="w-auto h-auto">
            <code className={styles.code}>{pid_0}</code>
          </pre>
          <p></p>
        </div>
        <ul className="flex flex-col items-center justify-center w-full p-4 mx-auto mt-12 text-center">
          {blogPostsList}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      posts: data.posts,
    },
  };
}

export default Blog;