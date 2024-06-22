let video = document.querySelector(".video");
let thumbs = document.querySelectorAll("ul li");

thumbs.forEach((thumb, i) => {
  thumb.addEventListener("click", () => {
    video.src = `film${i + 1}.mp4`;
  });
});
// City Buttons //

const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");
const city1 = document.querySelector(".city1");
const city2 = document.querySelector(".city2");

startBtn.addEventListener("click", () => {
  city1.classList.remove("hide");
});
finishBtn.addEventListener("click", () => {
  city2.classList.remove("hide");
});
//Library //
const imgBook1 = document.getElementById("imgBook1");
const imgBook2 = document.getElementById("imgBook2");
const imgBook3 = document.getElementById("imgBook3");
const imgBook4 = document.getElementById("imgBook4");
const imgBook5 = document.getElementById("imgBook5");
// const book1 = document.getElementById("book1");

function animateBook(book) {
  document.getElementById(book).style.animation =
    "slideIn 3s 0s linear forwards";
}

imgBook1.addEventListener("click", () => {
  animateBook("book1");
});
imgBook2.addEventListener("click", () => {
  animateBook("book2");
});
imgBook3.addEventListener("click", () => {
  animateBook("book3");
});
imgBook4.addEventListener("click", () => {
  animateBook("book4");
});
imgBook5.addEventListener("click", () => {
  animateBook("book5");
});
