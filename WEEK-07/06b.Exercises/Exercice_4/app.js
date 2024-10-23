const container = document.querySelector(".container");
for (let i = 1; i <= 151; i++) {
    const imgPok = document.createElement("img");
    imgPok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.appendChild(imgPok);
}