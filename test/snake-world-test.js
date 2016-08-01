const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const World = require('../lib/world');


describe('Snake in relation to the World', function() {

  it('should know about the World if it is passed in', function() {
    var world = new World (400, 300);
    var snake = new Snake (0, 0, 20, 20, world);
    assert.equal(snake.world, world);
  });
});

describe('World in relation to snake', function() {

  it('should have a rightArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.rightArrow);
  });

  it('should move the snake right when the moveRight() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveRight();
    assert.equal(snake.x, 40);
  });

  it('should have a leftArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.leftArrow);
  });

  it('should move the snake left when the moveLeft() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveLeft();
    assert.equal(snake.x, 0);
  });

  it('should have a upArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.upArrow);
  });

  it('should move the snake up when moveUp() is called', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveUp();
    assert.equal(snake.y, 0);
  });

  it('should have a downArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.downArrow);
  });

  it('should move the snake down when moveDown() is called', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveDown();
    assert.equal(snake.y, 40);
  });

  context('When Snake is eating', function() {

    it('should have a method called snakeEatsFood()', function() {
      var world = new World(100, 100);

      assert.isFunction(world.isSnakeEating);
    });

    it('should remove food when snake eats food', function() {
      
    });

  });
});
