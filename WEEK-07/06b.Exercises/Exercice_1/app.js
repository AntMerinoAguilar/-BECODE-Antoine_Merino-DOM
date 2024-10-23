const bold = document.querySelector("b");
bold.style.color = "red";

const body = bold.parentElement.parentElement.parentElement.parentElement;
body.style.backgroundColor = "beige";

const part2 = bold.parentElement.parentElement.parentElement;
part2.style.color = "white";
part2.style.backgroundColor = "darkblue";

const anchorPart2 = bold.parentElement.nextElementSibling;
anchorPart2.style.color = "pink";

const listItems = bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("li");
listItems.forEach(li => li.style.color = "orange");

const anchorPart1 = bold.parentElement.parentElement.parentElement.previousElementSibling.querySelectorAll("a");
anchorPart1.forEach(item => item.style.color = "green");

const title = bold.parentElement.parentElement.parentElement.previousElementSibling.querySelector("h1");
title.style.textTransform = "uppercase";