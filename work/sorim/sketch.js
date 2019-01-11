var[] imgNames = {"eternal1.jpg", "eternal2.jpg", "eternal3.jpg", "eternal4.jpg"};
var img;
var imgIndex = 0;
import ddf.minim.*;
import ddf.minim.analysis.*;

Minim minim;
AudioPlayer song;
AudioOutput out;
AudioInput in;
var index = 100;
FFT fft;
var currentX;
var currentY;
var ellipseW = height/10;

function setup() {
  smooth();
  //rectMode(CENTER);
  createCanvas(1680, 1020);
  background(255);
 img = loadImage("eternal1.jpg");
  fill(0);




  minim = new Minim(this);
  song = minim.loadFile("eternal.mp3",512);
  song.play(0);



  nextImage();
}

function draw() {
  translate(width/2, height/2);

  var index = 0;

  for (var y = 0; y < img.height; y+=1) {
    for (var x = 0; x < img.width; x+=1) {
      var odds = (var)random(18000);

      if (odds < 1) {
        color pixelColor = img.pixels[index];
        pixelColor = color(red(pixelColor), green(pixelColor), blue(pixelColor), 100);

        push();
        translate(x-img.width/2, y-img.height/2);
        rotate(radians(random(-90, 90)));

        // Pavar by layers from rough strokes to finer details
        if (frameCount < 20) {
          // Big rough strokes
          pavarStroke(random(150, 200), pixelColor, (var)random(25, 50));
        } else if (frameCount < 50) {
          // Thick strokes
          pavarStroke(random(50, 125), pixelColor, (var)random(8, 12));
        } else if (frameCount < 300) {
          // Small strokes
          pavarStroke(random(20, 40), pixelColor, (var)random(1, 4));
        } else if (frameCount < 350) {
          // Big dots
          pavarStroke(random(30, 60), pixelColor, (var)random(5, 15));
        } else if (frameCount < 500) {
          // Small dots
          pavarStroke(random(5, 10), pixelColor, (var)random(1, 7));
        }

        pop();
      }

      index += 1;
    }
  }

  if (frameCount > 600) {
    noLoop();
  }
}

function nextImage() {
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


function pavarStroke(var strokeLength, color strokeColor, var strokeThickness)
{
  var stepLength = strokeLength/5.7;
  var tangent1 = 0;
  var tangent2 = 0;

  var odds = random(120);

  if (odds < 0.5) {
    tangent1 = random(strokeLength, strokeLength);
    tangent2 = random(strokeLength, strokeLength);
  }


  noFill();
  stroke(strokeColor);
  strokeWeight(strokeThickness);
  curve(tangent1, -stepLength*3, 0, -stepLength, 0, stepLength, tangent2, stepLength*3);

  var z = 7;


  for (var num = strokeThickness; num > 0; num --) {
    var offset = random(-7, 35);
    color newColor = color(red(strokeColor)+offset, green(strokeColor)+offset, blue(strokeColor)+offset, random(100, 255));

    stroke(newColor);
    strokeWeight((var)random(0,8));
    curve(tangent1, -stepLength*3, z-strokeThickness/3, -stepLength*random(0.9, 1.1), z-strokeThickness/3, stepLength*random(0.9, 1.1), tangent2, stepLength*3);

    z += 1;
  }
}


function mousePressed() {
  nextImage();
}
</script>
