const LEFT_KEY = 37;
const UP_KEY = 38;
const RIGHT_KEY = 39;
const DOWN_KEY = 40;
const P_KEY = 80;
const R_KEY = 82;
const DIRECTIONS = {
  [LEFT_KEY]: [-1, 0],
  [UP_KEY]: [0, -1],
  [RIGHT_KEY]: [1, 0],
  [DOWN_KEY]: [0, 1],
};
const SNAKE_TYPE = 'snake';
const FOOD_TYPE = 'food';

const body = document.getElementById('body');
const width = body.offsetWidth;
const height = body.offsetHeight;

const blockSize = 20;
const snake = document.getElementById('snake');
let speedX = 1;
let speedY = 0;

let gameSpeed = 200;
let interval = null;

function asPx(val) {
  return `${val}px`;
}

function adjustInt(val) {
  const offset = val % blockSize;
  return val - offset;
}

function randomInt(min, max) {
  const generated = Math.floor(min + (Math.random() * max));
  return adjustInt(generated);
}

function updatePos(block) {
  block.style.top = asPx(parseInt(block.style.top) + (speedY * blockSize));
  block.style.left = asPx(parseInt(block.style.left) + (speedX * blockSize));
}

function areOverlapping(node1, node2) {
  rect1 = node1.getBoundingClientRect();
  rect2 = node2.getBoundingClientRect();

  return !(
    rect1.right <= rect2.left
    || rect1.left >= rect2.right
    || rect1.bottom <= rect2.top
    || rect1.top >= rect2.bottom
  );
}

function createBlock(x, y, type, color) {
  const block = document.createElement('div');
  block.style.position = 'fixed';
  block.style.border = '1px solid #fff';
  block.style.boxSizing = 'border-box';
  block.style.backgroundColor = color;
  block.style.width = blockSize;
  block.style.height = blockSize;
  block.style.left = asPx(x);
  block.style.top = asPx(y);
  block.className = type;
  return block;
}

function createSnakeBlock(x, y) {
  return createBlock(x, y, SNAKE_TYPE, 'black');
}

function createFoodBlock(x, y) {
  return createBlock(x, y, FOOD_TYPE, 'red');
}

function growSnake() {
  const firstChild = snake.firstChild;
  const y = parseInt(firstChild.style.top) + (speedY * blockSize);
  const x = parseInt(firstChild.style.left) + (speedX * blockSize);

  snake.insertBefore(createSnakeBlock(x, y), firstChild);
}

function updateSnake() {
  const firstChild = snake.firstChild;
  const x = parseInt(firstChild.style.left) + (speedX * blockSize);
  const y = parseInt(firstChild.style.top) + (speedY * blockSize);

  snake.insertBefore(createSnakeBlock(x, y), firstChild);
  snake.removeChild(snake.lastChild);
}

function handleKeyDown(e) {
  const key = e.which;
  const direction = DIRECTIONS[key];
  if (direction) {
    const [newX, newY] = direction;
    if (interval && newX === -speedX && newY === -speedY) return;

    [speedX, speedY] = direction;
    if (!interval) resume();
  }
  if (key === P_KEY) {
    console.log(interval);
    interval ? pause() : resume();
  }
  if (key === R_KEY) {
    reset();
  }
}

function snakeCrashed() {
  const firstChild = snake.firstChild;
  const x = parseInt(firstChild.style.left);
  const y = parseInt(firstChild.style.top);

  const overlapElement = document.elementFromPoint(x, y);
  if (overlapElement.className === SNAKE_TYPE) {
    return !!overlapElement.previousSibling;
  }

  return false;
}

function snakeAte() {
  const food = document.getElementsByClassName(FOOD_TYPE)[0];
  const head = snake.firstChild;

  return areOverlapping(food, head);
}

function generateFood() {
  const x = randomInt(0, width);
  const y = randomInt(0, height);
  const food = createFoodBlock(x, y);
  body.appendChild(food);
}

function deleteFood() {
  const food = document.getElementsByClassName(FOOD_TYPE)[0];
  if (!food) return;

  body.removeChild(food);
}

window.onkeydown = handleKeyDown;
function update() {
  updateSnake();
  if (snakeCrashed()) {
    reset();
  }
  if (snakeAte()) {
    deleteFood();
    growSnake();
    generateFood();
  }
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function resume() {
  interval = setInterval(update, gameSpeed);
}

function reset() {
  pause();
  while(snake.firstChild) {
    snake.removeChild(snake.firstChild);
  }

  x = adjustInt(width/2);
  y = adjustInt(height/2);
  snake.appendChild(createSnakeBlock(x, y));

  [speedX, speedY] = DIRECTIONS[RIGHT_KEY];
  growSnake();
  growSnake();

  deleteFood();
  generateFood();
  resume();
}

reset();