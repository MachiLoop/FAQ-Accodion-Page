const answers = document.querySelectorAll(".answer");
const quesHeading = document.querySelectorAll(".question-heading");
const btn = document.querySelectorAll("button");
const container = document.querySelector(".card-container");

console.log(quesHeading);

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const index = e.target.dataset.index;
    answers[index].classList.toggle("hidden");
    quesHeading[index].classList.toggle("question-active");
  }
});
