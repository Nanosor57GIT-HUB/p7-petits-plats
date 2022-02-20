

const array = recipes;

//function displayRecipeCard() {
let cardRecipe = "";

array.forEach((recipe) => {
  for (let i = 0; i < recipe.ingredients.length; i++) {
    // console.log(array[i]); //neressort que le premier element du premier item de ingredients
     //console.log(recipe.ingredients);//ressort les tableaux ingredients


const ingredients = recipe.ingredients;
//console.log(ingredients); //retourne les proprités ingredients sous forme de tableau

//let ingred = ingredients
/*for (let ingredient of ingredients) 
console.log(ingredient);*/


    let ingredient = recipe.ingredients[i];
    // console.log(ingredient);//ne retourne que le premier objet ingredients
    function get_item() {
      if (ingredient.unit != undefined) {
        return ingredient.unit;
      } else {
        return (ingredient.unit = "");
      }
      
    }

    get_item();
  

    // for (const recipe of recipes)
//console.log(recipe);
       
          

          // console.log(recipe); //ressort le premier element de chaque recette
   

    /*let li = document.createElement("li");
  li.classList.add("list");
  li.textContent = `${ingredient.ingredient} ${ingredient.quantity}${ingredient.unit}`;
  console.log(li.textContent);
  let listLi = document.querySelector(".list-ingredients").appendChild(li);
  console.log(listLi);*/

   

    return (cardRecipe += `
          <div class="col-4 mb-4">
            <div class="card">
              <div class="photosPlats"></div>   
              <div class="titleTime">
                <h3 class="title">${recipe.name}</h3>
                <div class="time">
                  <i class="far fa-clock"></i>
                  <span class="mn">${recipe.time} mn</span>
                </div>
              </div>
              <div class="recette">
                <div class="ingredients">
                  <ul class="list-ingredients"> 
                  <li><span class="ingredients-details">${ingredient.ingredient}:</span> ${ingredient.quantity}${ingredient.unit}</li>
                  <li><span class="ingredients-details">${ingredient.ingredient}:</span> ${ingredient.quantity}${ingredient.unit}</li>
                  <li><span class="ingredients-details">${ingredient.ingredient}:</span> ${ingredient.quantity}${ingredient.unit}</li>
                 
                   </ul>          
                </div>
                <div class="préparation">
                  <p>${recipe.description}</p>   
                </div>
              </div>
            </div>
          </div>
          `);
  }
});
let card = (document.querySelector(".rowCard").innerHTML = cardRecipe);

//}





/**************************************************************************************** */

/*let recipe1 = recipes[0];
class recipe {
  constructor(id,
    name,
    servings,
    ingredients,
    time,
    description,
    appliance,
    ustensils) {
    this.id = id;
    this.name = name;
    this.servings = servings;
    this.ingredients = ingredients;
    this.time = time;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils;
  }
}

console.log(recipe1.name);*/
