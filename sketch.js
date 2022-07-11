const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload(){

	dustinImg = addImage("dustbin.png");
	paperImg = addImage("paper.png");

}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(1185, 570, 200,200);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    }
}
