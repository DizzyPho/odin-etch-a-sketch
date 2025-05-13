function createGridSquare() {
    const square = document.createElement("div");
    square.classList.toggle("gridSquare");
    return square;
}

function fillGrid(size) {
    const squaresAmount = size ** 2;
    const grid = document.querySelector("#container");
    for (let i = 0; i < squaresAmount; i++) {
        const square = createGridSquare();
        grid.appendChild(square);
    }
}

fillGrid(16);