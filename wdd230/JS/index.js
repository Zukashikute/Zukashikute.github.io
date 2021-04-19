window.onload = updatePage;

function updatePage() {
    /* Output the current date and time on the page. */

    //Get the current date and year with built-in functions.
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let lastUpdate = "Last Updated: " + document.lastModified;

    //Output the update time and year
    document.getElementById("currentYear").innerHTML = currentYear;
    document.getElementById("time-update").innerHTML = lastUpdate;
}
