const container = document.querySelector(".container");
const title = document.querySelector("h1");

setTimeout(() => {
    title.innerText = "There are a lot of buttons here !";
    for (let i = 1; i <= 100; i++) {
        const button = document.createElement("button");
        button.innerText = `I am button ${i}`;
        container.appendChild(button);
    }
}, 2000);