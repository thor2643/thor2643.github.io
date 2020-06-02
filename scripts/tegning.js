void setup(){
    size(600,600);  
    int x=100;
    int y=100;
    int l=50;
    int b=80;
  }
  
  void firkant(int x, int y){
   stroke(0);
   fill(255,0,0);
    rect(x,y,50,85);
    fill(155,200,255);
    ellipse(x+25, y+40, 40, random(50));
    delay(20);
  }
  
  
  void draw(){
    for (int y=100; y<500; y=y+85) {
    for (int x=100; x<450; x=x+50){
    firkant(x,y);
    
    }
    }
    
  }