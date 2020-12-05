class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke= loadImage("sprites/smoke.png");
    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>220 && this.body.velocity.x>10) {
     var pos = [this.body.position.x,this.body.position.y]
    this.path.push(pos);
    }
    //console.log(this.path);
  for (var i=0;i<this.path.length;i++) {
    image(this.smoke,this.path[i][0],this.path[i][1]);
  }
    
    
  
  }
}
