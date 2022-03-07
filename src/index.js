// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// getElementById
const elem = document.getElementById("logoTitle"); // => DOM node
// getElementsByTagName
const elems = document.getElementsByTagName("div"); // => DOM node list
// getElementsByClassName
const classElems = document.getElementsByClassName("menu-item"); // DOM node list

// querySelector
const funElem = document.querySelector(".card");
const navElem = document.querySelector("#mainNav");
// querySelectorAll
const menuElems = document.querySelectorAll(".menu-item"); // DOM node list

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)"); // DOM node

// const secondCard = document.querySelector(".card:nth-of-type(2)");
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");

// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach((link) => {
  console.log(link.textContent);
}) // higher order function -> function that takes another function as an argument
/**
 * for (let i = 0; i < links.length; i++) {
 *   console.log(links[i]);
 * }
 */
// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links);

// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeElem = linksRealArray.find(link => {
  return link.textContent === "Home";
})

// const links = Array.from(document.querySelectorAll("nav a"));

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "BloomTech Dogz";
titleFirstCard.textContent = "Dogz RULE!"
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
header
  .querySelector("img")
  .src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zbrushcentral.com%2Fuploads%2Fdefault%2Foptimized%2F4X%2F0%2F7%2F9%2F0792d696b40a12ba79f5a933b5f2859b5c8d563b_2_1200x1200.jpeg"
//  B- Using .setAttribute to change a few attributes
imageFirstCard.src = "https://www.petlandkennesaw.com/wp-content/uploads/2018/08/english-bulldog-Blog13.jpg";

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
