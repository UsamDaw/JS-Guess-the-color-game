const squares = document.querySelectorAll(".square");
const rgbValue = document.getElementById("rgbValue");
const resetButton = document.getElementById("reset");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");
let pickedColor;
let numSquares = 6; // Default to hard mode

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * numSquares);
    return squares[randomIndex].style.backgroundColor;
}

function resetGame() {
    const colors = [];
    for (let i = 0; i < squares.length; i++) {
        if (i < numSquares) {
            const color = randomRGB();
            squares[i].style.backgroundColor = color;
            squares[i].style.display = "block";
            colors.push(color);
        } else {
            squares[i].style.display = "none";
        }
    }
    pickedColor = pickColor();
    rgbValue.textContent = pickedColor.toUpperCase();
}

resetButton.addEventListener("click", resetGame);

easyBtn.addEventListener("click", function () {
    numSquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    resetGame();
});

hardBtn.addEventListener("click", function () {
    numSquares = 6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    resetGame();
});

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        const clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("Correct!");
        } else {
            alert("Try again!");
            this.style.backgroundColor = "#fff";
        }
    });
}

resetGame();
