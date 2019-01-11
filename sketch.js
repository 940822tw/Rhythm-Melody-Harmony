var colors;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('back');
  colors = [
    color(0,0,0)
  ];


}

function draw() {
  background(255,255);
  noFill();
  strokeWeight(3);
  for(var i = 0; i < 1; i++) {
    stroke(colors[0]);
    beginShape();
    for(var w = -20; w < width + 50; w += 20) {
      var h = height / 1.25;
      h += 100 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 15);
      curveVertex(w, h);
    }
    endShape();
  }

}
