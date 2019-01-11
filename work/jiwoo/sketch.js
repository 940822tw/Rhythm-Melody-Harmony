var background;
Drop[] drops = new Drop[50];

function setup() {
  fullScreen();
  background = loadImage("neo.gif");
  for(var i = 0; i < drops.length; i++) {
  drops[i] = new Drop();
  }
}

function draw() {
  background(background);
  for(var i = 0; i < drops.length; i++) {
  drops[i].show();
  drops[i].fall();

}
}

class Drop {
  var x = random(width);
  var y = random(-500,-100);
  var yspeed = random(10,50);
  var z = random(0, 20);
  var len = random(10,150);

  function fall() {
    y =  y + yspeed;


    if (y > height) {
      y = random(-200,-100);

    }
  }

  function show() {
    var thick = random(1,8);
    strokeWeight(thick);
    stroke(189, 20,  random(0, 800), random(128, 255));
    line(x,y,x,y+len);
}
}
