
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = 	Matter.Constraint;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var platform;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;



function preload(){}

function setup(){
createCanvas(1220, 580);

engine = Engine.create();
world = engine.world;

ball1=new Ball(width/2,380,25);
ball2=new Ball(560,380,25);
ball3=new Ball(510,380,25);
ball4=new Ball(660,380,25);
ball5=new Ball(710,380,25);

platform=new Rod(width/2 , 180 , 250 , 15);

rope1=new String(ball1.body,platform.body,0,10);
rope2=new String(ball2.body,platform.body,-50,10);
rope3=new String(ball3.body,platform.body,-100,10);
rope4=new String(ball4.body,platform.body,50,10);
rope5=new String(ball5.body,platform.body,100,10);

Engine.run(engine);}


function draw(){

 Engine.update(engine);
rectMode(CENTER);
background("black");
 
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

platform.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

drawSprites();}

function keyPressed(){if(keyCode === UP_ARROW){Matter.Body.applyForce(ball5.body,ball5.body.position,{x:175,y:375});}}




