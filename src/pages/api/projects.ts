// import type { APIRoute } from "astro";
// export const prerender = false;
//
// interface Project {
//   name: string;
//   label: Array<string>;
//   link: string; // this can just be a link that can be "run"
// }
// let projects: Project[];
//
// export const GET: APIRoute = async () => {
//   return new Response(
//     JSON.stringify({
//       message: "thing",
//     }),
//     { status: 200 },
//   );
// };
// export const POST: APIRoute = async ({ request }) => {
//   let body = request.json();
//   console.log(body);
//
//   // const project: Project = request.body as Project
//   return new Response(JSON.stringify({ thing: "things", request: body }));
// };
