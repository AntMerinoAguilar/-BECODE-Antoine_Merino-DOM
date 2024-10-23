const button = document.querySelectorAll("button");

button.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "Hello") {
            alert("Oh my God ! You again !!!");
        } else if (btn.innerText === "Goodbye") {
            alert("Thank God ! I thought you'd' never leave !");
        }
    })
})

//---autre façon de faire
/*const helloButton = document.querySelector("button:first-of-type");
const goodbyeButton = document.querySelector("button:last-of-type");
helloButton.addEventListener("click", () => {
    alert("Oh my God ! You again !!!");
});
goodbyeButton.addEventListener("click", () => {
    alert("Thank God ! I thought you'd' never leave !");
});*/