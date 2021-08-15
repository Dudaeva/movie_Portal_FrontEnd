import getOneMovies from "./getOneMovie";

const getMoviesByCategory = async (id) => {
  const movies = await fetch(`http://localhost:3000/movies/categories/${id}`);
  const json = await movies.json();

  const main = document.querySelector("#main");
  const movieDiv = document.createElement("div");

  for (let i = 0; i < json.length; i++) {
    const movieDiv1 = document.createElement("div");

    const img = document.createElement("img");
    img.className = "movies_img";
    img.src = json[i].image;

    const nameMovie = document.createElement("h2");
    nameMovie.className = "movies_name";
    nameMovie.textContent = json[i].nameMovie;

    movieDiv1.append(img, nameMovie);
    movieDiv.append(movieDiv1);
    main.append(movieDiv) 
  }
}
export default getMoviesByCategory;
