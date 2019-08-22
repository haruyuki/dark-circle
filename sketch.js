var counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // noStroke();
}


function draw() {
  if (counter <= 10000) {
    for (var i = 250; i > 0; i--) {
      translate(windowWidth/2, windowHeight/2);
      rotate(random(0, 360));
      drawShape(i ,0);
    }
    counter++;
  } else {
    //fill(255, 255, 255, 1.5);
    //rect(0, 0, windowWidth, windowHeight);
    noLoop();
  }
}

function drawShape(x, y){
  fill(random(0,255), random(0,255), random(0,255), 0);
  rect(x, y, 50, 50);
}

function keyTyped() {
  if (key === " ") {
    saveCanvas("art.png");
  }
}