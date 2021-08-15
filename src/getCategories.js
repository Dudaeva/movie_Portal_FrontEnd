import getOneMovies from "./getOneMovie";
import getMoviesByCategory from "./getMoviesByCategory";

const getCategories = async () => {
    const data = await fetch('http://localhost:3000/categories');
    const json = await data.json();
  
    for (let i = 0; i < json.length; i++) {
      const divCategories = document.getElementById('header');
      const oneCategory = document.createElement('div');
      const h1 = document.createElement('h1')
      //oneCategory.innerHTML = json[i].name;
      h1.textContent =  json[i].name;
      oneCategory.prepend(h1)
      divCategories.prepend(oneCategory);

      h1.addEventListener('click', (ev) => {
      ev.target.parentElement.remove()
        getMoviesByCategory(json[i]._id)
      })
    }
  };
  
  export default getCategories;