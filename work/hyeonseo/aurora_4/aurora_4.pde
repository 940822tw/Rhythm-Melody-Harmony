PImage img;
float t = 0; 




void setup() {
    size(1920, 1080);
    background(255);
    img = loadImage("aurora_4.1.png");
   
}

void draw() {
  
  image(img,0,0);
  smooth();
  t = t + 0.01;
  
    stroke(0);  
    fill(68,134,135,20);
    rect(0,0,width, height);
    
   
    
    
       
   
   stroke(198,214,245,15);//mountain
   
    for (float x = 0; x < width; x = x + 1) {
      float y = map(noise(x/150,t), 0, 1,500, 1000);
      line(x,y-500,x,y-random(100,500));
    }
    
   stroke(118,214,205,15);//bluegreen//bottpm
            
    for (float x = 0; x < width; x = x + 1) {
      float y = map(noise(x/150,t), 0, 1.1, 200, 800);
        line(x, y-100,x-random(300),y-100);}

   stroke(228,224,225,30);//top
            
    for (float x = 0; x < width; x = x + 1) {
      float y = map(noise(x/150,t), 0, 1, 200, 1000);
        line(x-200, y-400,x-random(200,300),y-400);}
        
  


  //moon
  noStroke();
  fill(255,random(200,255));
  ellipse(960,200,random(28,30),random(28,30));
  
  //star
  
  
  ellipse(random(width),random(500),random(3,6),random(3,6));
 
 
}
  
  
  
  
  
  
    
   
  
