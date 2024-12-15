let img1;
let img2;
let img3;
let img4;
let x = 60;
let x1 = 180;
let x2 = 310;
let speed = 6;
let speed1 = 5;
let speed2 = 3;
let col;
let numBalloons = 4;
let popSound;


//list of possible prize positions
let prizePosition1 = [50, 150, 250, 350];
let prizePosition2 = [150, 350, 50, 250];
let prizePosition3 = [350, 250, 150, 50];
//picks one of those positions
let prizePicker;

function preload(){
  img1 = loadImage('gift.jpg');
  img2 = loadImage('cash.jpg');
  img3 = loadImage('bear.jpg');
  img4 = loadImage('bg1.jpg');
  popSound = loadSound('pop.wav'); // Popping sound
}

function setup() {
  createCanvas(400, 400);
  noCursor();
  
  prizePicker = int(random(numBalloons));
  randomPrize = prizePosition1[prizePicker];
  randomPrize = prizePosition2[prizePicker];
  randomPrize = prizePosition3[prizePicker];
  col = color(51, 204, 204);
}

function draw() {
  background(255);

 if (keyCode == 32) {
  imageMode(CENTER);
  image(img1, prizePosition1[prizePicker], 50, 70, 70);
  image(img2, prizePosition2[prizePicker], 175, 70, 70);
  image(img3, prizePosition3[prizePicker], 300, 70, 70);
 }else {
 }
 
//balloons

 //red
  if(x >= width){
    speed = -4;
  }
  if (x<=50){
    speed=0;
  }
  if (mouseX > 20 && mouseX < 80 && mouseY > 10 && mouseY < 90 && mouseIsPressed){    
    fill(255); 
  } else{
    noStroke();
    fill(255, 102, 102);
    ellipse(50, x, 70, 80);
    }
  
 //blue 
      if (mouseX > 120 && mouseX < 180 && mouseY > 10 && mouseY < 90 && mouseIsPressed){
    fill(255);
  } else{
    noStroke();
    fill(0, 153, 255);
    ellipse(150, x, 70, 80);
  }
  
  
//purple
  if (mouseX > 220 && mouseX < 280 && mouseY > 10 && mouseY < 90 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(164, 113, 250);
    ellipse(250, x, 70, 80); 
  }
  
  //dark green
  if (mouseX > 320 && mouseX < 380 && mouseY > 10 && mouseY < 90 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(0, 153, 0);
    ellipse(350, x, 70, 80); 
    }
  
  //yellow
  if(x1 >= width){
    speed1 = -3;
  }
  if (x1<=175){
    speed1=0;
  }
  if (mouseX > 20 && mouseX < 80 && mouseY > 135 && mouseY < 215 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(255, 240, 100);
    ellipse(50, x1, 70, 80);
  }
  
  //green
    if (mouseX > 120 && mouseX < 180 && mouseY > 135 && mouseY < 215 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(153, 200, 100);
    ellipse(150, x1, 70, 80);
  }
  
  //orange
  if (mouseX > 220 && mouseX < 280 && mouseY > 135 && mouseY < 215 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(255, 153, 51)
    ellipse(250, x1, 70, 80);
  }
  
  //pink
  if (mouseX > 320 && mouseX < 380 && mouseY > 135 && mouseY < 215 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(255, 102, 204);
    ellipse(350, x1, 70, 80);
  }
  
  //light blue
  if(x2 >= width){
    speed2 = -1;
  }
  if (x2<=300){
    speed2=0;
  }
  if (mouseX > 20 && mouseX < 80 && mouseY > 260 && mouseY < 340 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(51, 204, 255);
    ellipse(50, x2, 70, 80);
  }
  
  //grey
  if (mouseX > 120 && mouseX < 180 && mouseY > 260 && mouseY < 340 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(150);
    ellipse(150, x2, 70, 80);
  }
  
  //dark red
  if (mouseX > 220 && mouseX < 280 && mouseY > 260 && mouseY < 340 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(204, 0, 0);
    ellipse(250, x2, 70, 80);
  }
  
  //cyan
  if (mouseX > 320 && mouseX < 380 && mouseY > 260 && mouseY < 340 && mouseIsPressed){    
    fill(255);
  } else{
    noStroke();
    fill(col);
    ellipse(350, x2, 70, 80);
  }

  x=x+speed;
  x1=x1+speed1;
  x2=x2+speed2;

  //text
  push();
  // fill (0);
  // rect(0, 350 ,400, 400);
  tint(130);
  imageMode(CENTER);
  image(img4, 200, 375, 400, 50);
  textAlign(CENTER);
  fill (255);
  textStyle(BOLD);
  textSize(20);
  text('Balloon Bust!', 200, 375);
  textStyle(NORMAL);
  textSize(12);
  text('Shoot: Hover click        Start / Reset Rewards: Spacebar', 200, 390);
 pop();
 
  //mouse
  push();
  noFill();
  stroke(51, 204, 51);
  strokeWeight(3)
  cursor(CROSS);
  circle(mouseX, mouseY, 30);
  pop();
}

function keyPressed() {
  //if spacebar is pressed, randomize the location rather than restarting the program
  if (keyCode == 32) {
  prizePicker = int(random(numBalloons));
  col = color(random(255), random(255), random(255));
  }
}

//Thanks to the YouTube channel named The Coding Train
function mousePressed() {
if (mouseX > 20 && mouseX < 80 && mouseY > 10 && mouseY < 90 && mouseIsPressed){    
    popSound.play();
   } 
  if (mouseX > 120 && mouseX < 180 && mouseY > 10 && mouseY < 90 && mouseIsPressed){  
  popSound.play();
        }
  if (mouseX > 220 && mouseX < 280 && mouseY > 10 && mouseY < 90 && mouseIsPressed){  
    popSound.play();
  }
  if (mouseX > 320 && mouseX < 380 && mouseY > 10 && mouseY < 90 && mouseIsPressed){  
    popSound.play();
  }
  if (mouseX > 20 && mouseX < 80 && mouseY > 135 && mouseY < 215 && mouseIsPressed){  
    popSound.play();
  }
  if (mouseX > 120 && mouseX < 180 && mouseY > 135 && mouseY < 215 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 220 && mouseX < 280 && mouseY > 135 && mouseY < 215 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 320 && mouseX < 380 && mouseY > 135 && mouseY < 215 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 20 && mouseX < 80 && mouseY > 260 && mouseY < 340 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 120 && mouseX < 180 && mouseY > 260 && mouseY < 340 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 220 && mouseX < 280 && mouseY > 260 && mouseY < 340 && mouseIsPressed){   
  popSound.play();
  }
  if (mouseX > 320 && mouseX < 380 && mouseY > 260 && mouseY < 340 && mouseIsPressed){   
  popSound.play();
  } 
}
