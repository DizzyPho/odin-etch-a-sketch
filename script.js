function createGridSquare() {
    const square = document.createElement("div");
    square.classList.toggle("gridSquare");
    square.addEventListener("mouseenter", colorSquare);
    return square;
}

function fillGrid(size) {
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
    event.target.style.background = "blue";
    console.log("enter")
}
