const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=";
const appID = "ef2ec14cd00cc3ff1646332d4b42644d"
const imgURL = "https://openweathermap.org/img/w/"
const tempF = (K) => {
    return (K - 273.15)* 1.8000 + 32.00
}
const rounded = (n,d) => {
    return (Math.round(n*10**d)/10**d)
}

fetch(`${apiURL}${appID}`)
    .then(res => {
        return res.json()
    })
    .then(jsonData => {
        console.log(jsonData)
        document.querySelector('#current-temp').textContent = rounded(tempF(jsonData.main.temp),1)

        let imageURL = imgURL+jsonData.weather[0].icon+'.png'
        let imageDesc = jsonData.weather[0].description
        document.querySelector('#imagesrc').textContent = imageURL
        document.querySelector('#icon').setAttribute('src',imageURL)
        document.querySelector('#icon').setAttribute('alt',imageDesc)
    })