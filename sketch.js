//declare and initialize global variables named x, y, d, and catEyesX
let x = 100;
let y = 200;
let d = 100;
let catEyesX;
let catEyesY;

// draws a cat

function setup() {
  createCanvas(400, 400);
  background('#67C5E9');}

  function draw() {
  
  // draw ears
  fill('#fae');
  stroke('#B56565');
  triangle(260,140,240,200,160,200);
  triangle(130,140,240,200,160,200);

  // draw head
  fill('#7d4339');
  stroke('#B56565');
  ellipse(200, 200, 100, 85);

  // draw right whiskers
  stroke('#FFFFFF');
  line(260, 200, 220, 220);
  line(260, 220, 220, 220);
  line(260, 240, 220, 220);
  
  // draw left whiskers
  line(140, 200, 180, 220);
  line(140, 220, 180, 220);
  line(140, 240, 180, 220);

  // draw nose
  fill('#fae');
  stroke('#FF5733');
  triangle(190,200,200,210,210,200);

  // draw eyes
  if (mouseIsPressed){
    fill(random(255), random(255),random(255))
    background(random(255), random(255),random(255));
  }
  else{
  fill('#FFEB00');
  stroke('#000000');
  ellipse(x+80, y-10, 20,20);
  ellipse(x+120, y-10, 20,20);}
  
  
  //draw pig pupils
  fill('#000000');
  ellipse(x+80, y-10, 3,10);
  ellipse(x+120, y-10, 3,10);

  
  //write meow
  if (mouseIsPressed){
  fill('#B703FF');
  stroke('#F9EBFF');
  textSize(30);
  text('MEOW', 230, 128);
  fill('#B703FF');
  stroke('#F9EBFF');
  textSize(30);
  text('MEOW', 30, 40);
  fill('#B703FF');
  stroke('#F9EBFF');
  textSize(30);
  text('MEOW', 114, 348);
  fill('#B703FF');
  stroke('#F9EBFF');
  textSize(30);
  text('MEOW', 20, 228);
  fill('#B703FF');
  stroke('#F9EBFF');
  textSize(30);
  text('MEOW', 287, 298);}
  }

  function mousePressed(){
  if (dist(200, 200, 200, 200) < d/2){
  console.log("meow feed me!");}
}