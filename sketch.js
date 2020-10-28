
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var b,l,r;
function preload(){
	b = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,50,50,50);
ground = new Ground(400,480,800,20);

r = createSprite(650,420,10,80);
r.addImage(b);
r.scale = 0.5;
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  

paper.display();
ground.display();

  drawSprites();
 
}
function keyPressed() {
	 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 } 
}


