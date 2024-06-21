const travelList = [
  {
    firstName: "Captain William Thomas",
    lastName: "Turner",
    nationality: "British",
    byear: "1856 in Liverpool",
    status: "Captain",
    accomodation: "Deck",
  },
  {
    firstName: "George William",
    lastName: "Beauchamp ",
    nationality: "British",
    byear: "1888 in Totton / UK",
    status: "Crew / stoker",
    accomodation: "Third Class",
  },
  {
    firstName: "Marguerite 'Rita' Lucile",
    lastName: "Jolivet",
    nationality: "French",
    byear: "1884 in Castleton / Richmond County - New York",
    status: "VIP Passenger / theater and silent film actress",
    accomodation: "Saloon",
  },
  {
    firstName: "Martha Frances",
    lastName: "Stevens",
    nationality: "British",
    byear: "1856 in Bicester, Oxfordshire / UK",
    status: "Passenger",
    accomodation: "Saloon",
  },
  {
    firstName: "Henrietta",
    lastName: "McCulloch Carson",
    nationality: "British",
    byear: "1894 in Dumfries / Scotland",
    status: "Passenger",
    accomodation: "Second Class",
  },
  {
    firstName: "Dwight Carlton",
    lastName: "Harris",
    nationality: "US-American",
    byear: 1884,
    status: "Passenger",
    accomodation: "Saloon",
  },
  {
    firstName: "Audrey Warren",
    lastName: "Pearl",
    nationality: "US-American",
    byear: 1915,
    status: "Passenger",
    accomodation: "Saloon",
  },
];

const fName = document.getElementById("firstName");
const lName = document.getElementById("lastName");
const nation = document.getElementById("nationality");
const birth = document.getElementById("byear");
const statusOnBoard = document.getElementById("status");
const accomod = document.getElementById("accommodation");
const onBoardBtn = document.querySelector(".onBoardBtn");
const helloName = document.getElementById("helloName");
const elArray = [fName, lName, nation, birth, statusOnBoard, accomod];
const optionList = document.querySelectorAll(".option");
console.log(optionList);
const btnArray = Array.from(optionList);
btnArray.forEach((option, i) => {
  option.addEventListener("click", () => populateSheet(i));
});

function populateSheet(element) {
  let index = Number(element);
  let fullName = `${travelList[index].firstName} ${travelList[index].lastName}`;
  console.log("fullName", fullName);
  fName.textContent = ` ${travelList[index].firstName}`;
  localStorage.setItem("fullName", fullName);
  lName.textContent = ` ${travelList[index].lastName}`;
  nation.textContent = ` ${travelList[index].nationality}`;
  birth.textContent = ` ${travelList[index].byear}`;
  statusOnBoard.textContent = ` ${travelList[index].status}`;
  accomod.textContent = ` ${travelList[index].accomodation}`;
  elArray.forEach((el) => {
    el.style.fontWeight = "bold";
    el.style.fontWeight = "bold";
  });
  setTimeout(() => {
    onBoardBtn.style.animation = "rotateIn 2s 0s ease-in forwards";
    helloName.textContent = fullName;
  }, 2000);
}
