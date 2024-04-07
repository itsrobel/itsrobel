// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  };
};

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
  handle: string; // for accessibility
};

export const siteConfig: Config = {
  title: "The Robellion",
  description: "",
  lang: "en-US",
  profile: {
    author: "Robel Schwarz",
    description: "subjectively objectively always correct",
  },
};

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/itsrobel",
    handle: "itsrobel",
  },
  {
    icon: "mdi:instagram",
    friendlyName: "Instagram",
    link: "https://www.instagram.com/the_robellion/",
    handle: "the_robellion",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/robel-schwarz/",
    handle: "robel-schwarz",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:itsrobel.schwarz@gmail.com",
    handle: "itsrobel.schwarz",
  },

  // {
  //   icon: "mdi:rss",
  //   friendlyName: "rss",
  //   link: "/rss.xml",
  // },
];

export const NAV_LINKS: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/blog/void",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];
