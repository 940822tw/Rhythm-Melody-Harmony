var colors;
var type;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colors = [
    color(255,255, 255)
  ];

  type = 0;
}

function draw() {
  blendMode(BLEND);

  if(type == 0) {
    background(255);
    blendMode(EXCLUSION);
  } else {
    background(0);
    blendMode(SCREEN);
  }
  noFill();
  strokeWeight(20);
  for(var i = 0; i < 1; i++) {
    stroke(colors[i]);
    beginShape();
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(w, h);
    }
    endShape();
  }

}
