const button = document.querySelector("button");

button.addEventListener("click", () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    button.parentElement.style.backgroundColor = `rgb(${r},${g},${b})`;
    button.previousElementSibling.innerText = `rgb(${r},${g},${b})`;
})