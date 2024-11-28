const header1 = document.getElementById("h1");
const p = document.getElementsByTagName("p");

header1.style.backgroundColor = "Pink";

const myFavoriteColor1 = "Pink"; 
const myFavoriteColor2 = "Pink";

const divContainer1 = document.getElementById("container1");
const divContainer2 = document.getElementById("container2"); 

divContainer1.style.backgroundColor = myFavoriteColor1;
divContainer2.style.backgroundColor = myFavoriteColor2; 

const anchorTag = document.querySelector('a'); 
anchorTag.setAttribute('href', 'https://www.google.com'); 


const listItems = document.querySelectorAll('.list');

listItems.forEach((item, index) => {
    item.textContent = `List Baru ${index + 1}`;
    item.style.fontFamily = 'Arial, sans-serif';
    item.style.fontSize = '15px';
    item.style.backgroundColor = 'Brown';
    item.style.color = 'White';
    item.style.padding = '15px';
    item.style.margin = '6px 0';
});
