const loginForm = document.getElementById("loginForm");
const outPut = document.getElementById("outPut");
const map = document.getElementById("map");
const label = document.getElementById("label");
const resultContainer = document.querySelector(".resultContainer");
const liEl = document.querySelectorAll("li");
const liElArray = Array.from(liEl);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let bnumber = document.getElementById("bnumber");
  let index = Number(bnumber.value) - 1;
  if (!bnumber.value) {
    label.style.color = "orangered";
    label.style.fontWeight = "700";
  } else {
    outPut.textContent = `You have chosen the lifeboat with the number: ${bnumber.value}`;
    map.setAttribute("src", "Images/lifeboats.png");
    resultContainer.classList.remove("hide");
    liElArray[index].style.backgroundColor = "yellow";
    // bnumber.value = "";
  }
});
