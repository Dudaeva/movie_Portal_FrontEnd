import getReviews from "./getReviews";

const getOneMovie = async (id) => {
  const movies = await fetch(`http://localhost:3000/movies/${id}`);
  const json = await movies.json();

  const films = document.querySelector(".films");
  const oneMovieDiv = document.createElement("div");
  oneMovieDiv.className = "oneMovie";
  const movieDiv1 = document.createElement("div");

  const img = document.createElement("img");
  img.src = json.image;

  const nameMovie = document.createElement("h2");
  nameMovie.textContent = json.nameMovie;

  const years = document.createElement("h2");
  years.textContent = json.years;

  const textMovie = document.createElement("h3");
  textMovie.textContent = json.description;

  getReviews(json._id);

  movieDiv1.append(img, nameMovie, years, textMovie);
  oneMovieDiv.append(movieDiv1);
  films.append(oneMovieDiv);
};

export default getOneMovie;
