"use strict";
console.log("working..");

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const header = document.querySelector("h1");

btn.addEventListener("click", function () {
  console.log("click works!");
  //body.classList.add("testing");
  RandomColor();
});

function RandomColor() {
  let validCharacters = "0123456789ABCDEF";
  let randChar;
  let newColor = "#";

  for (let i = 0; i < 6; i++) {
    console.log(validCharacters[Math.floor(Math.random() * 16)]);
    randChar = validCharacters[Math.floor(Math.random() * 16)];
    newColor += randChar;
  }
  //console.log(validCharacters.length);
  // console.log("random character is: ", randChar);
  console.log(Math.floor(Math.random() * 16)); //get 0 - 15
  console.log(newColor);

  body.style.backgroundColor = newColor;
  header.innerText = newColor;
}
