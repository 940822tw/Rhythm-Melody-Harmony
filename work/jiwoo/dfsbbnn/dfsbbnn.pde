PImage background;
Drop[] drops = new Drop[50];

void setup() {
  fullScreen();
  background = loadImage("neo.gif");
  for(int i = 0; i < drops.length; i++) {
  drops[i] = new Drop();
  }
}

void draw() {
  background(background);
  for(int i = 0; i < drops.length; i++) {
  drops[i].show();
  drops[i].fall();
  
}
}

class Drop {
  float x = random(width);
  float y = random(-500,-100);
  float yspeed = random(10,50);
  float z = random(0, 20);
  float len = random(10,150);

  void fall() {
    y =  y + yspeed;
    
        
    if (y > height) {
      y = random(-200,-100);
     
    }
  }
 
  void show() {
    float thick = random(1,8);
    strokeWeight(thick);
    stroke(189, 20,  random(0, 800), random(128, 255));
    line(x,y,x,y+len);
}
}
