export const prerender = false;
import type { APIRoute } from "astro";

//make this interface a custom type
type Project = {
  name: string;
  link: string; // this can just be a link that can be "run"
  label: string[];
};

let projects: Array<Project> = [];
let linux: Project = {
  name: "robellionOS",
  link: "https://github.com/itsrobel/config",
  label: ["linux", "config", "dotfiles"],
};
let keychain: Project = {
  name: "keychain",
  link: "https://github.com/itsrobel/config/tree/main/keychain",
  label: ["keychain", "password", "cli"],
};
let itsrobel: Project = {
  name: "itsrobel",
  link: "https://github.com/itsrobel/itsrobel",
  label: ["portfolio", "website"],
};
projects.push(linux);
projects.push(keychain);
projects.push(itsrobel);

export const GET: APIRoute = ({ params, request }) => {
  console.log(projects);
  return new Response(
    JSON.stringify({
      // message: "This was a GET!",
      projects: projects,
    }),
  );
};

// export const POST: APIRoute = async ({ request }) => {
//   const body = await request.json();
//   let new_project: Project = body as Project;
//   projects.push(new_project);
//
//   return new Response(
//     JSON.stringify({
//       message: "Your project name was: " + body.name,
//     }),
//     {
//       status: 200,
//     },
//   );
//   // }
//   return new Response(null, { status: 400 });
// };

export const DELETE: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    }),
  );
};

export const ALL: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    }),
  );
};
