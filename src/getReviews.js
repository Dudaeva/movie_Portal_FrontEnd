const getReviews = async (id) => {
  const reviews = await fetch(`http://localhost:3000/reviews/${id}/reviews`);
  const json = await reviews.json();

  const films = document.querySelector(".films");
  const oneMovieDiv = document.createElement("div");
  const comment = document.createElement("h1");
  comment.textContent = "Отзывы";

  for (let i = 0; i < json.length; i++) {
    const divReview = document.createElement("div");
    divReview.className = "reviews";

    const name = document.createElement("h4");
    name.className = "review_name";
    name.textContent = json[i].author;

    const text = document.createElement("h5");
    text.className = "review_text";
    text.textContent = json[i].text;

    divReview.append(comment, name, text);

    //divReview.append(comment, divReview);
    //main.append(reviewsDiv)
    oneMovieDiv.append(divReview);
    films.append(oneMovieDiv);
  }
};
export default getReviews;
