var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.3

	}
	//Create the Bodies Here.
	groundObj = new ground (width/2,670,width,5)
	leftSide = new ground (530,624,10,80)
	rightSide = new ground (660,624,10,80)

	ball=Bodies.circle(170,80,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40)
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);

  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.27,y:-0.27})
		
	}
  }

