const answers = document.querySelectorAll(".answer");
const quesHeading = document.querySelectorAll(".question-heading");
const btn = document.querySelectorAll("button");
const container = document.querySelector(".card-container");

console.log(answers);
console.log(quesHeading);
console.log(btn);

container.addEventListener("click", function (e) {
  if (e.target.closest(".heading")) {
    console.log(e.target.closest(".heading").querySelector(".btn"));
    const index = e.target.closest(".heading").querySelector(".btn")
      .dataset.index;
    // answers[index].classList.toggle("hidden");
    // quesHeading[index].classList.toggle("question-active");

    if (!answers[index].classList.contains("hidden")) {
      answers.forEach((ans) => ans.classList.add("hidden"));
      quesHeading.forEach((ques) => ques.classList.remove("question-active"));
      // answers[index].classList.add("hidden");
      btn.forEach(
        (btnEl) =>
          (btnEl.style.backgroundImage = `url(images/icon-arrow-down.svg)`)
      );
    } else {
      answers.forEach((ans) => ans.classList.add("hidden"));
      quesHeading.forEach((ques) => ques.classList.remove("question-active"));
      btn.forEach(
        (btnEl) =>
          (btnEl.style.backgroundImage = `url(images/icon-arrow-down.svg)`)
      );
      answers[index].classList.toggle("hidden");
      quesHeading[index].classList.toggle("question-active");
      btn[index].style.backgroundImage = `url(images/icon-arrow-up.svg)`;
    }
  }
});
