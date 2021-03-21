import Head from "next/head";
import Navbar from "./Nav/Navbar";
// import footer

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-screen text-white"
      style={{ backgroundColor: "#020828" }}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          type="text/javascript"
          src="https://kit.fontawesome.com/459e337eda.js"
          async
        ></script>
        <title>Collin </title>
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center px-8">{children}</main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
