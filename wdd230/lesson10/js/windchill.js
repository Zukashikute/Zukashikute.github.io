let t = parseFloat(document.querySelector(".temp").textContent);
let s = parseFloat(document.querySelector(".wind-speed").textContent);
if ( t <= 50.0 && s > 3.0) {
    let chillFactor = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16));
    document.querySelector(".wind-chill").textContent = Math.ceil(chillFactor);
    document.querySelector(".wc-deg").style.display = "inline";
    
}
else {
    document.querySelector(".wind-chill").textContent = "N/A";
}