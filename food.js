const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");

const ingredient1 = document.getElementById("ingredient1");
const ingredient2 = document.getElementById("ingredient2");
const ingredient3 = document.getElementById("ingredient3");

async function getCocktails() {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const drinksArray = data.drinks;

    console.log("drinksArray", drinksArray);

    drinksArray.map((drink) => {
      output1.textContent = drink.strDrink;
      output2.setAttribute("src", drink.strDrinkThumb);
      ingredient1.textContent = drink.strIngredient1;
      ingredient2.textContent = drink.strIngredient2;
      if (drink.strIngredient3) {
        ingredient3.textContent = drink.strIngredient3;
      } else {
        ingredient3.textContent = "Cheers to you!";
      }
    });
  } catch {
    console.log(error);
  }
}
