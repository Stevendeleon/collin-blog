import Container from "./container";
import { socialIcons } from "./socials";

export default function Footer() {
  return (
    <footer
      className="absolute bottom-0 w-full pb-12 text-gray-400"
      // style={{ background: "#020828" }}
    >
      <Container>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:pl-4">
            <ul className="flex flex-row">{socialIcons}</ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
