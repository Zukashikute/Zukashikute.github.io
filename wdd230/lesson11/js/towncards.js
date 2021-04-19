const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const townProject = towns.filter(town => (town.averageRainfall < 17));
    townProject.forEach(town => {
      let card = document.createElement("section");
      let townName = document.createElement("h2");
      let townMotto = document.createElement("div");
      let yrFounded = document.createElement("p");
      let currPopulation = document.createElement("p");
      let avgRainfall = document.createElement("p");
      let townImage = document.createElement("img");

      townName.textContent = town.name;
      townMotto.textContent = town.motto;
      yrFounded.textContent = `Year Founded: ${town.yearFounded}`;
      currPopulation.textContent = `Population: ${town.currentPopulation}`;
      avgRainfall.textContent = `Annual Rainfall: ${town.averageRainfall}`;
      townImage.setAttribute("src", `images/${town.photo}`);
      townImage.setAttribute("alt", townName.textContent);

      card.appendChild(townName);
      card.appendChild(townMotto);
      card.appendChild(yrFounded);
      card.appendChild(currPopulation);
      card.appendChild(avgRainfall);
      card.appendChild(townImage);

      document.querySelector(".town-cards").appendChild(card);
    });

  });