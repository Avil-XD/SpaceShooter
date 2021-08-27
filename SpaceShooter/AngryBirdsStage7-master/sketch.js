const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, asteroid;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
     ground = new Ground(600,height,1200,20);
     bird = new Bird(200,50);
     asteroid = new Asteroid(200,50,100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    bird.display();
    asteroid.display();
    ground.display();
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


