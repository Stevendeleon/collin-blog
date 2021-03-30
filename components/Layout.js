import Meta from "./meta";
import NavBar from "./NavBar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div
        className="min-h-screen text-gray-200"
        style={{ background: "#020828" }}
      >
        <NavBar />

        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
