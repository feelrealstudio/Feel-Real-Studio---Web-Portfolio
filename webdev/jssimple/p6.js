/*  JavaScript 6th Edition
    Project 6
    

    Filename: p6.js
*/

function feedbackForm() {

    let feedbackAr = []; //empty array to hold checkbox from html values 
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    //let checkbox items loop to put into array 
    for (var i = 0; i < checkboxes.length; i++) {
        feedbackAr.push(checkboxes[i].value)
    }
    //return array in string form
    let text = "Your selected feedback:"+ feedbackAr.toString();
    document.getElementById("feedbackResult").innerHTML = text;
}

