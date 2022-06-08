//input details
const multiCombo = document.querySelector(".wrapperCombo");
multiCombo.innerHTML = `
 <div class="search-input">
        <!-- <a href="" target="_blank" hidden>bad</a> -->
        <input type="text" class="selectInput" id="ingredients"  placeholder="Ingredients" style="background-color:rgb(107, 107, 231)">  
        <div class="autocom-box ">
          <!-- here list are inserted from javascript -->
        </div>
        <div class="icon"><i class="fas fa-angle-down"></i></div>
        <ul class="autocomplete-list" id="ingredients-list"></ul>
      </div> 
    
      
      <div class="search-input">
        <!-- <a href="" target="_blank" hidden></a> -->
        <input type="text" class="selectInput" id="appareils" placeholder="Appareils" style="background-color:rgb(59, 207, 59)">
        <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div>
        <div class="icon"><i class="fas fa-angle-down"></i></div>
        <ul class="autocomplete-list" id="appliance-list"></ul>
      </div> 
    
       
      <div class="search-input">
        <!-- <a href="" target="_blank" hidden></a> -->
        <input type="text" class="selectInput" id="ustensils" placeholder="Ustensiles" style="background-color:rgb(228, 157, 27)">
        <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div>
        <div class="icon"><i class="fas fa-angle-down"></i></div>
        <ul class="autocomplete-list" id="ustensils-list"></ul>
      </div>
      </div> `;


//const recipe = recipes
//console.log(recipes);













const ingredientsInput = document.querySelector("#ingredients");
const appareilsInput = document.querySelector("#appareils");
const ustensilsInput = document.querySelector("#ustensils");
//arrow
const arrow = document.querySelector(".fa-angle-down")
//inputs
const wrapper = document.querySelector(".selectInput");


wrapper.addEventListener("click", function (toggle) {
  arrow.classList.toggle('rotated');
   const inputIng = ingredientsInput.value;
   const inputApp = appareilsInput.value;
   const inputUst = ustensilsInput.value;
    
    arrow.style.transform = "rotate(180deg)";

    const results = array.filter(
      (item) =>
      
        item.name.toLowerCase().includes(inputIng.toLowerCase()) ||
        item.appliance.toLowerCase().includes(inputApp.toLowerCase()) ||
        item.ustensils.toLowerCase().includes(inputUst.toLowerCase())
    );

    let suggestion = "";

    results.forEach(
      (recipe, ingredient) =>
        (suggestion += `<div class="listing"><ul class="autocomplete" id="country-list"><li class="liList">${recipe.appliance}</li></ul></div>
          `)
    );
    document.querySelector(".autocom-box").innerHTML = suggestion;
  });
 
  /*
  let countries = [];
      const countryListElement = document.querySelector("#country-list");
      const countryInputElement = document.querySelector("#country-input");

      function fetchCountries() {
        fetch("https://restcountries.com/v3.1/all")
          .then((response) => response.json())
          .then((data) => {
            countries = data.map((x) => x.name.common);
            countries.sort();

            loadData(countries, countryListElement);
            // console.log(countries);
          });
      }

      function loadData(data, element) {
        if (data) {
          element.innerHTML = "";
          let innerElement = "";
          data.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
          });

          element.innerHTML = innerElement;
        }
      }

      function filterData(data, searchText) {
        return data.filter((x) =>
          x.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      fetchCountries();

      countryInputElement.addEventListener("input", function () {
        const filteredData = filterData(countries, countryInputElement.value);
        loadData(filteredData, countryListElement);
      });
      */



//  icon.style.transform = "rotate(180deg)";

  