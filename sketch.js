var speed, weight, deformation, car, wall;

function setup(){
    var canvas = createCanvas(1600, 400);
    rectMode(CENTER);
    speed=random(40, 100);
    weight=random(400,1500);
    deformation = 0.5*weight*speed*speed/22500;
    car = createSprite(50, 200, 50, 50);
    wall = createSprite(1000, 200, 60, 200);
}

function draw(){
    background(0, 0, 0);
    wall.shapeColor = rgb(80, 80, 80);
    car.velocityX = speed;
    if(deformation < 100){
        car.shapeColor = "green";
    }else if(deformation >= 100 && deformation <= 180){
        car.shapeColor = "yellow";
    }else if(deformation > 180){
        car.shapeColor = "red";
    }
    if(isTouching(car, wall)){
        car.velocityX=0;
    }
    drawSprites();
}

function isTouching(object1, object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;  
    } else {
        return false;
    }
}
