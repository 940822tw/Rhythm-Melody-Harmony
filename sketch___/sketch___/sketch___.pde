String[] imgNames = {"eternal1.jpg", "eternal2.jpg", "eternal3.jpg", "eternal4.jpg"};
PImage img;
int imgIndex = 0;
import ddf.minim.*;
import ddf.minim.analysis.*;
 
Minim minim;
AudioPlayer song;
AudioOutput out;
AudioInput in;
int index = 100;
FFT fft;
int currentX;
int currentY;
int ellipseW = height/10;

void setup() {
  smooth();
  //rectMode(CENTER);
  size(1680, 1020);
  background(255);
 img = loadImage("eternal1.jpg");
  fill(0);




  minim = new Minim(this);
  song = minim.loadFile("eternal.mp3",512);
  song.play(0);
  

  
  nextImage();
}

void draw() {
  translate(width/2, height/2);
  
  int index = 0;
  
  for (int y = 0; y < img.height; y+=1) {
    for (int x = 0; x < img.width; x+=1) {
      int odds = (int)random(18000);
      
      if (odds < 1) {
        color pixelColor = img.pixels[index];
        pixelColor = color(red(pixelColor), green(pixelColor), blue(pixelColor), 100);
        
        pushMatrix();
        translate(x-img.width/2, y-img.height/2);
        rotate(radians(random(-90, 90)));
        
        // Paint by layers from rough strokes to finer details
        if (frameCount < 20) {
          // Big rough strokes
          paintStroke(random(150, 200), pixelColor, (int)random(25, 50));
        } else if (frameCount < 50) {
          // Thick strokes
          paintStroke(random(50, 125), pixelColor, (int)random(8, 12));
        } else if (frameCount < 300) {
          // Small strokes
          paintStroke(random(20, 40), pixelColor, (int)random(1, 4));
        } else if (frameCount < 350) {
          // Big dots
          paintStroke(random(30, 60), pixelColor, (int)random(5, 15));
        } else if (frameCount < 500) {
          // Small dots
          paintStroke(random(5, 10), pixelColor, (int)random(1, 7));
        }
        
        popMatrix();
      }
      
      index += 1;
    }
  }
  
  if (frameCount > 600) {
    noLoop();
  }
}

void nextImage() {
  background(255);
  loop();
  frameCount = 0;
  
  img = loadImage(imgNames[imgIndex]);
  img.loadPixels();
  
  imgIndex += 1;
  if (imgIndex >= imgNames.length) {
    imgIndex = 0;
  }
}


void paintStroke(float strokeLength, color strokeColor, int strokeThickness) 
{
  float stepLength = strokeLength/5.7;
  float tangent1 = 0;
  float tangent2 = 0;
  
  float odds = random(120);
  
  if (odds < 0.5) {
    tangent1 = random(strokeLength, strokeLength);
    tangent2 = random(strokeLength, strokeLength);
  } 
  

  noFill();
  stroke(strokeColor);
  strokeWeight(strokeThickness);
  curve(tangent1, -stepLength*3, 0, -stepLength, 0, stepLength, tangent2, stepLength*3);
  
  int z = 7;
  

  for (int num = strokeThickness; num > 0; num --) {
    float offset = random(-7, 35);
    color newColor = color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, random(100, 255));
    
    stroke(newColor);
    strokeWeight((int)random(0,8));
    curve(tangent1, -stepLength*3, z-strokeThickness/3, -stepLength*random(0.9, 1.1), z-strokeThickness/3, stepLength*random(0.9, 1.1), tangent2, stepLength*3);
    
    z += 1;
  }
}


void mousePressed() {
  nextImage();
}
