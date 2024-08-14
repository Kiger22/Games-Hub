export const playSnake = () => {

  const board = document.querySelector("#board");
  const startButton = document.querySelector("#start-Btn")
  const scoreBoard = document.querySelector("#scoreBoard");
  const maxScoreBoard = document.querySelector("#maxScoreBoard");
  const gameOverSign = document.querySelector("#gameOver");

  const boardSize = 10;
  const gameSpeed = 500;
  const squareTypes = { emptySquare: 0, snakeSquare: 1, foodSquare: 2 };
  const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
  };

  let snake;
  let score = 0;
  let maxScore = localStorage.getItem("maxScore") || 0;
  let direction;
  let boardSquares;
  let emptySquares;
  let moveInterval;

  const drawSnake = () => {
    for (const square of snake) {
      drawSquare(square, "snakeSquare");
    }
  }

  const drawSquare = (square, type) => {
    const [row, column] = square.split("");
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.setAttribute("class", `square ${type}`);

    if (type === 'emptySquare') {
      emptySquares.push(square);
    } else {
      if (emptySquares.indexOf(square) !== -1) {
        emptySquares.splice(emptySquares.indexOf(square), 1);
      }
    }
  }

  const moveSnake = () => {
    const newSquare = String(
      Number(snake[snake.length - 1]) + directions[direction])
      .padStart(2, "0");
    const [row, column] = newSquare.split("");
    if (newSquare < 0 ||
      newSquare > boardSize * boardSize ||
      (direction === 'ArrowRight' && column == 0) ||
      (direction === 'ArrowLeft' && column == 9 ||
        boardSquares[row][column] === squareTypes.snakeSquare)) {
      gameOver();
    } else {
      snake.push(newSquare);
      if (boardSquares[row][column] === squareTypes.foodSquare) {
        addFood();
      } else {
        const emptySquare = snake.shift();
        drawSquare(emptySquare, 'emptySquare');
      }
      drawSnake();
    }
  }

  const addFood = () => {
    score++;
    if (score > maxScore) {
      maxScore = score;
      localStorage.setItem("maxScore", maxScore);
    }
    updateScore();
    createRandomFood();
  }

  const gameOver = () => {
    gameOverSign.style.visibility = "visible";
    clearInterval(moveInterval);
    startButton.disabled = false;
    score = 0;
  }

  const setDirection = newDirection => {
    direction = newDirection;
  }

  const directionEvent = key => {
    switch (key.code) {
      case "ArrowUp":
        direction != "ArrowDown" && setDirection(key.code)
        break;
      case "ArrowDown":
        direction != "ArrowUp" && setDirection(key.code)
        break;
      case "ArrowLeft":
        direction != "ArrowRight" && setDirection(key.code)
        break;
      case "ArrowRight":
        direction != "ArrowLeft" && setDirection(key.code)
        break;
    }
  }

  const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySquare, "foodSquare");
  }

  const updateScore = () => {
    scoreBoard.innerText = score;
    maxScoreBoard.innerText = maxScore;
  }

  const createBoard = () => {
    for (const [rowIndex, row] of boardSquares.entries()) {
      for (const [columnIndex, column] of row.entries()) {
        const squareValue = `${rowIndex}${columnIndex}`;
        const squareElement = document.createElement("div");
        squareElement.setAttribute("class", "square emptySquare");
        squareElement.setAttribute("id", squareValue);
        board.appendChild(squareElement);
        emptySquares.push(squareValue);
      }
    }
  }

  const setGame = () => {
    snake = ["00", "01"];

    direction = "ArrowRight";
    boardSquares = Array.from(Array(boardSize), () =>
      new Array(boardSize).fill(squareTypes.emptySquare));
    board.innerHTML = "";
    emptySquares = [];
    createBoard();
  }

  const startGame = () => {
    setGame();
    gameOverSign.style.visibility = "hidden";
    startButton.disabled = true;
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener("keydown", directionEvent);
    moveInterval = setInterval(() =>
      moveSnake(), gameSpeed);
  }
  startGame();
  startButton.addEventListener("click", startGame);
}
