import { FilmMainCard } from "./types/entities/FilmMainCard";

async function movieRequest(path: string): Promise<FilmMainCard[]> {
  const response = await fetch(
    `https://641b23c71f5d999a445c652b.mockapi.io/Films/${path}`
  );
  const movies: FilmMainCard[] = await response.json();
  console.log(movies);
  return movies;
}

export default movieRequest;
