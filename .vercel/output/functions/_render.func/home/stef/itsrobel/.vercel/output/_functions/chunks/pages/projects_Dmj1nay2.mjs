const prerender = false;
const GET = async () => {
  return new Response(
    JSON.stringify({
      message: "thing"
    }),
    { status: 200 }
  );
};
const POST = async ({ request }) => {
  let body = request.json();
  console.log(body);
  return new Response(JSON.stringify({ thing: "things", request: body }));
};

export { GET, POST, prerender };
