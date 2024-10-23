const button = document.querySelectorAll("button");

button.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        if (btn.innerText === "Open tab") {
            btn.innerText = "Close tab";
        } else if (btn.innerText === "Close tab") {
            btn.innerText = "Open tab";
        }
    })
})

//---autre façon de faire
/*button.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        btn.innerText = btn.innerText === "Open tab" ? "Close tab" : "Open tab";
    })
})*/