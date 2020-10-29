
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1;
var bodDiameter


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bobDiameter=40;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,600,50,50);
	bob2 = new Bob(350,600,50,50);
	bob3 = new Bob(400,600,50,50);
  bob4 = new Bob(450,600,50,50);
	bob5 = new Bob(500,600,50,50);

  roof = new Roof(400,300,300,30);

	Engine.run(engine);
 
	rope1 = new Rope(bob1.body, roof.body, bobDiameter*-2.5, 0);
	rope2 = new Rope(bob2.body, roof.body, bobDiameter*-1.2, 0);
  rope3 = new Rope(bob3.body, roof.body, bobDiameter*0, 0);
  rope4 = new Rope(bob4.body, roof.body, bobDiameter*1.2, 0);
  rope5 = new Rope(bob5.body, roof.body, bobDiameter*2.5, 0);
}

function draw() {
  rectMode(CENTER);
  background(200);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:130,y:-130})
	}
}



