window.onload = updatePage;
window.onresize = navRemove;

function updatePage() {
    let date = new Date().getFullYear();
    let theDate = new Date();
    let monthDay = theDate.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    document.getElementById("dayUpdate").innerHTML = days[theDate.getDay()] + ', ' + monthDay + ' ' + monthNames[theDate.getMonth()] + ' ' + date;
}

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function navRemove() {
    if (window.innerWidth > 560) {
        document.getElementById("primaryNav").classList.add('hide');
    }
}