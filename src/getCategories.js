import getMovies from "./getMovies";
import getMoviesByCategory from "./getMoviesByCategory";

const getCategories = async () => {
  const data = await fetch("http://localhost:3000/categories");
  const json = await data.json();

  const films = document.querySelector(".films");
  const category = document.querySelector(".category");

  for (let i = 0; i < json.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = json[i].name;
    category.prepend(h1);

    h1.addEventListener("click", () => {
      films.firstElementChild.textContent = "";
      getMoviesByCategory(json[i]._id);
    });
  }
  getMovies();
};

export default getCategories;
