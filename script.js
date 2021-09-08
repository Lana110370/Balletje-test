var x, y, v;

function setup() {
  createCanvas(500, 400);
  x = 0;
  y = 200;
  v = 50;
}

function draw(){
  background (225);

  ellipse (x,y,50,50);
  fill('grey')
  x = x + v;

  if (x <= 0 || x >= 500){
    v = v * -1;
  }
}