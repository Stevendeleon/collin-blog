import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import styles from "./pid.module.css";
import path from "path";
import fs from "fs/promises";
import { pid_def, pid_0, pid_1, pid_2 } from "./../../../components/codeBlock";

function SpecificArticlePage(props) {
  const { loadedPost } = props;
  const router = useRouter();
  console.log(router.query);

  let codeBlock;

  // switch (codeBlock) {
  //   case router.query.pid == 0:
  //     codeBlock = pid_0;
  //     break;
  //   case router.query.pid == 1:
  //     codeBlock = pid_1;
  //     break;
  //   default:
  //     codeBlock = pid_def;
  //     break;
  // }

  if (router.query.pid == 0) {
    codeBlock = pid_0;
  } else if (router.query.pid == 1) {
    codeBlock = pid_1;
  } else if (router.query.pid == 2) {
    codeBlock = pid_2;
  } else {
    codeBlock = pid_def;
  }

  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-4xl mx-auto mb-16">
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-gray-100 md:text-3xl">
          {loadedPost.title}
        </h1>
        <p className={styles.font}>{loadedPost.body}</p>
        <figure className={styles.code}>
          <table>
            <tbody>
              <tr>
                <td name="code" style={{ paddingBottom: "1rem" }}>
                  <pre>{codeBlock}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
      </div>
    </Layout>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const articleId = params.pid;

  const data = await getData();

  const articles = data.posts.find((post) => post.id == articleId);

  return {
    props: {
      loadedPost: articles,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.posts.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({
    params: { pid: id },
  }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}

export default SpecificArticlePage;
