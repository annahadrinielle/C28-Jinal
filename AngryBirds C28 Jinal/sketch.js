const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    constrainedLog = new Log(200,200,80,PI/2);

    bird = new Bird(100,100);
    /*
    var options = {
        bodyA : bird.body,
        bodyB : constrainedLog.body,
        stiffness : 0.5,
        length : 10
    }
    var chain = Matter.Constraint.create(options);
    World.add(world,chain);
    */

    new_chain = new Chain(log4.body,log5.body);

    slingshot = new Slingshot(bird.body,{x : 200, y : 200});

    console.log(bird.body);

    var bird_pos = bird.body.position

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    constrainedLog.display();
    platform.display();


    new_chain.display();

    slingshot.display();
    /*
    //line(bird x, bird y, logx, log y)
    strokeWeight(5);
    line(bird_pos.x, bird_pos.y, 
        constrainedLog.body.position.x,constrainedLog.body.position.y);

    */
}

function mouseDragged(){
    Body.setPosition( bird.body, {x: mouseX, y: mouseY} );

}

function mouseReleased(){
    slingshot.fly();
    console.log(bird.body);
}