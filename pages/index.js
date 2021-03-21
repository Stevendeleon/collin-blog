import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 text-3xl font-bold tracking-tight text-gray-100 md:text-5xl ">
          Hello{" "}
          <code className="pl-2 text-blue-200 transition-all duration-200 ease-in cursor-text hover:text-blue-600">
            {" "}
            world()
          </code>
        </h1>
      </div>
    </Layout>
  );
}
