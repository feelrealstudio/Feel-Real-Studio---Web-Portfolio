/*  JavaScript 7th Edition
    Project 2
    

    Filename: p2.js
*/

//Estimated budget for trip
function getEstimate() {
    let totalCost = 0;
    let travelers = document.getElementById("travelersNum").value;
    let transportation = document.getElementById("transportNum").value;
    let distance = document.getElementById("distanceNum").value;

    //Add the cost of travelers and transportation and destination distance  
    totalCost += travelers * transportation * distance;

    //Total cost estimate
    document.getElementById("totalbutton").innerHTML = "$" + totalCost;
}

//Setup form
function setupForm() {
    document.getElementById("travelersNum").value = 1;
    document.getElementById("transportNum").value = 2;
    document.getElementById("distanceNum").value = 3;

    getEstimate();

    //Add event handlers for every input control
    document.getElementById("travelersNum").onchange = getEstimate;
    document.getElementById("transportNum").onchange = getEstimate;
    document.getElementById("distanceNum").onchange = getEstimate;
}

