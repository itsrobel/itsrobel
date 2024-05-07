import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  console.log("some shit");
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    }),
  );
};

export const POST: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    }),
  );
};

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

// let data = await response.json();
// console.log(data);
//
// const response = await fetch("/api/term", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "some project",
//     label: ["java", "python"],
//     link: "some link",
//   }),
// });
// data = await response.json();
// const response = await fetch("/api/term", { method: "GET" });
