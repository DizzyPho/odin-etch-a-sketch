let currentSize = 0;

const reset = document.querySelector("#reset")
reset.addEventListener("click",resetGrid);
const resize = document.querySelector("#change-size")
resize.addEventListener("click", resizeGrid)

function createGridSquare() {
    const square = document.createElement("div");
    square.classList.toggle("gridSquare");
    square.addEventListener("mouseenter", colorSquare);
    return square;
}

function fillGrid(size) {
    currentSize = size;
    const squaresAmount = size ** 2;
    const squareSize = 100/size;
    const grid = document.querySelector("#container");
    grid.replaceChildren(); 
 
    for (let i = 0; i < squaresAmount; i++) {
        const square = createGridSquare();
        square.style.flex = `1 1 ${squareSize}%`;
        square.style.height = `${squareSize}%`  
        grid.appendChild(square);
    }
}

function colorSquare(event) {
    event.target.style.background = randomColor();
    console.log("enter")
}

function resetGrid() {
    fillGrid(currentSize);
}

function promptGridSize() {
    let size;
    do {
        size = Number(prompt("What should the new grid size be? Size cannot be larger than 100"));
    } while (size > 100 || isNaN(size) || size < 1)
    console.log(size);
    return size;
}

function resizeGrid() {
    const size = promptGridSize();
    fillGrid(size);
}

function randomColor() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgb(${r},${g},${b})`
}

fillGrid(16);