"use strict"

//variables

let intNum = 0;

let textNumber = document.getElementById("number");

let btns = document.getElementById("btns");

//functions
let checkValue = (num) => {

    if (num > 0) {
        return "green"
    }
    else if (num < 0) {
        return "red";
    }
    else {
        return "black";
    }

}

let updateNum = () => {
    textNumber.textContent = intNum;
}

//event listeners

btns.addEventListener('click', (e) => {


    if (e.target.id === "increase-js") {
        intNum++;
    }
    else if (e.target.id === "decrease-js") {
        intNum--;
    }
    else {
        intNum = 0;
    }

    updateNum();
    textNumber.style.color = `${checkValue(intNum)}`;


})

//init the counter
updateNum();
