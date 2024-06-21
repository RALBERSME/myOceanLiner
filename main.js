const btn = document.getElementById("button");
const currDate = new Date();
let currYear = currDate.getFullYear();
const finalYear = 1900;

function getYearBefore() {
  btn.textContent = `you are now in year: ${currYear}`;
  btn.style.fontSize = "1.05rem";
  //   btn.style.fontWeight = "bold";
  let counter = setInterval(function () {
    if (currYear > finalYear) {
      --currYear;
      btn.textContent = `you are now in year: ${currYear}`;
    } else {
      console.log("finished");
      clearInterval(counter);
      btn.textContent = `${currYear} the adventure starts`;
      btn.style.animation = "startAdventure 5s 2s linear forwards";
      setTimeout(function () {
        window.location = "liners1.html";
      }, 9000);
    }
  }, 50);
}

btn.addEventListener("click", getYearBefore);
