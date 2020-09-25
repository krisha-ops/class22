const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var engine,world;

 var ball;
 var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 4.0
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  var ground_options ={
     isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  
}