//import processing.sound.*;

import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

Minim minim;
AudioPlayer song1;
AudioPlayer song2;
AudioPlayer song3;
AudioPlayer song4;
AudioInput input;
FFT fft;


PImage img;
PImage img2;
PFont myFont;
int count;
int imageNumber;

float x = 0;
float y = 0;
float a = 1;
float speed = 0.5; //speed od square

//SoundFile file;


void setup() { 
  fullScreen(); 
  noStroke(); 
  smooth();
  minim = new Minim(this);
  song1 = minim.loadFile("Does_It_Float.mp3");
  song1.play();
  song3 = minim.loadFile("End_of_Time.mp3");
  song4 = minim.loadFile("Old_MacDonald_Instrumental.mp3");
  
  fft = new FFT(song1.bufferSize(), song1.sampleRate());
  img = loadImage("cat1.png");
  img2 = loadImage("cat2.png");
  imageMode(CENTER);
  
 
}





void draw() { 
  background(0);
    fft.forward(song1.mix);
    
myFont = createFont("Concert One", 14);
  textFont(myFont);
  textAlign(TOP, TOP);
  text("Click!", pmouseX, 90);
  

  
  for (float x =40; x<width; x+=40) {
    for (float y = 50; y<height; y+=50) {
      float angle = atan2(mouseY-y, mouseX-x);
      colorMode(HSB);
      fill(random(0,mouseX),random(0,mouseY),255);
      pushMatrix();
      translate(x, y);
      rotate(angle);
      ellipse(0,0,a,30);
      popMatrix();
    }
  }
  if (mouseX<=700){
    a=a+speed;
    speed=speed*-1.1;
  }else {
   a=0;
   
  }
  if (speed>50){
  speed=speed/4;
  }
 if (mouseX>=1000){
   for(int i=0; i<song1.right.size() -1; i++){
     a=song1.right.get(i)*50;
   }
 } 
 
  
  
  if (count == 0) {
    if (imageNumber == 0) {
      image(img, mouseX,mouseY, 300,300);
    }
    if (imageNumber == 1) {
      image(img2, mouseX, mouseY, 300,300);
    }
    imageNumber = (imageNumber + 2)%3;
  }

  
  if (mousePressed == true) {
    song2 = minim.loadFile("01.mp3");
    song2.play();
  }



if (mouseX<=700){
  song1.pause();
  song3.play();
} else {
   song3.pause();
   song1.play();
}


if(700<mouseX&&mouseX<1000) {
   song1.pause();
   song3.pause();
   song4.play();


} else {
   song4.pause();
}


}