// Question 1


const btn = document.querySelector(".btn");

function functionX() {
    console.log("I'm a button");
};

btn.addEventListener("click", functionX);

// Question 2

// Add a click event using `addEventListener` to the second button.

// In the event's function, display the character count from the input in the `b.count` element.

// Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).

const button = document.querySelector("form button");
const characterArea = document.querySelector("b.count");
const input = document.querySelector("input");


function functionZ() {
    const len = input.value.trim().length;

    characterArea.innerHTML = len;

};
button.addEventListener("click", functionZ);