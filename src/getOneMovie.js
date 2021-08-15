import getReviews from "./getReviews";

const getOneMovie = async (id) => {
  const movies = await fetch(`http://localhost:3000/movies/${id}`);
  const json = await movies.json();

  const films = document.querySelector(".films");
  const oneMovieDiv = document.createElement("div");

  for (let i = 0; i < json.length; i++) {
    const movieDiv1 = document.createElement("div");

    const img = document.createElement("img");
    img.className = "movies_img";
    img.src = json[i].image;

    const nameMovie = document.createElement("h2");
    nameMovie.className = "movies_name";
    nameMovie.textContent = json[i].nameMovie;

    const years = document.createElement("h2");
    years.className = "movies_years";
    years.textContent = json[i].years;

    const textMovie = document.createElement("h3");
    textMovie.className = "movies_text";
    textMovie.textContent = json[i].description;

    getReviews(json._id)

    movieDiv1.append(img, nameMovie, years, textMovie);
    oneMovieDiv.append(movieDiv1);
    films.append(oneMovieDiv);
  }
};

export default getOneMovie;
