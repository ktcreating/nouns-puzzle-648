let bx;
let by;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
 let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  bx = 0;
  by = 0;
   bg = loadImage('bg.png');
   glass = loadImage('glasses.png');
   four = loadImage('4.png');
   zero = loadImage('0.png');
   one = loadImage('1.png');
   two = loadImage('2.png');
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  const password = input.value(); 
   if (password == 4012) {
      greeting.html('Congratulations! Puzzle #648 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
 }  
}

function draw() {
  background(bg);

  if (
    mouseX > bx + 190 &&
    mouseX < bx + 430 &&
    mouseY > by + 206 &&
    mouseY < by + 320
  ) {
    overBox = true;
    if (!locked) {}
  } else {
    overBox = false;
  }
  
if (bx<-140 && by<-150) {
     image(four,0,0,600,600)
    } else {
    }  
  
if (bx>140 && by<-150) {
     image(zero,0,0,600,600)
    } else {
    } 
  
if (bx<-140 && by>200) {
     image(one,0,0,600,600)
    } else {
    } 
  
if (bx>140 && by>200) {
     image(two,0,0,600,600)
    } else {
    } 


  // Draw the glass
  image(glass, bx, by);
 }

function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
