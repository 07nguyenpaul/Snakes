const Snake = require('./snake');
const Food = require('./food');

function World(width, height, food) {
  this.width = 600;
  this.height = 400;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food();
}

// GENERATE FOOD IN DIFFERENT POSITIONS
World.prototype.generateFood = function() {

  this.food.x = Math.round(Math.round(Math.random() * 580)/20) * 20;
  this.food.y = Math.round(Math.round(Math.random() * 380)/20) * 20;

  if(this.food.x === this.snake.addSegment.x && this.food.y === this.snake.addSegment.y) {
    var x = this.food.x = this.food.x;
    var y = this.food.y = this.food.y;
    return (x, y);
  }
};

// CHECKING WHAT IS IN FRONT OF SNAKE
// RIGHT
World.prototype.rightOfSnake = function() {
  if (this.snake.x + 20 === this.food.x && this.snake.y === this.food.y) {
    return 'food';
  } else if (this.snake.x + 20 === 600) {
     return 'wall';
  } else if (this.snake.selfCollision()){
    return 'self';
  } else {
    return 'empty'; } };

World.prototype.rightArrow = function () {
  switch (this.rightOfSnake()) {
    case 'food':
      this.snake.moveRight();
      this.snake.grow();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      break;
    case 'self':
      this.endGame();
      break;
    default:
      this.snake.moveRight();
  }
};

// LEFT
World.prototype.leftOfSnake = function() {
  if (this.snake.x - 20 === this.food.x && this.snake.y === this.food.y) {
    return 'food';
  } else if (this.snake.x === 0) {
    return 'wall';
  } else if (this.snake.selfCollision()){
    return 'self';
  } else {
    return 'empty';
  }
};

World.prototype.leftArrow = function () {
  switch (this.leftOfSnake()) {
    case 'food':
      this.snake.moveLeft();
      this.snake.grow();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      break;
    case 'self':
      this.endGame();
      break;
    default:
      this.snake.moveLeft();
  }
};

// UP
World.prototype.upOfSnake = function() {
  if (this.snake.y - 20 === this.food.y && this.snake.x === this.food.x) {
    return 'food';
  } else if (this.snake.y === 0) {
    return 'wall';
  } else if (this.snake.selfCollision()){
    return 'self';
  } else {
    return 'empty';
  }
};

World.prototype.upArrow = function () {
  switch (this.upOfSnake()) {
    case 'food':
      this.snake.moveUp();
      this.snake.grow();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      break;
    case 'self':
      this.endGame();
      break;
    default:
      this.snake.moveUp();
  }
};

// DOWN
World.prototype.downOfSnake = function() {
  if (this.snake.y + 20 === this.food.y && this.snake.x === this.food.x) {
    return 'food';
  } else if (this.snake.y + 20 === 400) {
    return 'wall';
  } else if (this.snake.selfCollision()){
    return 'self';
  } else {
    return 'empty';
  }
};

World.prototype.downArrow = function () {
  switch (this.downOfSnake()) {
    case 'food':
      this.snake.moveDown();
      this.snake.grow();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      break;
    case 'self':
      this.endGame();
      break;
    default:
      this.snake.moveDown();
  }
};



//GAME OVER
World.prototype.endGame = function() {
  alert ('😱 Oh no, Game Over!!  Press OK to start a new game.');
  window.location.reload();
};

World.prototype.tick = function() {
  var direction = this.snake.direction;
    if (direction === 'right') {this.rightArrow();}
    if (direction === 'left') {this.leftArrow();}
    if (direction === 'up') {this.upArrow();}
    if (direction === 'down') {this.downArrow();}
};

module.exports = World;
