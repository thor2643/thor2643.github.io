
boolean on=false;

  void mousePressed(){
    on=true;
  }
  
    void mouseReleased(){
    on=false;
    }
  
void setup(){
  size(1000,700);
  
  

 }

//lave en 50x50x50 kube
  void kube(float x,float y){
    line(x, y, x,y-200);
    line(x, y, x+141.4, y-141.4);
    line(x, y, x-141.4, y-141.4);
    line(x+141.4, y-141.4, x+141.4, y-141.4-200);
    line(x-141.4, y-141.4, x-141.4, y-141.4-200);
    line(x, y-200, x+141.4, y-141.4-200);
    line(x, y-200, x-141.4, y-141.4-200);
    line(x-141.4, y-141.4-200, x, y-141.4-200-141.4);  
    line(x+141.4, y-141.4-200, x, y-141.4-200-141.4);
    line(x, y-141.4-200-141.4, x, y-141.4-141.4); 
    line(x, y-141.4-141.4, x+141.4, y-141.4);
    line(x, y-141.4-141.4, x-141.4, y-141.4);
  }
  
void draw(){
  float x=mouseX;
  float y=mouseY;
  
  if (on==true){
  kube(x,y);
  }
  
  
  
}
