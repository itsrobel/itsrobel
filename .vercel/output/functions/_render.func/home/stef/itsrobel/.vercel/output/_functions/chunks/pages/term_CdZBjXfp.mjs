const prerender = false;
let projects = [];
let linux = {
  name: "robellionOS",
  link: "https://github.com/itsrobel/config",
  label: ["linux", "config", "dotfiles"]
};
let keychain = {
  name: "keychain",
  link: "https://github.com/itsrobel/config/tree/main/keychain",
  label: ["keychain", "password", "cli"]
};
let itsrobel = {
  name: "itsrobel",
  link: "https://github.com/itsrobel/itsrobel",
  label: ["portfolio", "website"]
};
projects.push(linux);
projects.push(keychain);
projects.push(itsrobel);
const GET = ({ params, request }) => {
  console.log(projects);
  return new Response(
    JSON.stringify({
      // message: "This was a GET!",
      projects
    })
  );
};

export { GET, prerender };
