export const playSnake = () => {

  // Elementos del DOM 
  const board = document.querySelector("#board");
  const startButton = document.querySelector("#start-Btn")
  const scoreBoard = document.querySelector("#scoreBoard");
  const maxScoreBoard = document.querySelector("#maxScoreBoard");
  const gameOverSign = document.querySelector("#gameOver");
  const startMessage = document.querySelector("#startMessage");

  //configuración inicial
  const boardSize = 10;
  const gameSpeed = 400;
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
  //let direction = localStorage.getItem("direction") || "ArrowRight";
  let direction = "ArrowRight";
  let boardSquares;
  let emptySquares;
  let moveInterval;


  // Dibuja la serpiente en el tablero
  const drawSnake = () => {
    for (const square of snake) {
      drawSquare(square, "snakeSquare");
    }
  }

  // Dibuja una casilla en el tablero
  const drawSquare = (square, type) => {
    const [row, column] = square.split("");
    boardSquares[row][column] = squareTypes[type];
    const squareElement = document.getElementById(square);
    squareElement.className = `square ${type}`;

    if (type === "emptySquare") {
      emptySquares.push(square);
    }
    else {
      if (emptySquares.indexOf(square) !== -1) {
        emptySquares.splice(emptySquares.indexOf(square), 1);
      }
    }
  }

  // Mueve la serpiente en la dirección actual
  const moveSnake = () => {
    if (!direction) return;

    const newSquare = String(
      Number(snake[snake.length - 1]) + directions[direction]
    ).padStart(2, "0");

    const [row, column] = newSquare.split("");
    if (
      newSquare < 0 ||
      newSquare >= boardSize * boardSize ||
      (direction === "ArrowRight" && column == 0) ||
      (direction === "ArrowLeft" && column == 9) ||
      boardSquares[row][column] === squareTypes.snakeSquare
    ) {
      gameOver();
    }
    else {
      snake.push(newSquare);
      if (boardSquares[row][column] === squareTypes.foodSquare) {
        addFood();
      }
      else {
        const emptySquare = snake.shift();
        drawSquare(emptySquare, "emptySquare");
      }
      drawSnake();
    }
  }

  // Añade comida y actualiza el score y el máximo score
  const addFood = () => {
    score++;
    if (score > maxScore) {
      maxScore = score;
      localStorage.setItem("maxScore", maxScore);
    }
    updateScore();
    createRandomFood();
  }

  // Maneja el fin del juego
  const gameOver = () => {
    gameOverSign.style.visibility = "visible";
    clearInterval(moveInterval);
    startButton.disabled = false;
    score = 0;
  }

  // Establece la nueva dirección de la serpiente
  const setDirection = newDirection => {
    direction = newDirection;
    //localStorage.setItem("direction", newDirection);
  }

  // Controla los eventos de teclado para cambiar la dirección
  const directionEvent = key => {
    switch (key.code) {
      case "ArrowUp":
        if (direction !== "ArrowDown") setDirection(key.code);
        break;
      case "ArrowDown":
        if (direction !== "ArrowUp") setDirection(key.code);
        break;
      case "ArrowLeft":
        if (direction !== "ArrowRight") setDirection(key.code);
        break;
      case "ArrowRight":
        if (direction !== "ArrowLeft") setDirection(key.code);
        break;
    }
  }

  const controlMove = () => {
    // Seleccionar los botones de dirección
    const upBtn = document.getElementById("upBtn");
    const downBtn = document.getElementById("downBtn");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    upBtn.addEventListener("click", () => {
      if (direction !== "ArrowDown") setDirection("ArrowUp");
    });

    downBtn.addEventListener("click", () => {
      if (direction !== "ArrowUp") setDirection("ArrowDown");
    });

    leftBtn.addEventListener("click", () => {
      if (direction !== "ArrowRight") setDirection("ArrowLeft");
    });

    rightBtn.addEventListener("click", () => {
      if (direction !== "ArrowLeft") setDirection("ArrowRight");
    });
  }

  // Crea comida aleatoriamente en el tablero
  const createRandomFood = () => {
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    drawSquare(randomEmptySquare, "foodSquare");
  }

  // Actualiza la visualización del puntaje
  const updateScore = () => {
    scoreBoard.innerText = score;
    maxScoreBoard.innerText = maxScore;
  }

  // Crea el tablero inicial
  const createBoard = () => {
    for (const [rowIndex, row] of boardSquares.entries()) {
      for (const [columnIndex, column] of row.entries()) {
        const squareValue = `${rowIndex}${columnIndex}`;
        //const squareValue = `${rowIndex.toString().padStart(2, "0")}${columnIndex.toString().padStart(2, "0")}`;
        const squareElement = document.createElement("div");
        squareElement.className = "square emptySquare";
        squareElement.id = squareValue;
        board.appendChild(squareElement);
        emptySquares.push(squareValue);
      }
    }
  }

  // Configura el juego al inicio
  const setGame = () => {
    snake = ["00", "01"];
    direction = null;
    boardSquares = Array.from(Array(boardSize), () =>
      new Array(boardSize).fill(squareTypes.emptySquare));
    board.innerHTML = "";
    emptySquares = [];
    createBoard();
  }

  // Inicia el juego
  const startGame = () => {
    setGame();
    direction = "ArrowRight";
    gameOverSign.style.visibility = "hidden";
    startButton.disabled = true;
    startMessage.style.visibility = "hidden";
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener("keydown", directionEvent);
    moveInterval = setInterval(() =>
      moveSnake(), gameSpeed);
  }

  // Inicializa el juego cuando se carga la página
  const initializeGame = () => {
    setGame();
    controlMove();
    startButton.addEventListener("click", startGame);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        startGame();
        controlMove();
      }
    }, { once: true });
  }
  initializeGame();
}
