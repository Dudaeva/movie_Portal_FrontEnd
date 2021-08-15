import getOneMovie from "./getOneMovie";

const getMovies = async () => {
  const movies = await fetch("http://localhost:3000/movies");
  const json1 = await movies.json();

  const films = document.querySelector(".films");
  const moviesDiv = document.createElement("div");
  moviesDiv.className = "allmovies";

  for (let i = 0; i < json1.length; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    const infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";

    const img = document.createElement("img");
    img.src = json1[i].image;

    const nameMovie = document.createElement("h2");
    nameMovie.textContent = json1[i].nameMovie;

    const years = document.createElement("h2");
    years.textContent = json1[i].years;

    const textMovie = document.createElement("h3");
    textMovie.textContent = json1[i].description;

    imgDiv.prepend(img);
    infoDiv.prepend(nameMovie, years, textMovie);

    moviesDiv.prepend(imgDiv, infoDiv);
    films.append(moviesDiv);

    nameMovie.addEventListener("click", () => {
      films.parentElement.remove();
      getOneMovie(json1[i]._id);
    });
  }
};
export default getMovies;
