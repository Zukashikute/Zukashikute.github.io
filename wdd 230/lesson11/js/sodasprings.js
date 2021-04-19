let apiweatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial"
const iconURL = "https://openweathermap.org/img/w/";
const abbDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

fetch(apiweatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const currentTemp = parseFloat(jsObject.main.temp);
        document.getElementById("currTemp").textContent = currentTemp;
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById("currCondition").textContent = desc;
        const t = document.getElementById("highTemp").textContent = jsObject.main.temp_max;
        document.getElementById("humidity").textContent = jsObject.main.humidity;
        const s = document.getElementById("windSpeed").textContent = jsObject.wind.speed;

        if (t <= 50.0 && s > 3.0) {
            let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))
            document.querySelector("#windChill").innerHTML = `${Math.ceil(chillFactor)}&#176;F`;
        } else {
            document.querySelector("#windChill").innerHTML = "N/A";
        }
    });


let apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial"
fetch(apiforecastURL).then((response) => response.json()).then((fiveDays) => {
    console.log(fiveDays);

    const fiveDaysTime = fiveDays.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);
    console.log(fiveDaysTime);

    for (i = 0; i < fiveDaysTime.length; i++) {
        let section = document.createElement("section");
        let day = document.createElement("h4");
        let temp = document.createElement("p");
        let icon = document.createElement("img");

        let date = new Date(fiveDaysTime[i].dt_txt);
        day.textContent = abbDays[date.getDay()];

        icon.src = iconURL + fiveDaysTime[i].weather[0].icon + ".png";
        icon.alt = fiveDaysTime[i].weather[0].description;

        temp.textContent = fiveDaysTime[i].main.temp + "°F";

        section.append(day);
        section.append(icon);
        section.append(temp);

        document.getElementById("forecast-table").appendChild(section);
    }
});

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];
    const townProject = towns.filter(town => (town.name == "Soda Springs"));
    townProject.forEach(town => {
      let card = document.createElement("section");
      let townName = document.createElement("h2");
      let townEventOne = document.createElement("p");
      let townEventTwo = document.createElement("p");
      let townEventThree = document.createElement("p");

      townName.textContent = `${town.name} Events`;
      townEventOne.textContent = town.events[0];
      townEventTwo.textContent = town.events[1];
      townEventThree.textContent = town.events[2];

      card.appendChild(townName);
      card.appendChild(townEventOne);
      card.appendChild(townEventTwo);
      card.appendChild(townEventThree);

      document.querySelector(".sodasprings-events").appendChild(card);
    });

  });