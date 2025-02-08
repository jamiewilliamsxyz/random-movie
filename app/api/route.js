export async function GET(req) {
  const API_KEY = process.env.API_KEY;
  if (!API_KEY)
    return Response.json({ error: "Missing API Key" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const filterUrl = searchParams.get("filterUrl");
  const genre = searchParams.get("genre");
  const page = searchParams.get("page");

  if (!filterUrl)
    return Response.json({ error: "Missing filter URL" }, { status: 400 });

  const genreFilter = genre && genre !== "0" ? `&with_genres=${genre}` : "";
  const url = `${filterUrl}?api_key=${API_KEY}&page=${page}${genreFilter}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}
