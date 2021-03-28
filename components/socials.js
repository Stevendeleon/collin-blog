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

export let socialIcons = socials.map((social) => {
  return (
    <li key={social.id} className="px-4 mt-4 sm:mt-2">
      <a
        href={social.link}
        target="_blank"
        className="text-gray-400 hover:text-yellow-400"
      >
        <i className={social.iconClassName} aria-hidden="false" aria-hidden />
      </a>
    </li>
  );
});
