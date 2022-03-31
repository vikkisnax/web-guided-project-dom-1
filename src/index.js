//I. lecture web26

//6 ex of data from server telling you what to put on page
const data = [
    {heading: 'Hello 1'},
    {heading: 'Hello 2'}
]


//1a get/grab the element
const firstCard = document.querySelector('.card');
console.log(firstCard);

//1b create a clone of the element
const copyOfFirstCard = firstCard.cloneNode(true);
console.log(copyOfFirstCard);

//2 append clone next to the existing card
const cardContainer = document.querySelector('.card-group');
console.log(cardContainer);

//3 create copy of the clone
cardContainer.appendChild(copyOfFirstCard);


//ways to manipulate list of elements
//4 grab all cards (we made two so far)
const cards = document.querySelectorAll('.card');
// console.log(cards);

//4a grab element
const secondCard = cards[1];
console.log(secondCard);

//4b for II below. grabbing elements inside the second card
const header = document.querySelector('headerTwo');
const logoTitle = document.querySelector('#logoTitle');
const card = secondCard; //both are pointing at the same thing
const cardImage = secondCard.querySelector('img');
const cardTitle = secondCard.querySelector('h2');
const cardSubtitle = secondCard.querySelector('h3');
const cardText = secondCard.querySelector('p.card-text');
const cardLink1 = secondCard.querySelector('a');
const cardLink2 = secondCard.querySelector('a:nth-of-type(2)');



//5 loop over the list
// cards.forEach(card => {
//     const h2 = card.querySelector('h2');
//     // console.log(h2);
//     h2.textContent='hello!';
// });

//5a keep 4 and 4a. comment out 5 for now
// cards.forEach(card=> {
//     const h2 = card.querySelector('h2');
//     const h3 = card.querySelector('h3');
//     h3.textContent = 'Hi';
//     h2.textContent = 'Hello';
// });

//5b. comment out 5 and 5a for now. this is following the data in 6 above
cards.forEach((card, idx) => {
    const h2 = card.querySelector('h2');
    h2.textContent = data[idx].heading;
});


//7 how to make a real array here
const realArrayofCards = Array.from(cards);
console.log(realArrayofCards);




// II. 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the second div.card ---->>>> look at 4b above 

// A- finding across the entire DOM
// const header = null
// const logoTitle = null
// // const firstCard = null

// B- finding within one particular element (second card)
// const card = null
// const cardImage = null
// const cardTitle= null
// const cardSubtitle = null
// const cardText = null
// const cardLink1 = null
// const cardLink2 = null
// // const imageFirstCard = null
// // const titleFirstCard = null
// // const subtitleFirstCard = null
// // const textFirstCard = null

// C- traversing with dot notation
// const link1FirstCard = null
// const link2FirstCard = null





// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"






// III. 👉 3- Changing (second card) an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText

cardTitle.textContent = 'New H2';
cardSubtitle.textContent = 'New H3';
cardText.textContent = 'New Card Text';
cardLink1.textContent = 'New Link 1';
cardLink2.textContent = 'New Link 2';


// IV. 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes

cardImage.src = 'https://images.unsplash.com/photo-1572566830488-069bcc7fbcec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60';

    //or we can use setAttribute
cardImage.setAttribute('src', 'https://images.unsplash.com/photo-1617129724623-84f1d2fd78f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60');





// V. 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
    //not working here, so see what happens in web 36 domI vid
header.classList.add('sky');

setInterval(()=> {
    header.classList.togggle('sky')
}, 1000);


//  B- By manipulating inline styles on the element
card.style.backgroundColor = 'royalblue';





// VI. 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog" 
// didn't work for me but works for vid...
const newLink = document.createElement('a')
newLink.textContent = 'Blog'
newLink.href = '#'
document.querySelector('#mainNav').appendChild(newLink);



// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times



//  👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
