
const ingredientsInput = document.querySelector("#ingredients");
const appareilsInput = document.querySelector("#appareils");
const ustensilsInput = document.querySelector("#ustensils");
const arrow = document.querySelector(".fa-angle-down")
const wrapper = document.querySelector(".selectInput");


wrapper.addEventListener("click", function (toggle) {
    const inputIng = ingredientsInput.value;
    const inputApp = appareilsInput.value;
    const inputUst = ustensilsInput.value;
    arrow.classList.toggle('rotated');
    //arrow.style.transform = "rotate(180deg)";

    const results = array2.filter(
      (item) =>
      
        item.ingredients.toLowerCase().includes(inputIng.toLowerCase()) ||
        item.appliance.toLowerCase().includes(inputApp.toLowerCase()) ||
        item.ustensils.toLowerCase().includes(inputUst.toLowerCase())
    );

    let suggestion = "";

    results.forEach(
      (recipe, ingredient) =>
        (suggestion += ` <div class="col-4 mb-4">
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
          `)
    );
    document.querySelector(".rowCard").innerHTML = suggestion;
  });
 



//  icon.style.transform = "rotate(180deg)";

  