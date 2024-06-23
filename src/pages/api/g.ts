import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const data = await (
    await fetch(
      "https://raw.githubusercontent.com/UseInterstellar/Interstellar-Assets/main/json/games.json",
    )
  ).json();
  return Response.json(data);
};