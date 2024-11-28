const header1 = document.getElementById("h1");
const p = document.getElementsByTagName("p");
const listItems = document.getElementsByClassName("list");

header1.style.backgroundColor = "Purple";
p[0].style.color = "Yellow";
listItems[0].style.color = "Blue";


const list2 = document.querySelector("li:nth-child(2)");
const anchor = document.querySelector("#a a");
list2.style.backgroundColor = "Grey";
anchor.style.fontSize = "40px";

const anchorTag = document.querySelector('a'); // Pilih elemen <a>
anchorTag.setAttribute('href', 'https://www.google.com'); // Ganti isi atribut href


const sebuahNode = document.getElementById("h1");
sebuahNode.innerHTML = "<em>Javascript</em>";

const nodeSection = document.getElementById("a");
const nodeP = nodeSection.querySelector("p");
const listHTML = "<ol><li>ayam goreng</li><li>ayam rebus</li></ol>";
nodeP.innerHTML = listHTML;

const nodeH1 = document.getElementById("h1");
nodeH1.style.fontFamily = "Consolas";
nodeH1.style.backgroundColor = "Gold";
nodeH1.style.textShadow = "10px 10px 10px";

nodeH1.getAttribute("id");

const nodeP1 = nodeSection.querySelector("p");
nodeP1.setAttribute("id", "P1");

const myFavoriteColor1 = "BlueSky"; 
const myFavoriteColor2 = "BabyPink";

const divContainer1 = document.getElementById("container1");
const divContainer2 = document.getElementById("container2"); 

divContainer1.style.backgroundColor = myFavoriteColor1;
divContainer2.style.backgroundColor = myFavoriteColor2; 


const nodeDiv2 = document.getElementById("container2");
const nodeU1 =  nodeDiv2.querySelector("ul");
nodeU1.removeAttribute("id");

// Pilih semua elemen dengan class "list"
const listItems = document.querySelectorAll('.list');

// Gunakan loop untuk mengubah teks, style, size, dan warna background
listItems.forEach((item, index) => {
    // Ubah teks
    item.textContent = `List Baru ${index + 1}`;
    
    // Ubah gaya font
    item.style.fontFamily = 'Arial, sans-serif';
    
    // Ubah ukuran font
    item.style.fontSize = '18px';
    
    // Ubah warna latar belakang
    item.style.backgroundColor = 'Gray';
    
    // Ubah warna teks
    item.style.color = 'White';
    
    // Tambahkan padding untuk tampilan
    item.style.padding = '10px';
    
    // Tambahkan margin untuk spasi antar elemen
    item.style.margin = '5px 0';
});
