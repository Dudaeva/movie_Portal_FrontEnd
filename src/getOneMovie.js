const getOneMovies = async (id) => {
  const movies = await fetch(`http://localhost:3000/movies/${id}`);
  const json = await movies.json();
  const main = document.getElementById("main");
  const movieDiv = document.createElement("div");

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

    movieDiv1.append(img, nameMovie, years, textMovie);
    movieDiv.append(movieDiv1);
    main.append(movieDiv)
  }
};

export default getOneMovies;
