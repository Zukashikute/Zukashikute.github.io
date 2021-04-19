window.onload = slideShow(0);
let images = ["cozumel", "cozumelone", "cozumeltwo", "cozumelthree"];
const abbDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const iconURL = "https://openweathermap.org/img/w/";

function slideShow(pic) {
    setTimeout(function () {
        document.getElementById("imageSmallSource").setAttribute("srcset", "images/transition/" + images[pic] + "-small.jpg");
        document.getElementById("imageMedSource").setAttribute("srcset", "images/transition/" + images[pic] + "-medium.jpg");
        document.getElementById("imageLargeSource").setAttribute("src", "images/transition/" + images[pic] + "-large.jpg");
        document.getElementById("imageLargeSource").setAttribute("alt", images[pic]);
        if (pic == images.length - 1) {
            pic = 0;
        } else {
            pic += 1;
        }
        slideShow(pic);
    }, 4000);
}

let playadelcarmenWeatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3521342&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial";
fetch(playadelcarmenWeatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const currentTemp = parseFloat(jsObject.main.temp);
        document.getElementById("pdccurrTemp").textContent = currentTemp;
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById("pdccurrCondition").textContent = desc;
        document.getElementById("pdchumidity").textContent = jsObject.main.humidity;
    });

let puertamayaWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial";
fetch(puertamayaWeatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        const currentTemp = parseFloat(jsObject.main.temp);
        document.getElementById("pmcurrTemp").textContent = currentTemp;
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById("pmcurrCondition").textContent = desc;
        document.getElementById("pmhumidity").textContent = jsObject.main.humidity;
    });




/*Puerta Maya / Cozumel Forecast*/
let puertaForecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial";
fetch(puertaForecastURL).then((response) => response.json()).then((fiveDays) => {

    const fiveDaysTime = fiveDays.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

    for (let i = 0; i < fiveDaysTime.length - 2; i++) {
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

        document.getElementById("puertamaya-forecast").appendChild(section);
    }
});


/*Playa Del Carmen Forecast*/
let playaForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3521342&appid=ef2ec14cd00cc3ff1646332d4b42644d&units=imperial";
fetch(playaForecastURL).then((response) => response.json()).then((fiveDays) => {

    const fiveDaysTime = fiveDays.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

    for (let i = 0; i < fiveDaysTime.length - 2; i++) {
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

        document.getElementById("playadelcarmen-forecast").appendChild(section);
    }
});