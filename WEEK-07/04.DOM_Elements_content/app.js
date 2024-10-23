const firstItem = document.querySelector("ul li:first-child");
const text = firstItem.innerText;

const newItem = document.createElement("li");

newItem.innerText = text;

const list = document.querySelector("ul");
list.appendChild(newItem);

const allItems = document.querySelectorAll("li");
allItems.forEach(item => {
    item.style.color = "purple";
})

newItem.style.color = "gold";
//---autre façon de faire
/*const lastItem = allItems[allItems.length - 1];
lastItem.style.color = "gold";*/

const item4 = allItems[3];
item4.innerHTML = '<li class="list-item">Annie <span>Hall</span></li>';
const spanRed = document.querySelector("li span");
spanRed.style.color = "red";