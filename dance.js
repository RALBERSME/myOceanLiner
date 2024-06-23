const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");

card1.addEventListener("click", () => {
  card2.style.animation = "moveLeftRight 2s 0s linear forwards";
});
card5.addEventListener("click", () => {
  card6.style.animation = "moveLeftRight 2s 0s linear forwards";
});
card4.addEventListener("click", () => {
  card3.style.animation = "moveRightLeft 2s 0s linear forwards";
});
card8.addEventListener("click", () => {
  card7.style.animation = "moveRightLeft 2s 0s linear forwards";
});

/* section 3 */
const overlay1 = document.getElementById("overlay1");
const overlay2 = document.getElementById("overlay2");
const overlay3 = document.getElementById("overlay3");
function startAnimation() {
  overlay1.style.animation = "fromLeftIn 2s 0s ease-in forwards";
  overlay2.style.animation = "fromLeftIn 2s 1s ease-in forwards";
  overlay3.style.animation = "fromLeftIn 2s 2s ease-in forwards";
}

/*section 5 */
const singleInfoText = document.getElementById("singleInfoText");
singleInfoText.setAttribute("style", "white-space: pre;");
const singleImg = document.getElementById("singleImg");

//1st song//

let song1 = new Audio(
  "Songs/i-love-a-piano-1915-by-irving-berlin-live-recorded-piano-music-7971.mp3"
);
let song1Data = `You are listening to the song I Love A Piano, written by Irving Berlin in 1915. 
  Here in a recording of the Live Recorded Piano Music by Nesrality. 
  Duration is 2:29 min. 
  If you want to end the song early or listen to it once more, refresh the page.`;

singleImg.addEventListener("click", () => {
  singleImg.style.animation = "singlePlay 1s 0s ease-in-out forwards";
  setTimeout(() => {
    song1.play();
    singleInfoText.textContent = song1Data;
    singleInfoText.style.visibility = "visible";
  }, 10);
});

//2nd song//
const singleImg2 = document.getElementById("singleImg2");
let song2 = new Audio(
  "Songs/cake-walk-kerry-mills-1915-arranged-for-strings-188377.mp3"
);
let song2Data = `You are listening to the song Cake Walk by Kerry Mills from 1915. 
It was arranged for strings and given to us by Gregor Quendel. 
Duration is 3:28 min.
  If you want to end the song early or listen to it once more, refresh the page.`;

singleImg2.addEventListener("click", () => {
  singleImg2.style.animation = "singlePlay2 1s 0s ease-in-out forwards";
  setTimeout(() => {
    song2.play();
    singleInfoText.textContent = song2Data;
    singleInfoText.style.visibility = "visible";
  }, 1000);
});

//3rd song//
const singleImg3 = document.getElementById("singleImg3");
let song3 = new Audio(
  "Songs/ragtime-nightingale-1915-joseph-f-lamb-186493.mp3"
);
let song3Data = `You are listening to the Ragtime Nightingale by Joseph F. Lamb written in 1915. 
It was arranged for strings and given to us by Gregor Quendel. 
Duration is 3:38 min.
  If you want to end the song early or listen to it once more, refresh the page.`;

singleImg3.addEventListener("click", () => {
  singleImg3.style.animation = "singlePlay3 1s 0s ease-in-out forwards";
  setTimeout(() => {
    song3.play();
    singleInfoText.textContent = song3Data;
    singleInfoText.style.visibility = "visible";
  }, 1000);
});
