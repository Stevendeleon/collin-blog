import React from "react";

function Footer() {
  const socials = [
    {
      id: 0,
      name: "github",
      iconClassName: "fab fa-github",
      link: "https://github.com/collinoo",
    },
    {
      id: 1,
      name: "linkedin",
      iconClassName: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/collin-o-598534203/",
    },
    {
      id: 3,
      name: "twitter",
      iconClassName: "fab fa-twitter",
      link: "https://twitter.com/collinhacks",
    },
  ];

  let socialMediaIcons = socials.map((social) => {
    return (
      <li key={social.id} className="px-2">
        <a
          href={social.link}
          target="_blank"
          className="text-gray-600 transition-all duration-150 ease-in-out hover:text-yellow-100 "
        >
          <i aria-hidden className={social.iconClassName} />
        </a>
      </li>
    );
  });

  return (
    <div className="fixed bottom-0 flex items-center justify-around w-full h-12 p-2">
      <div className="block">
        <ul className="hidden sm:flex">{socialMediaIcons}</ul>
      </div>
    </div>
  );
}

export default Footer;
