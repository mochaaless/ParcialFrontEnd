import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const form = await req.formData();
    const word = form.get("word")?.toString();

    const headers = new Headers();
    headers.set("location", "/buscar/" + word);
    return new Response(null, {
      status: 303, 
      headers,
    });
  },

  //sacado de la documentacion de deno (https://fresh.deno.dev/docs/concepts/forms)

};


export default function Home() {
  return (
    <form className="searchForm" method="post">
      <input type="text" name="word" placeholder="Search for a word" />
      <button type="submit">Search</button>
    </form>
  );
}
