import styles from "./about.module.css";

function About() {
  return (
    <div className="flex flex-col items-start justify-center max-w-2xl pb-24 md:max-w-4xl lg:max-w-6xl">
      <h1 className="mt-20 mb-6 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:pr-8 lg:text-8xl">
        Collin Orner 🐺
      </h1>
      <p className="mb-12 text-xl font-bold text-green-500">
        <span className="transition-all duration-150 ease-in hover:text-gray-200">
          Cyber Security
        </span>{" "}
        •{" "}
        <span className="transition-all duration-150 ease-in hover:text-gray-200">
          White Hat Hacker
        </span>{" "}
        •{" "}
        <span className="transition-all duration-150 ease-in hover:text-gray-200">
          Penetration Tester
        </span>{" "}
        •{" "}
        <span className="transition-all duration-150 ease-in hover:text-gray-200">
          Bug Bounty
        </span>{" "}
      </p>
      <p className={styles.font}>
        Hello and welcome to my <span>blog</span>. I am currently majoring in
        Cyber Security. This field has always interested me even as a kid, and
        computers in general always held a place in my heart for something I
        enjoy. I like to play CTFs and do boxes on websites like{" "}
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
        . I also enjoy doing Bug Bounties as a hobby while I expand my knowledge
        every day learning new vulnerabilities.
        <br />
        <br />
        Here on my blog you will find writeups for rooms/boxes on either
        TryHackMe or HackTheBox, as well as write-ups from potential Bug
        Bounties or VDP Programs!
      </p>
    </div>
  );
}

export default About;
