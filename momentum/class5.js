/** 
const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("Wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}

const title = document.getElementById("title");

title.innerText = "Got you";

console.log(title.id);

console.log(title.className);
*/

const hellos = document.getElementsByClassName("hello");
const title = document.querySelector("div.hello:first-child h1");
console.log(hellos);
title.innerText = "Hello";
console.log(title);

title.style.color = "blue";
