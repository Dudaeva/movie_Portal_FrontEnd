import getOneMovies from "./getOneMovie";

const getMoviesByCategory = async () => {
  const movies = await fetch(`http://localhost:3000/movies/categories/${_id}`);
  const data = await movies.json();

  const main = document.querySelector("#main");
  const movieDiv = document.createElement("div");

  for (let i = 0; i < data.length; i++) {
  }
}
export default getMoviesByCategory;
