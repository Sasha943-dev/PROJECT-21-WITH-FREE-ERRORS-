
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





var ground,ground1,ground2;
var ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options={

		restitution:2
	}
	ball = Bodies.circle(0,100,10,ball_options);
	ground = new Ground(200,690,800,5);
	ground1 = new Ground(600,690,5,100);
	ground2 = new Ground(700,690,5,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show();
  ground1.show();
  ground2.show();
  ellipse(ball.position.x,ball.position.y,10);
  Engine.update(engine);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

				Matter.Body.applyForce(ball,{x:0,y:0},{x:0.08,y:0.05});
	}
}


