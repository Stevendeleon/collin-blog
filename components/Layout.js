import Meta from "./meta";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div
        className="min-h-screen text-gray-200"
        style={{ background: "#020828" }}
      >
        <Navbar />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
