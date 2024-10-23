let inputValue = "";

let input = document.querySelectorAll("input");

input.forEach(element => {
    element.addEventListener("change", () => {
        inputValue = element.value;
        console.log(inputValue);
    })
})