import Layout from "../../components/Layout";
import styles from "./index.module.css";

function About() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mt-24 mb-5 text-3xl font-bold tracking-tight text-gray-100 md:text-5xl ">
          Hey, I'm <span className="text-blue-400">Collin</span> 🐺
        </h1>
        <p className="mb-12 text-xl font-bold text-blue-900 ">
          <span className="transition-all duration-150 ease-in hover:text-blue-600">
            Cyber Security
          </span>{" "}
          •{" "}
          <span className="transition-all duration-150 ease-in hover:text-blue-600">
            White Hat Hacker
          </span>{" "}
          •{" "}
          <span className="transition-all duration-150 ease-in hover:text-blue-600">
            Penetration Tester
          </span>{" "}
          •{" "}
          <span className="transition-all duration-150 ease-in hover:text-blue-600">
            Bug Bounty
          </span>{" "}
        </p>
        <p className={styles.font} style={{ fontSize: "1.15rem" }}>
          Welcome to my blog! My name is Collin and I am currently majoring in
          Cyber Security. Cyber Security has always interested me even as a kid,
          and computers in general always held a place in my heart for something
          I enjoy. I like to play CTFs and do boxes on websites like{" "}
          <a
            href="https://tryhackme.com/"
            target="_blank"
            style={{ color: "#a9f737" }}
          >
            TryHackMe
          </a>{" "}
          and{" "}
          <a
            href="https://www.hackthebox.eu/"
            target="_blank"
            style={{ color: "#a9f737" }}
          >
            HackTheBox
          </a>
          . I also enjoy doing Bug Bounties as a hobby while I expand my
          knowledge every day learning new vulnerabilities.
          <br />
          <br />
          Here on my blog you will find writeups for rooms/boxes on either
          TryHackMe or HackTheBox, as well as write-ups from potential Bug
          Bounties or VDP Programs!
        </p>
      </div>
    </Layout>
  );
}

export default About;
