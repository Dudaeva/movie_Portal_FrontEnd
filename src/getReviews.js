const getReviews = async (id) => {
  const reviews = fetch(`http:localhost:3000/movies/${id}/reviews`);
  const data = await reviews.json();

  const main = document.querySelector("#main");
  const reviewsDiv = document.createElement("div");
  const comment = document.createElement("h1");
  comment.textContent = "Отзывы";

  for (let i = 0; i < data.length; i++) {
    const divReview = document.createElement("div");
    divReview.className = "reviews";

    const name = document.createElement("h4");
    name.className = "review_name";
    name.textContent = data[i].author;

    const text = document.createElement("h5");
    text.className = "review_text";
    text.textContent = data[i].text;

    divReview.append(name, text);

    reviewsDiv.append(comment, divReview);
    main.append(reviewsDiv);
  }
};
export default getReviews;
