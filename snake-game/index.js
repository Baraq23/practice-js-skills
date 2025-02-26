const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#ResetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "green";
const snakeBoarder = "black";
const foodColor = "orange";
const unitSize = 25;

let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodx;
let foody;
let score = 0;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0},
];

console.log("hello");

// window.addEventListener("keydown", changeDirection)
// resetBtn.addEventListener("click", resetGame)

// gameStart();
createFood();
console.log("hello1");

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){
    console.log("in")
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max-min) + min )/unitSize) * unitSize;
        return randNum;
    }
    foodx =randomFood(0, gameWidth - unitSize);
    foody =randomFood(0, gameWidth - unitSize);
    console.log("hi");
    console.log(foodx);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodx, foody, unitSize, unitSize);
};
console.log(foodx);

function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

