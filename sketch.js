
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,rec1,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(100,500,PI/2);
	ball2 = new ball(140,500,PI/2);
	ball3 = new ball(180,500,PI/2);
	ball4 = new ball(220,500,PI/2);
	ball5 = new ball(260,500,PI/2);

	rec1 = new Rect(100,200,40,20);
	rec2 = new Rect(120,200,40,20);
	rec3 = new Rect(140,200,40,20);
	rec4 = new Rect(160,200,40,20);
	rec5 = new Rect(180,200,40,20);

	chain = new Chain(ball1.body,rec1.body);
	chain = new Chain(ball2.body,rec2.body);
	chain = new Chain(ball3.body,rec3.body);
	chain = new Chain(ball4.body,rec4.body);
	chain = new Chain(ball5.body,rec5.body);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rec1.display();
  rec2.display();
  rec3.display();
  rec4.display();
  rec5.display();

  
  drawSprites();
 
}



