import getOneMovie from "./getOneMovie";

const getMovies = async (id) => {
  const movies = await fetch("http://localhost:3000/movies");
  const json = await movies.json();
  const main = document.querySelector("#main");
  const movieDiv = document.createElement("div");

  for (let i = 0; i < json.length; i++) {

    const img = document.createElement("img");
    img.className = "movies_img";
    img.src = json[i].image;

    const nameMovie = document.createElement("h2");
    nameMovie.className = "movies_name";
    nameMovie.textContent = json[i].nameMovie;

    movieDiv.append(img, nameMovie);
    main.prepend(movieDiv);

    movieDiv.addEventListener("click",getOneMovie(json[i].id));
  }
};

export default getMovies;
