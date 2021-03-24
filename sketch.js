//creating two rectangle variables
var movingRect, fixedRect;

function setup() {
  //creating the canvas
  createCanvas(800,400);
  //creating a rectangle that moves, and making it green
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
  //creating a fixed reactangle that doesn't move, and making it green
  fixedRect = createSprite(200, 300, 100, 50);
  fixedRect.shapeColor = "green";
}

function draw() {
  //white background
  background(255,255,255);

  //making the moving rectangle move with mouse on both x and y axis
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(fixedRect.x - movingRect.x);

  //collision algorithm (collision function in p5) - creating a library
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}