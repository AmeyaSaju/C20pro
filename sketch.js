
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ground;
var bar1, bar2;
var ball;

/*function preload()
{
	
	
}

*/
function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,550,800,10);
	bar1 = new Ground(550,480,10,150);
	bar2 = new Ground(750,480,10,150);

	let ball_options = {
		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle (15,200,15,ball_options);
	World.add(world,ball);


	
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  ground.show();
  bar1.show();
  bar2.show();
  ellipse(ball.position.x,ball.position.y,15);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:15,y:0});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-15});
	}
}



