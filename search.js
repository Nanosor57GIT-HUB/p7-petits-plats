const searchInput = document.querySelector("#search");

let array2 = recipes

searchInput.addEventListener('keyup', function(){
    const input = searchInput.value;

   const results = array2.filter(
     (item) =>
       item.name.toLowerCase().includes(input.toLowerCase()) ||
       item.description.toLowerCase().includes(input.toLowerCase()) 
   );

   let suggestion = '';

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
   document.querySelector(".rowCard").innerHTML = suggestion
   
})
 

