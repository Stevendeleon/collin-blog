import Container from "./container";
import { socialIcons } from "./socials";

export default function Footer() {
  return (
    <footer
      className="pt-8 pb-12 text-gray-400"
      style={{ background: "#01060f" }}
    >
      <Container>
        <div className="flex flex-col items-center lg:flex-row">
          <h3 className="mb-4 text-4xl font-bold leading-tight tracking-tighter text-center text-white lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            Stay Connected!
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <ul className="flex flex-row">{socialIcons}</ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
